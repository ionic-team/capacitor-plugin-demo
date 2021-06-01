import { IonButton, IonButtons, IonContent, IonHeader, IonItem, IonLabel, IonList, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { useParams } from 'react-router';
import './Plugin.css';

import { ActionSheet, ActionSheetButtonStyle } from '@capacitor/action-sheet';
import { useCallback } from 'react';

interface PluginEntry {
  name: string;
  description: string;
  methods: { [key:string]: any };
}

const pluginData = {
  'action-sheet': {
    name: 'Action Sheet',
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
  }
} as { [key:string]: PluginEntry };

const PluginDemo = ({ plugin }: { plugin: PluginEntry }) => {
  const runMethod = useCallback((method) => {
    const methodDemo = plugin.methods[method];
    console.log('Running method', methodDemo);
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
        <IonItem>
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
