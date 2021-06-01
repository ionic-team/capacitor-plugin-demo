import {
  IonContent,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonListHeader,
  IonMenu,
  IonMenuToggle,
  IonNote,
} from '@ionic/react';

import { useLocation } from 'react-router-dom';
import { albums, apps, archiveOutline, archiveSharp, body, bookmarkOutline, browsers, camera, chatbox, clipboard, cog, compass, document, fileTray, funnel, heartOutline, heartSharp, informationCircle, key, list, mailOutline, mailSharp, mic, move, notifications, notificationsOutline, paperPlaneOutline, paperPlaneSharp, phonePortrait, rocket, share, square, trashOutline, trashSharp, warningOutline, warningSharp, wifi } from 'ionicons/icons';
import './Menu.css';

interface AppPage {
  url: string;
  icon: string;
  title: string;
}


const appPages: AppPage[] = [
  {
    title: 'Action Sheet',
    url: '/plugin/action-sheet',
    icon: list
  },
  {
    title: 'App',
    url: '/plugin/app',
    icon: apps
  },
  {
    title: 'App Launcher',
    url: '/plugin/app-launcher',
    icon: rocket
  },
  {
    title: 'Browser',
    url: '/plugin/browser',
    icon: browsers
  },
  {
    title: 'Camera',
    url: '/plugin/camera',
    icon: camera
  },
  {
    title: 'Clipboard',
    url: '/plugin/clipboard',
    icon: clipboard
  },
  {
    title: 'Device',
    url: '/plugin/device',
    icon: informationCircle
  },
  {
    title: 'Dialog',
    url: '/plugin/dialog',
    icon: chatbox
  },
  {
    title: 'Filesystem',
    url: '/plugin/filesystem',
    icon: fileTray
  },
  {
    title: 'Geolocation',
    url: '/plugin/geolocation',
    icon: compass
  },
  {
    title: 'Haptics',
    url: '/plugin/haptics',
    icon: body
  },
  {
    title: 'Keyboard',
    url: '/plugin/keyboard',
    icon: key
  },
  {
    title: 'Local Notifications',
    url: '/plugin/local-notifications',
    icon: notifications
  },
  {
    title: 'Motion',
    url: '/plugin/motion',
    icon: move
  },
  {
    title: 'Network',
    url: '/plugin/network',
    icon: wifi
  },
  {
    title: 'Push Notifications',
    url: '/plugin/push-notifications',
    icon: notificationsOutline
  },
  {
    title: 'Share',
    url: '/plugin/sharing',
    icon: share
  },
  {
    title: 'Splash Screen',
    url: '/plugin/splash-screen',
    icon: phonePortrait
  },
  {
    title: 'Status Bar',
    url: '/plugin/status-bar',
    icon: funnel
  },
  {
    title: 'Storage',
    url: '/plugin/storage',
    icon: document
  },
  {
    title: 'Text Zoom',
    url: '/plugin/text-zoom',
    icon: square
  },
  {
    title: 'Toast',
    url: '/plugin/toast',
    icon: square
  }
];

const Menu: React.FC = () => {
  const location = useLocation();

  return (
    <IonMenu contentId="main" type="overlay">
      <IonContent>
        <IonList id="inbox-list">
          <IonListHeader>Plugins</IonListHeader>
          <IonNote>Capacitor v3 Plugins</IonNote>
          {appPages.map((appPage, index) => {
            return (
              <IonMenuToggle key={index} autoHide={false}>
                <IonItem className={location.pathname === appPage.url ? 'selected' : ''} routerLink={appPage.url} routerDirection="none" lines="none" detail={false}>
                  <IonIcon slot="start" icon={appPage.icon} />
                  <IonLabel>{appPage.title}</IonLabel>
                </IonItem>
              </IonMenuToggle>
            );
          })}
        </IonList>
      </IonContent>
    </IonMenu>
  );
};

export default Menu;
