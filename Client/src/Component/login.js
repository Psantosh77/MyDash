import React from 'react';
import "./responsive.css"
import useForm from './form';

const Login = () => {

    const {show, loginError, formSubmitted,inputs,checked,formErrors,handleInputChange,handleLogin,handleCheckEvent,} = useForm({
		email: '',
		password: '',
	
	});


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
            <form onSubmit={handleLogin}>
                <div className="container__signup--title">Create an account</div>
                <label className="container__signup--label">Your Email Address </label>
                <input className="container__signup--input" 
                type="email"  
                name='email'
                onChange={handleInputChange} 
                value={inputs.email}
                />
                <p className="container__signup--error">{loginError.email}</p>

                <label className="container__signup--label">Your Password</label>
                <input
                    className="container__signup--input"
                    type="password"
                    name="password"
                    onChange={handleInputChange}
                    value={inputs.password}
                />
                <p className="container__signup--error"> {loginError.password}</p>

              
             


                <div className="checkboxContainer">
                    <input className="checkboxContainer__checkbox" type="checkbox" name='check'onChange={handleCheckEvent} value={ checked} />
                    <p className="checkboxContainer__para">I read all term and condition</p>
                </div>

                    <h1>{formSubmitted}</h1>

                <button type="submit" className="checkboxContainer__button" onClick={handleLogin}>Login </button>
            </form>
        </div>
    </div>
</div>
  )
}

export default Login