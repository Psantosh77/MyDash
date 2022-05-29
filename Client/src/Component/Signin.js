import React from 'react';
import './Signin.scss';
import useForm from './form';
import { useNavigate } from 'react-router-dom';

const SigninComponent = () => {
	const Navigate = useNavigate()

	const {
		show,
		formSubmitted,
		inputs,
		checked,
		formErrors,
		handleInputChange,
		handleSubmit,
		handleCheckEvent,
		sucess
	} = useForm({
		email: '',
		password: '',
		cpassword: '',
		username: '',
		phone: ''
	});
	if (sucess) {
		alert(sucess);
	}

	console.log(inputs, checked);
	console.log(formSubmitted);

	return (
		<div>
			<div className="container">
				<div className="container__image">
					<img className="container__image--background" src="background.jpg" alt="backgroung" />
					<h1 className="container__image--Heading">Choose a date range</h1>
					<p className="container__image--para">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis veniam
					</p>
				</div>

				<div className="container__signup">
					<form onSubmit={handleSubmit}>
						<div className='container__signup__btncontainer'>
							<div className="container__signup--title">Create an account</div>
							<button className="container__signup--login-button " onClick={()=>Navigate("/login")}>Already Login</button>
						</div>

						<label className="container__signup--label">Your Email Address </label>
						<input
							className="container__signup--input"
							type="email"
							name="email"
							onChange={handleInputChange}
							value={inputs.email}
						/>
						<p className="container__signup--error">{formErrors.email}</p>

						<label className="container__signup--label">Your Password</label>
						<input
							className="container__signup--input"
							type="password"
							name="password"
							onChange={handleInputChange}
							value={inputs.password}
						/>
						<p className="container__signup--error"> {formErrors.password}</p>

						<label className="container__signup--label">Confirm Password</label>
						<input
							className="container__signup--input"
							type="password"
							name="cpassword"
							onChange={handleInputChange}
							value={inputs.cpassword}
						/>
						<p className="container__signup--error">{formErrors.cpassword} </p>

						<label className="container__signup--label">Your Full Name</label>
						<input
							className="container__signup--input"
							type="text"
							name="username"
							onChange={handleInputChange}
							value={inputs.username}
						/>
						<p className="container__signup--error"> {formErrors.username} </p>

						<label className="container__signup--label">Your Phone No.</label>
						<input
							className="container__signup--input"
							type="tel"
							name="phone"
							onChange={handleInputChange}
							value={inputs.phone}
						/>
						<p className="container__signup--error">{formErrors.phone}</p>

						<div className="checkboxContainer">
							<input
								className="checkboxContainer__checkbox"
								type="checkbox"
								name="check"
								onChange={handleCheckEvent}
								value={checked}
							/>
							<p className="checkboxContainer__para">I read all term and condition</p>
						</div>

						<h1>{formSubmitted}</h1>

						<button type="submit" className="checkboxContainer__button" onSubmit={handleSubmit}>
							Create Account{' '}
						</button>
					</form>
				</div>
			</div>
		</div>
	);
};

export default SigninComponent;
