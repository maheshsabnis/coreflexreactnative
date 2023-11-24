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
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => TouchableOpacityComponent);
