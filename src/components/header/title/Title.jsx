import brush from '../../../assets/img/BRUSH-3-1.png';

const Title = () => {
	return (
		<div style={{position: "relative"}}>
			<h1 className="colorTitles textTitle">
				<span>El secreto </span>
				<br />
				<span className="positionTextTitle">de tu cocina</span>
			</h1>
			<img src={brush} className="brush" />
		</div>
	)
}

export default Title