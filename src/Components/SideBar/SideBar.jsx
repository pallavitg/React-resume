import './SideBar.css'

import Hobbies from './Hobbies';
import Language from './Language';
import PersonalInfo from './PersonalInfo';
import Skills from './Skills';

const SideBar = () =>{
	return(
		<>
			<h1 className="contentHeading">ABOUT ME</h1>
			<p className="aboutContent text-center pt-3">
				Innovative task-driven professional with 3 years of experience in Web  
				Development across diverse industries. Equipped with a record of success in consistently 
				identifying and providing the technological needs of companies through ingenious innovation. 
			
			</p>
			<h1 className="contentHeading">SKILLS</h1>
            <Skills />
			<h1 className="contentHeading">CONTACT INFO</h1>
			<PersonalInfo />
			<h1 className="contentHeading">LANGUAGES</h1>
			<Language />
			<h1 className="contentHeading">HOBBIES</h1>
			<Hobbies />
			
		
		</>
		)
}


export default SideBar;