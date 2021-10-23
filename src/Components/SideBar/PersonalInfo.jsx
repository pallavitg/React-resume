import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faPhoneAlt, faEnvelope, faMapMarkerAlt} from '@fortawesome/free-solid-svg-icons';
import {faStackOverflow, faGithub } from "@fortawesome/free-brands-svg-icons"


const PersonalInfo = () =>{
	return(
		<div className="row pt-2">
			<div className="col-md-3 col-3 text-center">
				<p className="py-2"><FontAwesomeIcon className="fa-2x ContactLogo" icon={faPhoneAlt} /></p>
			
			</div>
			<div className="col-md-9 col-9 PersonalInfoConte">
				<p className="pt-2">+91-8088500673</p>
			</div>
			<div className="col-md-3 col-3 text-center">
				<p  className="py-2"><FontAwesomeIcon className="fa-2x ContactLogo" icon={faEnvelope} /></p>
			</div>
			<div className="col-md-9 col-9 PersonalInfoConte">
				<p className="pt-3 emailContent">pallavigavi@gmail.com</p>
			</div>
			<div className="col-md-3 col-3 text-center">
				<p  className="py-2"><FontAwesomeIcon className="fa-2x ContactLogo" icon={faMapMarkerAlt} /></p>
			</div>
			<div className="col-md-9 col-9 PersonalInfoConte">
				<p className="pt-2 emailContent">Chikmagalur Karnataka</p>
			</div>
			<div className="col-md-3 col-3 text-center">
				<p  className="pt-3"><FontAwesomeIcon className="fa-2x ContactLogo" icon={faGithub} /></p>
			</div>
			<div className="col-md-9 col-9 PersonalInfoConte">
				<p className="pt-2 emailContent">
					<a href="https://github.com/pallavitg" target="_blank">
					https://github.com/pallavitg			
					</a>
				</p>
			</div>
		</div>
		)
}

export default PersonalInfo