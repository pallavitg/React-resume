import Header from './Components/Header';
import SideBar from './Components/SideBar/SideBar';
import MainContent from './Components/MainContent/MainContent';
import './App.css'
const App = () =>{
	return(
		<>
			<Header />
			<div className="container-fluid">
				<div className="row no-gutters sideHero">
					<div className="col-md-3 sidebar">
						<SideBar />
					</div>
					<div className="col-md-9 pl-3">
						<MainContent />
					</div>
				</div>
			</div>
		</>
		)
}


export default App