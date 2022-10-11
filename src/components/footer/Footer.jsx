import brush from '../../assets/img/BRUSH-5-1.png';
import Title from '../title/Title';
import Form from './form/Form';
import './css/footer.css';


const Footer = () => {
	return (
		<>
			<div className="container-fluid mb-4">
				<div className="row">
					<Title brush={brush} title="Contáctanos"/>
				</div>
				<div className="row rowForm">
					<Form />
				</div>
			</div>
		</>
	)
}

export default Footer