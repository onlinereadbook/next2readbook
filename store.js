import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension';

//程式碼中會用到的gobalState
const MyInitialState = {
    isLogin: false,
    isOpenMenu: false,
    isOpenLoginDialog: false,
    idToken: "",
    userInfo: { picture: "" }
}
//給他程式呼叫用的action
export const actionTypes = {
    TOGGLEMENU: 'TOGGLEMENU',
    TOGGLELOGINDIALOG: 'TOGGLELOGINDIALOG',
    SETISLOGIN: 'SETISLOGIN',
    SETPICTURE: 'SETPICTURE'
}
//Reducers
export const reducer = (state = MyInitialState, action) => {
    //  console.log('test reducer');
    //  console.log(action.type);
    switch (action.type) {
        case "TOGGLEMENU":
            ///   console.log('reducer go');
            const isOpenMenu = (state.isOpenMenu == false) ? true : false;
            return Object.assign({}, state, { isOpenMenu: isOpenMenu })
        case "TOGGLELOGINDIALOG":
            ///   console.log('reducer go');
            const isOpenLoginDialog = (state.isOpenLoginDialog == false) ? true : false;
            return Object.assign({}, state, { isOpenLoginDialog: isOpenLoginDialog })
        case "SETISLOGIN":
            return Object.assign({}, state, { isLogin: action.payload.isLogin })

        default:
            //console.log('defulat');
            return state
    }
}

//初始化 Store
export const initStore = (initialState = MyInitialState) => {
    //   console.log(MyInitialState);
    return createStore(reducer, initialState, composeWithDevTools(applyMiddleware(thunkMiddleware)));

}


//寫觸發的function
export const toggleMenu = () => dispatch => {
    console.log('dispatch  toggleMenu go');
    return dispatch({ type: actionTypes.TOGGLEMENU })
}

export const toggleLoginMenu = () => dispatch => {
    console.log('dispatch  toggleLoginMenu go');
    return dispatch({ type: actionTypes.TOGGLELOGINDIALOG })
}
export const setIsLogin = (isLogin) => dispatch => {
    return dispatch({ type: actionTypes.SETISLOGIN, payload: { isLogin } })
}
export const setPicture = (isLogin) => dispatch => {
    return dispatch({ type: actionTypes.SETPICTURE, payload: { picture } })
}
