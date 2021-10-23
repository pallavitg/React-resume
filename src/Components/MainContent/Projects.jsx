import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faTasks} from '@fortawesome/free-solid-svg-icons';
const Projects = () =>{
	return (
		<div className="pb-5">
		  	<p className="py-2 pr-2">
		  		<span className="titleLogo"><FontAwesomeIcon className="fa-2x pt-2" icon={faTasks} /></span>
		  		<span className="titleProject pl-3">Projects</span>
		  	</p>
		  	<div className="row pt-4 pl-4">
		  		<div className="col-md-4 companySection">
		  			<h5 className="headings">Remember Today</h5>
		  		</div>
		  		<div className="col-md-8">
		  			<section>
			  			<h5 className="headings">Project Description</h5>
			  			<p>Remember Today tells the story of a deceased person's life. 
							  It acknowledges the person's passing, his or her life accomplishments, 
							  the people left behind and funeral or memorial services. 	
			  			</p>
			  			<a target="_blank" href="https://remembered.today/">
			  			<button className="btn btn-sm btn-success">
						  Remember Today
			  			</button></a>
		  			</section>
  				</div>
	  		</div>
	  		<hr/>
	  		<div className="row pt-4 pl-4">
		  		<div className="col-md-4 companySection">
		  			<h5 className="headings">Page my cell</h5>
		  		</div>
		  		<div className="col-md-8">
		  			<section>
			  			<h5 className="headings">Project Description</h5>
			  			<p>Page my cell is an fire alert station US based project that instantly alerts to the fire department  to ensure immediate action. 	
			  			</p>
			  			<a target="_blank" href="https://apps.pagemycell.com/PMC/jake/views/admin_login.php">
			  			<button className="btn btn-sm btn-success">
						  Page my cell
			  			</button></a>
		  			</section>
  				</div>
	  		</div>
	  		<hr/>
	  		<div className="row pt-4 pl-4">
		  		<div className="col-md-4 companySection">
		  			<h5 className="headings">DigitalStage io</h5>
		  		</div>
		  		<div className="col-md-8">
		  			<section>
			  			<h5 className="headings">Project Description</h5>
			  			<p>DigitalStage io is a video streaming site which allows many to many video conference with realtime chat based feature.The site is built with a concept of classroom which includes one on one interaction with the host and one to many video publishing.
			  			</p>
			  		
		  			</section>
  				</div>
	  		</div>
	  		<hr/>
	  		<div className="row pt-4 pl-4">
		  		<div className="col-md-4 companySection">
		  			<h5 className="headings">Berman-law-group</h5>
		  		</div>
		  		<div className="col-md-8">
		  			<section>
			  			<h5 className="headings">Project Description</h5>
			  			<p>Berman Law Group is a full service law firm servicing clients nationwide. 
							  Our accident injury attorneys work tirelessly to get you everything you deserve.
			  			</p>
			  			<a target="_blank" href="https://demo.conitorsoft.com/Berman-Site/pages/index.php">
			  			<button className="btn btn-sm btn-success">
						  Berman-law-group
			  			</button></a>
		  			</section>
  				</div>
	  		</div>

			  <div className="row pt-4 pl-4">
		  		<div className="col-md-4 companySection">
		  			<h5 className="headings">Enlyvo</h5>
		  		</div>
		  		<div className="col-md-8">
		  			<section>
			  			<h5 className="headings">Project Description</h5>
			  			<p>Enlyvo is a custom Live broadcast and Video conference solutions for  event or business.

			  			</p>
			  			<a target="_blank" href="https://enlyvo.com/live1/1way/publisher.php?streamname=test">
			  			<button className="btn btn-sm btn-success mr-2">
						  1-way publisher
			  			</button></a>
						  <a target="_blank" href="https://enlyvo.com/live1/2way/publisher.php?stream1=test&stream2=test1">
			  			<button className="btn btn-sm btn-success">
						  2-way publisher
			  			</button></a>
		  			</section>
  				</div>
	  		</div>
			  <div className="row pt-4 pl-4">
		  		<div className="col-md-4 companySection">
		  			<h5 className="headings">maneskin</h5>
		  		</div>
		  		<div className="col-md-8">
		  			<section>
			  			<h5 className="headings">Project Description</h5>
			  			<p>maneskin is a an official sony sponsored chat application built using pubnub as service for real time messaging. 
                       This application is used in various events as an iframe</p>
			  			
		  			</section>
  				</div>
	  		</div>
		</div>  	
		)
}

export default Projects;