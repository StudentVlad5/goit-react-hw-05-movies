import { Link } from "react-router-dom";

const AddInfo = () => {return(
    <ul><li className="styleAddInfo"><h3><Link style={{textDecoration:'none'}} to={'credits'}>Credits</Link></h3></li>
    <li className="styleAddInfo"><h3><Link style={{textDecoration:'none'}} to={'rewier'}>Reviews</Link></h3></li></ul>
)}

export default AddInfo