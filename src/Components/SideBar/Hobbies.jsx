import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faMusic, faBookOpen, faBiking, faPlaneDeparture,} from '@fortawesome/free-solid-svg-icons'
import {faUtensils} from '@fortawesome/free-solid-svg-icons'
const Hobbies = () =>{
	return(
		<>
			<ul className="list-inline text-center">
			  <li className="list-inline-item px-2 py-2">
				  <div className="hobbieContent rounded-circle text-center">
				  	<p className="py-2 pr-2"><FontAwesomeIcon className="fa-2x" icon={faMusic}  /></p>
				  	<p className="pt-2">Music</p>
				  </div>
			  </li>
			  <li className="list-inline-item px-2 py-2">
				  <div className="hobbieContent rounded-circle text-center">
				  	<p className="py-2 pr-2"><FontAwesomeIcon className="fa-2x" icon={faBookOpen} /></p>
				  	<p className="pt-2">Reading</p>
				  </div>
				  <i class="fas fa-utensils"></i>
			  </li>
			  <li className="list-inline-item px-2 py-2">
				  <div className="hobbieContent rounded-circle text-center">
				  	<p className="py-2"><FontAwesomeIcon className="fa-2x" icon={faUtensils} /></p>
				  	<p className="pt-2">Cooking</p>
				  </div>
			  </li>
			 
			  <li className="list-inline-item px-2 py-2">
				  <div className="hobbieContent rounded-circle text-center">
				  	<p className="py-2 pr-2"><FontAwesomeIcon className="fa-2x" icon={faPlaneDeparture} /></p>
				  	<p className="pt-2">Travel</p>
				  </div>
			  </li>
			</ul>
		</>
		)
}

export default Hobbies;