import {useState} from 'react';
import './css/content.css';
import Title from '../title/Title';
import Articles from './articles/Articles';
import CardNav from './cardNav/CardNav';
import brush from '../../assets/img/BRUSH-5-1.png';

const Content = () => {
	return (
		<>
			<div className="container-fluid Content">
				<div className="row">
					<Title brush={brush} title="Nuestros articulos"/>
				</div>
				<div className="row">
					<div className="col-12 col-md-3">
						<div className="row" style={{padding: "20px"}}>
							<CardNav />
						</div>
					</div>
					<div className="col-12 col-md-9">
						<div className="row" style={{padding: "20px"}}>
							<Articles />
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default Content