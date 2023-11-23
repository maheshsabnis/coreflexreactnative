/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import SimpleComponent from './components/simplecomponent';

import FirstComponent from './components/firstComponent';

import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => FirstComponent);
