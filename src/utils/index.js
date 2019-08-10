export const createActionTypes = (prefix, actionTypeList) => {
    const actionTypesObject = {};

    actionTypeList.forEach((item) => {
        actionTypesObject[item] = `${prefix}/${item}`;
    });

    return actionTypesObject;
};

export const debounce = (func, wait, immediate) => {

    var timeout;
    return function () {
        var [context, args, later] = [this, arguments];
        later = function () {
            timeout = null;
            if (!immediate) func.apply(context, args);
        }
        var callnow = immediate && timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callnow) func.apply(context, args);
    }
};

export const checkLoginStatus = () => {
    return JSON.parse(sessionStorage.getItem("isLoggedIn"));
};