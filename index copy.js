/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import SimpleComponent from './components/simplecomponent';

import FirstComponent from './components/firstComponent';
import ListComponent from './components/listcomponent';
import StatusBarComponent from './components/statusbarcomponent';
import ModalComponent from './components/modalcomponent';
import RNModalComponent from './components/rnmodalcomponent';
import StorageComponent from './components/storagecomponent';
import TouchableOpacityComponent from './components/touchableopacitycomponent';

import BlogsComponent from './uiapps/blogscomponent';

import {name as appName} from './app.json';
import UtilizerComponent from './uiapps/utilizercomponent';
import TextInputParentComponent from './uiapps/textInputparentcomponent';
import ApiCallComponent from './uiapps/apicallcomponent';
import AppStateExample from './uiapps/appstatecomponent';
import BackHandlerComponent from './uiapps/backhandlercomponent';
import AppStateFunctionalComponent from './uiapps/appstatefunctionalcomponent';
import MainReduxComponent from './reduxapps/mainReduxComponent';
/* The Component is Registered as Root and this will be contineously under Execution */
AppRegistry.registerComponent(appName, () => MainReduxComponent);
