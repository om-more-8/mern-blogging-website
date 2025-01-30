const storeInSession = (key, value) => {
    return sessionStorage.setItem(key, value);
}

const lookInSession = (key) => {
    return sessionStorage.getItem(key)
}

const removerFromSession = (key) => {
    return sessionStorage.removeItem(key)
}

const logOutUser = () => {
    sessionStorage.clear();
}

export { storeInSession, lookInSession, removerFromSession, logOutUser }