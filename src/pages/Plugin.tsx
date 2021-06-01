import { IonButton, IonButtons, IonContent, IonHeader, IonItem, IonLabel, IonList, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { useParams } from 'react-router';
import './Plugin.css';

import { App } from '@capacitor/app';
import { AppLauncher } from '@capacitor/app-launcher';
import { ActionSheet, ActionSheetButtonStyle } from '@capacitor/action-sheet';
import { Browser } from '@capacitor/browser';
import { Camera, CameraResultType } from '@capacitor/camera';
import { Clipboard } from '@capacitor/clipboard';
import { useCallback } from 'react';

interface PluginEntry {
  name: string;
  package: string;
  description: string;
  methods: { [key:string]: any };
}

const pluginData = {
  'action-sheet': {
    name: 'Action Sheet',
    package: '@capacitor/action-sheet',
    description: 'The Action Sheet API provides access to native Action Sheets, which come up from the bottom of the screen and display actions a user can take.',
    methods: {
      'showActions': async () => {
        return ActionSheet.showActions({
          title: 'Photo Options',
          message: 'Select an option to perform',
          options: [
            {
              title: 'Upload',
            },
            {
              title: 'Share',
            },
            {
              title: 'Remove',
              style: ActionSheetButtonStyle.Destructive,
            },
          ],
        });
      }
    }
  },
  app: {
    name: 'App',
    description: 'The App API handles high level App state and events. For example, this API emits events when the app enters and leaves the foreground, handles deeplinks, opens other apps, and manages persisted plugin state.',
    package: '@capacitor/app',
    methods: {
      exitApp: () => App.exitApp(),
      getInfo: () => App.getInfo(),
      getState: () => App.getState(),
      getLaunchUrl: () => App.getLaunchUrl()
    }
  },
  'app-launcher': {
    name: 'App Launcher',
    description: 'The AppLauncher API allows your app to open other apps',
    package: '@capacitor/app-launcher',
    methods: {
      canOpenUrl: () => {
        return AppLauncher.canOpenUrl({ url: 'com.getcapacitor.myapp' });
      },
      openUrl: () => {
        return AppLauncher.openUrl({ url: 'com.getcapacitor.myapp://page?id=portfolio' });
      },
    }
  },
  browser: {
    name: 'Browser',
    description: `The Browser API provides the ability to open an in-app browser and subscribe to browser events.`,
    package: '@capacitor/browser',
    methods: {
      open: () => {
        Browser.open({ url: 'http://capacitorjs.com/' });
      },
      close: () => Browser.close()
    }
  },
  camera: {
    name: 'Camera',
    package: '@capacitor/camera',
    description: 'The Camera API provides the ability to take a photo with the camera or choose an existing one from the photo album.',
    methods: {
      'getPhoto': async () => {
        const image = await Camera.getPhoto({
          quality: 90,
          allowEditing: true,
          resultType: CameraResultType.Uri
        });

        // image.webPath will contain a path that can be set as an image src.
        // You can access the original file using image.path, which can be
        // passed to the Filesystem API to read the raw data of the image,
        // if desired (or pass resultType: CameraResultType.Base64 to getPhoto)
        var imageUrl = image.webPath;

        // Can be set to the src of an image now
        // imageElement.src = imageUrl;
      }
    }
  },
  clipboard: {
    name: 'Clipboard',
    description: 'The Clipboard API enables copy and pasting to/from the system clipboard.',
    package: '@capacitor/clipboard',
    methods: {
      write: () => Clipboard.write({
        string: "Hello World!"
      }),
      read: () => Clipboard.read()
    }
  }
} as { [key:string]: PluginEntry };

const PluginDemo = ({ plugin }: { plugin: PluginEntry }) => {
  const runMethod = useCallback((method) => {
    const methodDemo = plugin.methods[method];
    methodDemo?.();
  }, [plugin]);

  return (
    <div className="plugin">
      <h2>{plugin.name}</h2>
      <p>
        {plugin.description}
      </p>
      <h4>Methods</h4>
      <IonList>
      {Object.keys(plugin.methods).map(method => (
        <IonItem key={method}>
          <IonLabel slot="start">{method}</IonLabel>
          <IonButton slot="end" onClick={() => runMethod(method)}>Run</IonButton>
        </IonItem>
      ))}
      </IonList>
    </div>
  )
}

const Page: React.FC = () => {

  const { name } = useParams<{ name: string; }>();

  const plugin = pluginData[name];

  if (!plugin) {
    return null;
  }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>{plugin.name}</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">{name}</IonTitle>
          </IonToolbar>
        </IonHeader>
        <PluginDemo plugin={plugin} />
      </IonContent>
    </IonPage>
  );
};

export default Page;
