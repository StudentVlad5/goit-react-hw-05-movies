import {useState} from "react";
import PropTypes from 'prop-types';
import SearchMovie from '../components/SearchMovie/SearchMovie';
import {FaSearchengin, FaTimesCircle} from "react-icons/fa";
import {setLocalStorageInput, setLocalStorageSearch} from'../components/LocalStorage/LocalStorage';


function Searchbar ({onSubmitForm, setMove}) {
const [searchName, setSearchName] = useState('');
const [inputName, setInputName] = useState('');

if(searchName.trim().length <= 0 && JSON.parse(localStorage.getItem('searchName')) !=='' && JSON.parse(localStorage.getItem('searchName')) !== null ){
  setSearchName(JSON.parse(localStorage.getItem('searchName')));
  };


function handleChangeName (event) {
  event.preventDefault();
   setInputName(event.currentTarget.value.toLowerCase());
   setLocalStorageInput(event.currentTarget.value.toLowerCase());}

function handleSubmit (event) {
  event.preventDefault();
  console.log(inputName.length)
  if(inputName.trim().length <= 0){return alert('Need more information for search')}
  setSearchName(inputName);
  setLocalStorageSearch(inputName)
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