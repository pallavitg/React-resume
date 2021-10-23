const Language = () =>{
	return(
		<>
		<div className="row text-center">
			<div className="col-md-3 col-3 language">
				<p>English</p>
				<p>Kannada</p>
				<p>Hindi</p>
				<p>Telugu</p>
			</div>
			<div className="col-md-9 col-9 pr-5 langRange">
				<div className="progress my-2">
				  <div className="progress-bar proEng" role="progressbar"></div>		
			    </div>
			    <div className="progress my-4">
				  <div className="progress-bar proKan" role="progressbar"></div>		
			    </div>
			    <div className="progress my-4">
				  <div className="progress-bar proHindi" role="progressbar"></div>		
			    </div>
			    <div className="progress mt-4">
				  <div className="progress-bar proMara" role="progressbar"></div>		
			    </div>
			</div>	
		</div>
		</>
		)
}

export default Language