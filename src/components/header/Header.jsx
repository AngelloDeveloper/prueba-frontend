import {useState} from 'react';
import './css/header.css';
import Logo from './logo/Logo';
import SocialMedia from './socialMedia/SocialMedia';
import Title from './title/Title';

const Header = () => {
	return (
		<>
			<div className="backgroundImages container-fluid">
				<div className="row">
					<div className="col-sm-12 col-md-4">
						<Logo />
					</div>
					<div className="col-sm-12 col-md-4"></div>
					<div className="col-sm-12 col-md-4 socialMedia">
						<SocialMedia />
					</div>
				</div>
				<div className="row mg-row">
					<div className="col-sm-12 col-md-6">
						<Title />
					</div>
					<div className="col-sm-12 col-md-3"></div>
					<div className="col-sm-12 col-md-3"></div>
				</div>
				
			</div>
		</>
	)
}

export default Header