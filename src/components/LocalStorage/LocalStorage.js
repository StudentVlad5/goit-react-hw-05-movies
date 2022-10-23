function LocalStorage  (searchName) {return (
    localStorage.setItem("searchName", JSON.stringify(searchName)));
}
export default LocalStorage