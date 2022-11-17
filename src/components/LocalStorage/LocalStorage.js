function LocalStorage  (name) {
    localStorage.setItem("inputName", JSON.stringify(name));
}
export default LocalStorage