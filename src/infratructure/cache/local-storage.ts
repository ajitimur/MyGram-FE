import isJsonString from "../../helper/checkJsonString";

export function setStorage (data: string, key: string) {
    localStorage.setItem(key, data);
}

export function getStorage(key: string) {
    const data = localStorage.getItem(key);
    if (data) {
        if (isJsonString(data)) {
            return JSON.parse(data);
        } else {
            return data;
        }
    }
    return null;
}