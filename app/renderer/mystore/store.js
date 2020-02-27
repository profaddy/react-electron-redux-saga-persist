import { createStore, applyMiddleware, compose } from "redux";
import { connectRouter, routerMiddleware } from "connected-react-router";
import history from "./history";
import rootReducer from "./rootReducer";
import sagaMiddleware from "./sagamiddleware";
// import appManagerSagas from "App/app-manager-sagas";
import UserManager from "../reducers/user";
import userManagerSagas from "../containers/user-manager-sagas";
import createElectronStorage from "redux-persist-electron-storage";
import { persistStore, persistReducer } from 'redux-persist'

const persistConfig = {
    key: 'root',
    storage: createElectronStorage()
  }
const persistedReducer = persistReducer(persistConfig, rootReducer)

const initialState = {};
const enhancers = [];
const middleware = [
    routerMiddleware(history),
    sagaMiddleware
];

if (process.env.NODE_ENV === "development") {
    const devToolsExtension = window.__REDUX_DEVTOOLS_EXTENSION__;

    if (typeof devToolsExtension === "function") {
        enhancers.push(devToolsExtension());
    }
}

const composedEnhancers = compose(
    applyMiddleware(...middleware),
    ...enhancers
);

const store = createStore(
    connectRouter(history)(persistedReducer),
    initialState,
    composedEnhancers
);
export const  persistor = persistStore(store)

sagaMiddleware.run(userManagerSagas);

export default store 
