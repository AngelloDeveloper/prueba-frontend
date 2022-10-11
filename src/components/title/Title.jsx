
import './css/title.css';

const Title = ({brush, title}) => {
	return (
		<>
			<div className="col-12 content">
				<h3 className="ContentTitle">{title}</h3>
				<img src={brush} className="brushTitle" />
			</div>
		</>
	)
}

export default Title