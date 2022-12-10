import { Row, Col, Container, Image } from "react-bootstrap";
import "../styles/LoginPage.css"
import logo from "../assets/KRUGER-icon-blanco.png"
const LoginPage = () => {


    return (
        <>
            
	{/* <a href="https://front.codes/" className="logo" target="_blank">
		<img src={logo} alt=""></img>
	</a> */}

	<div className="section">
		<Container className="">
			<Row className=" full-height justify-content-center ">
				<Col className="col-12 text-center align-self-center py-3 sectionbg">
					<div className=" pb-2 pt-2 pt-sm-2 text-center ">
						<h6 className="mb-0 pb-3"><span>Log In </span><span>Sign Up</span></h6>
			          	<input className="checkbox" type="checkbox" id="reg-log" name="reg-log"/>
			          	<label htmlFor="reg-log"></label>
						<div className="card-3d-wrap mx-auto">
							<div className="card-3d-wrapper">
								<div className="card-front">
									<div className="center-wrap">
										<div className="section text-center">
											<h4 className="mb-4 pb-3">Log In</h4>
											<div className="form-group">
												<input type="email" name="logemail" className="form-style" placeholder="Your Email" id="logemail" autoComplete="off"></input>
												{/* <i className="input-icon uil uil-at"></i> */}
											</div>	
											<div className="form-group mt-2">
												<input type="password" name="logpass" className="form-style" placeholder="Your Password" id="logpass" autoComplete="off"></input>
												{/* <i className="input-icon uil uil-lock-alt"></i> */}
											</div>
											<a href="#" className="btn mt-4">submit</a>
                            				<p className="mb-0 mt-4 text-center"><a href="#0" className="link">Forgot your password?</a></p>
				      					</div>
			      					</div>
			      				</div>
								<div className="card-back">
									<div className="center-wrap">
										<div className="section text-center">
											<h4 className="mb-4 pb-3">Sign Up</h4>
											<div className="form-group">
												<input type="text" name="logname" className="form-style" placeholder="Your Full Name" id="logname" autoComplete="off"></input>
												{/* <i className="input-icon uil uil-user"></i> */}
											</div>	
											<div className="form-group mt-2">
												<input type="email" name="logemail" className="form-style" placeholder="Your Email" id="logemail" autoComplete="off"></input>
												{/* <i className="input-icon uil uil-at"></i> */}
											</div>	
											<div className="form-group mt-2">
												<input type="password" name="logpass" className="form-style" placeholder="Your Password" id="logpass" autoComplete="off"></input>
												{/* <i className="input-icon uil uil-lock-alt"></i> */}
											</div>
											<a href="#" className="btn mt-4">submit</a>
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
        </>
    )
}

export default LoginPage;