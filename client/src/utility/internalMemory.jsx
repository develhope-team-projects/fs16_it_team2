export const internalMemory = {
    get: (name) => {
        return JSON.parse(localStorage.getItem(name));   
    },
    set: (name, value) => {
        localStorage.setItem(name, JSON.stringify(value));
    },
    remove: (name) => {
        localStorage.removeItem(name);
    }
}