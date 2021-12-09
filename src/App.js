import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Navbar, NavbarBrand } from 'reactstrap';
import Menu from './components/menu';
import { PROJECTS } from './shared/projects';
import Greet from './components/greet';

class App extends React.Component {					
  
	constructor(props){
		super(props);
		
		this.state = {
			projects: PROJECTS
		};
	}
	
	render(){
		return (
			<div className='App'>
				<Navbar color="primary">
					<div className="container" id="brand">
						<NavbarBrand>Incredible India</NavbarBrand>
					</div>
				</Navbar>
				<Greet />
				{/* <h1>Famous Places of India</h1> */}
				{/* <Menu projects={this.state.projects} /> */}
			</div>
		);
	}
}

export default App;