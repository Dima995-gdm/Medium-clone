export const getItem = (key) => {
    try {
        return JSON.parse(localStorage.getItem(key))
    }
    catch (err) {
        console.log('Error', err);
        return null
    }
}

export const setItem = (key,data) => {
    try {
        localStorage.setItem(key, JSON.stringify(data))
    }
    catch (err) {
        console.log('Error', err);
    }
}