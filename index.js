/**
 * @format
 */

import {AppRegistry} from 'react-native';
 
import {name as appName} from './app.json';

 
import ReduxProviderComponent from './reduxapps/providercomponent';
import MainReduxSagaProviderComponent from './sagasapp/views/mainreduxsagaprovidercomponent';
/* The Component is Registered as Root and this will be contineously under Execution */
AppRegistry.registerComponent(appName, () => MainReduxSagaProviderComponent);
