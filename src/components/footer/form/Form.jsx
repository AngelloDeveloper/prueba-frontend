import {useState} from 'react';
import { useFormik } from 'formik';
import api from '../../../api/apiConfig';
 
 const Form = () => {

 	const [errorMessage, setErrorMessage] = useState(false);

 	const validate = values => {
		const errors = {};
		if (!values.firstname) {
		    errors.firstname = '*Campo Obligatorio';
		} else if (!/^([a-zA-Z])*$/i.test(values.firstname)) {
		    errors.firstname = '*Solo letras';
		}

		if (!values.lastname) {
		   errors.lastname = '*Campo Obligatorio';
		} else if (!/[^0-9]/i.test(values.lastname)) {
		   errors.lastname = '*Solo letras';
		}

		if (!values.email) {
		   errors.email = '*Campo Obligatorio';
		} else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
		   errors.email = '*Direccion de email invalido';
		}

		if (!values.phone) {
		   errors.phone = '*Campo Obligatorio';
		} else if (!/^([0-9])*$/i.test(values.phone)) {
		   errors.phone = '*Solo Números';
		}

		return errors;
	};

   const formik = useFormik({
     initialValues: {
     	firstname: '',
     	lastname: '',
     	email:'',
     	phone: ''
     },
     validate,
     onSubmit: values => {
	     	const headersConfig = {
	     		headers: {
	     			"Accept": "application/json",
		        "Content-Type": "application/x-www-form-urlencoded",
		        "Access-Control-Allow-Origin": "*",
		        "X-Requested-With": "XMLHttpRequest"
	     		}
		    }
       api.post('newsletter', values,  headersConfig)
       	.then((response) => {
       		alert(JSON.stringify(response, null, 2));
       	})
       	.catch(error => {
			    if(error.response.request.status == 400) {
			    	setErrorMessage({
			    		code: 'Codigo de error: '+error.response.request.status,
			    		message: "Se produjo un error al enviar la solicitud"
			    	})
			    }
			});
     },
   });
   return (
   	<>
   		<div className="col-1 col-sm-3"></div>
   		<div className="col-10 col-sm-6">
   			{
   				errorMessage != false 
   					? <div class="alert alert-danger" role="alert"> {errorMessage.message} <strong> {errorMessage.code} </strong></div>
   					: ''
   			}
   			<form onSubmit={formik.handleSubmit}>
   				<div className="row">
   					<div className="col-12 col-md-6">
   					    <label htmlFor="firstName">NOMBRE</label>
				        <input
					        id="firstName"
					        name="firstname"
					        type="text"
					        onChange={formik.handleChange}
					        value={!formik.errors.firstname ? formik.values.firstname : ''}
					        className="form-control input mb-2"
					    />
				        {formik.errors.firstname ? <div className="error">{formik.errors.firstname}</div> : null}
   					</div>
   					<div className="col-12 col-md-6">
   						<label htmlFor="email">MAIL</label>
				        <input
				         	id="email"
				         	name="email"
				         	type="email"
				         	onChange={formik.handleChange}
				         	value={formik.values.email}
							className="form-control input mb-2"
				        />
				        {formik.errors.email ? <div className="error">{formik.errors.email}</div> : null}
   					</div>
   				</div>
   				<div className="row">
   					<div className="col-12 col-md-6">
   						<label htmlFor="lastname">APELLIDO</label>
					        <input
						        id="lastname"
						        name="lastname"
						        type="text"
						        onChange={formik.handleChange}
						        value={!formik.errors.lastname ? formik.values.lastname : ''}
								className="form-control input mb-2"
					        />
					       {formik.errors.lastname ? <div className="error">{formik.errors.lastname}</div> : null}
   					</div>
   					<div className="col-12 col-md-6">
   						<label htmlFor="phone">TELÉFONO</label>
				        <input
					        id="phone"
					        name="phone"
					        type="text"
					        onChange={formik.handleChange}
					        value={!formik.errors.phone ? formik.values.phone : ''}
					        className="form-control input mb-2"
				        />
				        {formik.errors.phone ? <div className="error">{formik.errors.phone}</div> : null}
   					</div>
   				</div>
   				<div className="row">
   					<div className="col-12">
   						<button className="btn btn-lg mt-4" type="submit">Enviar</button>
   					</div>
   				</div>
		    </form>
   		</div>
	    <div className="col-1 col-sm-3"></div>
     </>
   );
 };

export default Form