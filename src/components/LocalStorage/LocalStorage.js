export function setLocalStorageInput  (name) {
    localStorage.setItem("inputName", JSON.stringify(name));
}

export function setLocalStorageSearch  (name) {
    localStorage.setItem("searchName", JSON.stringify(name));
}