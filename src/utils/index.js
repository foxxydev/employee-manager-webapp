const TOKEN_KEY = 'secretKey';

export const login = () => {
    localStorage.setItem(TOKEN_KEY, 'TestLogin');
}

export const logout = (props) => {
    localStorage.removeItem(TOKEN_KEY);
    window.location.reload();
}

export const isLogin = () => {
    if (localStorage.getItem(TOKEN_KEY) === 'TestLogin') {
        return true;
    }

    return false;
}