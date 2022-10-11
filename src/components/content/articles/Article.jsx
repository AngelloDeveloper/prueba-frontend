const Article = ({title, category, image}) => {
	return (
		<div className="cardContent">
			<div className="cardHeader">
				<img src={image} />
			</div>
			<div className="cardBody">
				<h4 className="cardFontTitle">{title}</h4>
				<p className="cardFontText">{category}</p>
			</div>
		</div>
	)
}

export default Article