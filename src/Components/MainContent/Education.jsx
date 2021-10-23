import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faGraduationCap} from '@fortawesome/free-solid-svg-icons';
const Education = () =>{
	return(
		<>
			<p className="pt-3 pr-2 ">
		  		<span className="titleLogo"><FontAwesomeIcon className="fa-2x pt-2" icon={faGraduationCap} /></span>
		  		<span className="titleEducation pl-3">EDUCATION</span>
		  	</p>
		  	<div className="pt-4 pl-3">
	  		
	  			<h2 className="headings pt-3">Kalpataru Institute Of Technology</h2>
	  			<div className="row">
	  				<div className="col-md-3">
	  					<h5 className="educationtitle pl-5">Bachelor of Engineering</h5>
	  					<p className="pl-3">08/2014 - 06/2018</p>
	  				</div>
	  				<div className="col-md-9">
	  				Completed Bachelor of Engineering in Electronics and Communications with (70%)
	  				</div>
	  			</div>
			</div>
		</>
		)
}

export default Education