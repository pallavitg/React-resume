import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faBriefcase} from '@fortawesome/free-solid-svg-icons';
const Experience = () =>{
	return(
		 <div>
		  	<p className="py-2 pr-2">
		  		<span className="titleLogo"><FontAwesomeIcon className="fa-2x pt-2" icon={faBriefcase} /></span>
		  		<span className="titleText pl-3">WORK EXPERIENCE</span>
		  	</p>
			  <div className="row pt-4 pl-4">
		  		<div className="col-md-4 companySection">
		  			<h5 className="headings">XL Minds Technologies</h5>
		  			<h5 className="pl-4">2018 - 2019</h5>
		  		</div>
		  		<div className="col-md-8">
		  			<h5 className="headings">Job Description</h5>
		  			<p>* Used Various technologies, including Bootstrap,Html,css and Javascript to make code repair and Optimize the website and Built N number of Projects by understanding and fullfilling the Client requirement</p>
		  			
		  		</div>
	  		</div>

			  <div className="row pt-4 pl-4">
		  		<div className="col-md-4 companySection">
		  			<h5 className="headings">Conitor Software Pvt Ltd</h5>
		  			<h5 className="pl-4">oct/2019 - oct/2021</h5>
		  		</div>
		  		<div className="col-md-8">
		  			<h5 className="headings">Job Description</h5>
		  			<p>* Used Various technologies, including React.js and Jquery to make code repair and Optimize the website</p>
		  			<p>* Built N number of Projects by understanding and fullfilling the Client requirement</p>
		  			<p>* Building User Friendly Websites, and publishing in the  github, and Netlify. </p>	
		  			<p>* Writing clean and readable code with test cases</p>
		  		</div>
	  		</div>
		  
		  </div>
		)
}


export default Experience;