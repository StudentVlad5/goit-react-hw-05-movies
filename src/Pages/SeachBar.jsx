import {useState} from "react";
import PropTypes from 'prop-types';
import SearchMovie from '../components/SearchMovie/SearchMovie';
import { toast } from 'react-toastify';
import {FaSearchengin} from "react-icons/fa";
import LocalStorage from '../components/LocalStorage/LocalStorage';


function Searchbar ({onSubmitForm, setMove}) {
const [searchName, setSearchName] = useState('');
if(searchName === '' && JSON.parse(localStorage.getItem('searchName')) !==''){setSearchName(searchName=>JSON.parse(localStorage.getItem('searchName')))};



function handleChangeName (event) {
  event.preventDefault();
   setSearchName(event.currentTarget.value.toLowerCase());
   LocalStorage(event.currentTarget.value.toLowerCase());}

function handleSubmit (event) {
  event.preventDefault();
  if(searchName.trim() === ''){return toast.warn('Need more information for search', {
    position: "top-center",
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    })}
  onSubmitForm(searchName);
  setSearchName('')
}

return (
  <><div className="Searchbar">
    <form className="SearchForm" onSubmit={(event)=>handleSubmit}>
      <input
        className="SearchForm-input"
        type="text"
        autoComplete="true"
        autoFocus={true}
        placeholder="Search name of movie"
        value={searchName}
        onChange={handleChangeName} />
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