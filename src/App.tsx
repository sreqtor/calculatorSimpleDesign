import React from 'react';
import {
  IonApp,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonGrid,
  IonRow,
  IonCol,
} from '@ionic/react';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';

import './grid.css';

const App: React.FC = () => (
  <IonApp>
    <IonHeader>
      <IonToolbar>
        <IonTitle>Basic Grid</IonTitle>
      </IonToolbar>
    </IonHeader>

    <IonContent className="ion-padding">
      <h1>Claculadora Básica</h1>
      <IonGrid>
        <IonRow>
          <IonCol>Resultado</IonCol>
        </IonRow>

        <IonRow>
          <IonCol>AC</IonCol>
          <IonCol>@</IonCol>
          <IonCol>%</IonCol>
          <IonCol>$</IonCol>
        </IonRow>

        <IonRow>
          <IonCol>7</IonCol>
          <IonCol>8</IonCol>
          <IonCol>9</IonCol>
          <IonCol>x</IonCol>
        </IonRow>

        <IonRow>
          <IonCol>4</IonCol>
          <IonCol>5</IonCol>
          <IonCol>6</IonCol>
          <IonCol>-</IonCol>
        </IonRow>
        
        <IonRow>
          <IonCol>1</IonCol>
          <IonCol>2</IonCol>
          <IonCol>3</IonCol>
          <IonCol>+</IonCol>
        </IonRow>

        <IonRow>
          <IonCol>@</IonCol>
          <IonCol>0</IonCol>
          <IonCol>,</IonCol>
          <IonCol>=</IonCol>
        </IonRow>
      </IonGrid>
    </IonContent>
  </IonApp>
);

export default App;
