import {Provider} from 'react-redux';
import MainReduxComponent from "./mainReduxComponent";
import store from "./store";

const ReduxProviderComponent = () => {
    return (
        <Provider store={store}>
            <MainReduxComponent />
        </Provider>
    )
};

export default ReduxProviderComponent;