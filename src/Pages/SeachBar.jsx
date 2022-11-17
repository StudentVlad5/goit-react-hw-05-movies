import {useState} from "react";
import PropTypes from 'prop-types';
import SearchMovie from '../components/SearchMovie/SearchMovie';
import { toast } from 'react-toastify';
import {FaSearchengin, FaTimesCircle} from "react-icons/fa";
import LocalStorage from '../components/LocalStorage/LocalStorage';


function Searchbar ({onSubmitForm, setMove}) {
const [searchName, setSearchName] = useState('');
const [inputName, setInputName] = useState('');
if(inputName === '' && JSON.parse(localStorage.getItem('inputName')) !=='' && JSON.parse(localStorage.getItem('inputName')) !== null ){
setInputName(JSON.parse(localStorage.getItem('inputName')));
setSearchName(JSON.parse(localStorage.getItem('searchName')));
};

function handleChangeName (event) {
  event.preventDefault();
   setInputName(event.currentTarget.value.toLowerCase());
   LocalStorage(event.currentTarget.value.toLowerCase());}

function handleSubmit (event) {
  event.preventDefault();
  if(inputName.trim() === ''){return toast.warn('Need more information for search', {
    position: "top-center",
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    })}
  setSearchName(inputName);
  localStorage.setItem("searchName", JSON.stringify(inputName))
}

function clearInput(event){
  event.preventDefault();
  setSearchName('');
  localStorage.clear();
  setInputName('');
} 

return (
 
  <><div className="Searchbar">
    <form className="SearchForm" onSubmit={handleSubmit}>
      <input
        className="SearchForm-input"
        type="text"
        autoComplete="true"
        autoFocus={true}
        placeholder="Search name of movie"
        value={inputName}
        onChange={handleChangeName} />
      <button type="button" className="SearchForm__BtnClear" onClick={(e)=>clearInput(e)}><FaTimesCircle style={{ width: 40, height: 40, fill: 'rgba(84,78,114,1)' }} /></button>
      <button type="submit" className="SearchForm-button"><FaSearchengin style={{ width: 40, height: 40, fill: '#3C93D5' }} />
      <span className="SearchForm-button-label">Search</span>
      </button>
    </form>
  </div><SearchMovie searchMovie={searchName} setMove={setMove}/></>
)
}

export default Searchbar

Searchbar.propTypes = {
searchName :  PropTypes.string
}