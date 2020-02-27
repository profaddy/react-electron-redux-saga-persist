// import Actions from "pages/user-manager/user-manager-action-constants";
import { all, put, call, takeEvery } from "redux-saga/effects";
// import {fetchUserDetails, updateUserDetails, createUser, deleteUser,getUserDetails, resetPassword} from "pages/user-manager/user-manager-api";
// import {createNotification} from "utils/notificationHelper";
// import prettyDate from "utils/prettyDate";

export function* userLoginSaga(action){
    console.log(action);
}

export function* userLogoutSaga(action){
    console.log(action)
}

export default function* userManagerSagas() {
    yield all([
        takeEvery("USER_LOGIN", userLoginSaga),
        takeEvery("USER_LOGOUT", userLogoutSaga)
        // takeEvery(Actions.FETCH_USERS_REQUEST, fetchUsersSaga),
        // takeEvery(Actions.CREATE_USER_REQUEST, createUserSaga),
        // takeEvery(Actions.DELETE_USER_REQUEST, deleteUserSaga),
        // takeEvery(Actions.GET_USER_DETAILS_REQUEST, getUserDetailsSaga),
        // takeEvery(Actions.RESET_PASSWORD_REQUEST, resetPasswordSaga)
    ]);
}
