import { useEffect, useState } from 'react';
import {  useNavigate } from 'react-router-dom';
import axios from "axios"
// import { isValidObjectId } from 'mongoose';

const useForm = (initialValues) => {

	const [ inputs, setInputs ] = useState(initialValues);
	const [ checked, setChecked ] = useState(false);
	const [ formErrors, setFormErrors ] = useState({});

  const [loginError , setLoginError] = useState({})

	const [ isSubmit, setIsSubmit ] = useState(false);
  const [isLogin , setLogin] = useState(false);
  const [formSubmitted , setFormSubmiited] = useState("");

  const Navigate = useNavigate();
  const sucess = "data submitted successfully"
 
  

	const handleSubmit = (event) => {
    event.preventDefault();
		setFormErrors(validate(inputs) );
    setIsSubmit(true)

	};

  const handleLogin = (event)=>{
    event.preventDefault();
    setLoginError(validate(inputs));
    setLogin(true)
  }

	const handleInputChange = (event) => {
		// event.persist();
		setInputs((inputs) => ({ ...inputs, [event.target.name]: event.target.value }));
	};

	const handleCheckEvent = (event) => {
		setChecked(!checked);
	};

	useEffect(() => {
		console.log(inputs);
		console.log(formErrors);
	 
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      axios.post("http://localhost:5000/user/add" , inputs)
      .then(()=> {
        alert(sucess)
        Navigate("/signin")
      } )
      .catch((err)=>console.log("err", err))
      
		
     
		}

    if (Object.keys(formErrors).length === 0 && isLogin) {
      axios.post("http://localhost:5000/user/signin" , inputs)
      .then((res)=> {
        alert("login sucessfully")
        Navigate("/d3")
     
      } )
      .catch((err)=>console.log("err", err))

     
		}
	});

  const validate =(values)=>{
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    const phoneRegex = /^(\+\d{1,3}[- ]?)?\d{10}$/

    if (!values.email) {
      errors.email = "Email is required!";
    } else if (!regex.test(values.email)) {
      errors.email = "This is not a valid email format!";
    }

    if (!values.password) {
      errors.password = "Password is required";
    } else if (values.password.length < 4) {
      errors.password = "Password must be more than 4 characters";
    } else if (values.password.length > 16) {
      errors.password = "Password cannot exceed more than 10 characters";
    }

    if(!values.cpassword){
      errors.cpassword = "confirm password is required";

    }else if(values.password !== values.cpassword){
      errors.cpassword = "Password is not matched";
    }

    if (!values.username) {
      errors.username = "Username is required!";
    }

    if(!values.phone){
      errors.phone ="Phone no is Required";
    }else if(!phoneRegex.test(values.phone)){
      errors.phone = "invalid Phone Number"
    }

    if(!values.check===!checked){
      errors.checked = alert("read all trem and condition")
      
    }


    return errors;
  }

	return {
		handleSubmit,
		handleInputChange,
		handleCheckEvent,
		inputs,
		checked,
    formErrors,
    formSubmitted,
    handleLogin,
    loginError,
    setLoginError,
	};
};

export default useForm;
