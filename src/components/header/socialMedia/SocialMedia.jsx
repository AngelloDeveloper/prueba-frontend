import facebook from '../../../assets/img/Vector-2.png';
import instagram from '../../../assets/img/Vector-4.png';
import instagram_2 from '../../../assets/img/Vector-1.png';
import youtube from '../../../assets/img/Vector-3.png';
import elipseF from '../../../assets/img/Ellipse-14.png';
import elipseI from '../../../assets/img/Ellipse-15.png';
import elipseY from '../../../assets/img/Ellipse-16.png';

const SocialMedia = () => {
	return (
		<div className="containerSM">
			<div className="SM SM-facebook">
				<img src={facebook} />
			</div>
			<div className="SM SM-instagram">
				<img src={instagram} />
				<img src={instagram_2} className="complement" />
			</div>
			<div className="SM SM-youtube">
				<img src={youtube} />
			</div>
		</div>
	)
}

export default SocialMedia