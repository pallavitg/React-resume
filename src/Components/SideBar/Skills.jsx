import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faPencilAlt} from '@fortawesome/free-solid-svg-icons';

const Skills = () =>{
	return(
		<div className="row">
			<div className="col-md-12 py-3">
			  
			  	<div className="row text-center">
					<div className="col-md-4 col-3 language">
						<p>Bootstrap</p>
						<p>React-js</p>
						<p>HTML</p>
						<p>CSS</p>
						<p>Javascript</p>
						<p>Jquery</p>
						
					</div>
					<div className="col-md-8 col-9 pr-5 langRange">
						<div className="progress my-2">
						  <div className="progress-bar proPHP" role="progressbar"></div>		
					    </div>
					    <div className="progress my-4">
						  <div className="progress-bar proNode" role="progressbar"></div>		
					    </div>
					    <div className="progress mt-4">
						  <div className="progress-bar proReact" role="progressbar"></div>		
					    </div>
					    <br/>
					    <div className="progress ">
						  <div className="progress-bar proHTML" role="progressbar"></div>		
					    </div>
					    <br/>
					    <div className="progress">
						  <div className="progress-bar proCSS" role="progressbar"></div>		
					    </div>
					    <br/>
					    <div className="progress mt-1">
						  <div className="progress-bar proJS" role="progressbar"></div>		
					    </div>
					   
					  
					</div>	
				</div>
			</div>
		
		</div>
		
		)
}

export default Skills;