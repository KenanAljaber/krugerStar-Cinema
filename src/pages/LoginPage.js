import { Row, Col, Container, Image } from "react-bootstrap";
import "../styles/LoginPage.css"
import { connect } from "react-redux"
import { useEffect, useRef, useState } from "react";
import { addUser, setCurrentUser, setUsers } from "../store/actions/actions";
import { Link } from "react-router-dom";
const LoginPage = (props) => {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [pass, setPass] = useState("");
	const [users,setUsers]=useState([]);
	const [warningMessage,setWarningMessage]=useState("This is a test message");
	const warningRef=useRef(null);
	const loginBoxRef=useRef(null);


	useEffect( () => {
		if (localStorage.getItem("users")) {
			const localUsers =  JSON.parse(localStorage.getItem("users"));
			props.setUsers(localUsers)	
			setUsers(localUsers);
		}else{
			props.setUsers([])	
			setUsers([]);
		}
	}, [])

	function handleLoginBoxClick(e){
		const buttonTxt=e.target.textContent;
		switch(buttonTxt){
			case "Sign Up":
				loginBoxRef.current.checked=true;
				break;
			case "Log In ":
				loginBoxRef.current.checked=false;
				break;
		}
	}

	//este method va a ingresar el usuario a la app siempre y cuando esta registrado
	//lo guarda en el local storage para guardar el usuario y no perderlo al recargar la pagina
	const login = () => {
		const currentUser = checkLogin(email, pass);
		if (currentUser) {
			props.loginUser(currentUser);
			localStorage.setItem("currentUser", JSON.stringify(currentUser));
		} else{
			showWarning("Please make sure of your email and password");
		} 

	}

	function showWarning(message){
		setWarningMessage(message);
			warningRef.current.style.display="block"
			setTimeout(()=>{
				warningRef.current.style.display="none"
			},2000)
	}

	//este method busca en los usuarios guardados si hay match para el email y la contraseña
	function checkLogin(email, pass) {
		let currUser = null;
		users.forEach(it => {
			if (it.email.toLowerCase() === email && it.pass === pass) {
				currUser = it;
			}
		});
		return currUser;
	}

	//este method despues de llamar la method validateUser, en el caso que los datos son validos ingresera al usuario y lo agrega al la lista de usuarios
	const signup = () => {
		const valid = validateUser();
		if (valid) {
			const user = {
				name: name,
				email: email,
				pass: pass,
				fav: []
			}
			if (!chekcUserExists(user.email)) {
				showWarning("Successfully registered")
				props.addUser(user);
				setUsers(props.userReducer.users);
				localStorage.setItem("users", JSON.stringify(props.userReducer.users));
				setName("");
				setEmail("");
				setPass("");


			}
			else {
				
				showWarning("email is already registered");
			}

		} else {
			showWarning("please fill the fields with correct info");
		}


	}
	/**
	 * 	este method validra si el correo ingresado existe o no
	 * @param {el correo ingresado del usuairo} email 
	 * @returns true si el correo exite y false si no
	 */
	function chekcUserExists(email) {
		return users.find(it => it.email.toLowerCase() === email.toLowerCase());
	}

	function validateUser() {
		return isEmptyOrSpaces(name) || !isEmail(email) || !validatePass(pass) ? false : true;
	}
	const validatePass = (pass) => {
		const isEmpty = isEmptyOrSpaces(pass);
		return isEmpty || pass.length < 6 ? false : true;
	}
	const isEmail = (email) => {
		const isEmpty = isEmptyOrSpaces(email);
		const correcEmail = email.match(
			/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
		);
		return isEmpty || !correcEmail ? false : true;
	};

	function isEmptyOrSpaces(str) {
		return str === null || str.match(/^ *$/) !== null;
	}


	function handleChange(e) {
		const id = e.target.id;
		const value = e.target.value;
		switch (id) {
			case "logemail":
				setEmail(value);
				break;
			case "logname":
				setName(value)
				break;
			case "logpass":
				setPass(value)
				break;
		}

	}
	return (
		<>

			{/* <a href="https://front.codes/" className="logo" target="_blank">
		<img src={logo} alt=""></img>
	</a> */}
			<div className="loginContainer">
				<div className="wariningContiner" id="warningLogin" ref={warningRef}>
					{warningMessage}
				</div>
				<div className="section">
					<Container className="">
						<Row className=" full-height justify-content-center ">
							<Col className="col-12 text-center align-self-center py-3 sectionbg">
								<div className=" pb-2 pt-2 pt-sm-2 text-center ">
									<h6 className="mb-0 pb-3"><span onClick={handleLoginBoxClick}>Log In </span><span onClick={handleLoginBoxClick}>Sign Up</span></h6>
									<input className="checkbox" ref={loginBoxRef} type="checkbox" id="reg-log" name="reg-log" />
									<label htmlFor="reg-log"></label>
									<div className="card-3d-wrap mx-auto">
										<div className="card-3d-wrapper">
											<div className="card-front">
												<div className="center-wrap">
													<div className="section text-center">
														<h4 className="mb-4 pb-3">Log In</h4>
														<div className="form-group">
															<input type="email" value={email} name="logemail" className="form-style" placeholder="Your Email" id="logemail" autoComplete="off" onChange={handleChange}></input>
															{/* <i className="input-icon uil uil-at"></i> */}
														</div>
														<div className="form-group mt-2">
															<input type="password" name="logpass" value={pass} className="form-style" placeholder="Your Password" id="logpass" autoComplete="off" onChange={handleChange}></input>
															{/* <i className="input-icon uil uil-lock-alt"></i> */}
														</div>
														<Link to={"/home"}><p className="btn mt-4" onClick={login}>Login</p></Link>
														<p className="mb-0 mt-4 text-center"><a href="#0" className="link">Forgot your password?</a></p>
													</div>
												</div>
											</div>
											<div className="card-back">
												<div className="center-wrap">
													<div className="section text-center">
														<h4 className="mb-4 pb-3">Sign Up</h4>
														<div className="form-group">
															<input type="text" name="logname" className="form-style" value={name} placeholder="Your Full Name" id="logname" autoComplete="off" onChange={handleChange}></input>
															{/* <i className="input-icon uil uil-user"></i> */}
														</div>
														<div className="form-group mt-2">
															<input type="email" name="logemail" className="form-style" value={email} placeholder="Your Email" id="logemail" autoComplete="off" onChange={handleChange}></input>
															{/* <i className="input-icon uil uil-at"></i> */}
														</div>
														<div className="form-group mt-2">
															<input type="password" name="logpass" className="form-style" value={pass} placeholder="Your Password" id="logpass" autoComplete="off" onChange={handleChange}></input>
															{/* <i className="input-icon uil uil-lock-alt"></i> */}
															<p className="passHint">Password must be 6 charachters long</p>
														</div>
														<a href="#" className="btn mt-4" onClick={signup}>Sign up</a>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</Col>
						</Row>
					</Container>
				</div>
			</div>
		</>
	)
}
const mapStatesToProps = (state) => {
	return {
		userReducer: state.userReducer
	}
}

const mapDispatcherToProps = {
	addUser: addUser,
	setUsers: setUsers,
	loginUser: setCurrentUser,

}

export default connect(mapStatesToProps, mapDispatcherToProps)(LoginPage);