import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'


const CardNav = () => {
	return (
		<div className="col-12">
			<div className="cardNav">
				<div className="row item">
					<div className="col-4">
						<p style={{textAlign: 'left'}}>TODO</p>
					</div>
					<div className="col-8">
						<span style={{float: 'right'}}><FontAwesomeIcon icon={faArrowRight} /></span>
					</div>
				</div>
				<div className="row item">
					<div className="col-12">
						<p style={{textAlign: 'left'}}>PRODUCTOS</p>
					</div>
				</div>
				<div className="row item">
					<div className="col-12">
						<p style={{textAlign: 'left'}}>RECETAS</p>
					</div>
				</div>
				<div className="row item">
					<div className="col-12">
						<p style={{textAlign: 'left'}}>CONSEJOS</p>
					</div>
				</div>
			</div>
		</div>
	)
}

export default CardNav