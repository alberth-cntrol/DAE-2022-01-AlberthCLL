import {Link} from 'react-router-dom';
import { useState } from 'react';
import AuthService from '../services/auth.service';
import { useNavigate } from "react-router-dom";



function Login() {
    const [usuario,setUsuario] = useState('')
    const [password,setPassword] = useState('')
    const [mensaje,setMensaje] = useState('')
    const navigate = useNavigate();

    function handlerLogin(e){
        
        e.preventDefault();
        console.log('usuario : ' + usuario)
        console.log('password: ' + password)
        AuthService.login(usuario,password)
        .then(()=>{
            return navigate("/");
        },
        error => {
            setMensaje('usuario o password no validos')
        }
        )

    }

    return(
            <>
                <div id="layoutAuthentication">
                    <div id="layoutAuthentication_content">
                        <main>
                            <div className="container">
                                <div className="row justify-content-center">
                                    <div className="col-lg-5">
                                        <div className="card shadow-lg border-0 rounded-lg mt-5">
                                            <div className="card-header"><h3 className="text-center font-weight-light my-4">Login</h3></div>
                                            <div className="card-body">
                                                <form onSubmit={handlerLogin}>
                                                    <div className="form-floating mb-3">
                                                        <input className="form-control" 
                                                        id="inputText" 
                                                        type="text" 
                                                        placeholder="usuario"
                                                        value={usuario} onChange={(e)=>setUsuario(e.target.value)}
                                                        />
                                                        <label for="inputText">Usuario</label>
                                                    </div>
                                                    <div className="form-floating mb-3">
                                                        <input className="form-control"
                                                        id="inputPassword" 
                                                        type="password" 
                                                        placeholder="Password"
                                                        value={password} onChange={(e)=>setPassword(e.target.value)}
                                                        />
                                                        <label for="inputPassword">Password</label>
                                                    </div>
                                                    <div className="form-check mb-3">
                                                        <input className="form-check-input" id="inputRememberPassword" type="checkbox" value="" />
                                                        <label className="form-check-label" for="inputRememberPassword">Remember Password</label>
                                                    </div>
                                                    <div className="d-flex align-items-center justify-content-between mt-4 mb-0">
                                                        <Link to="/forgotpassword">Olvidaste tu contraseña?</Link>
                                                        <input type="submit" className="btn btn-primary" value="Login"/>
                                                    </div>
                                                </form>
                                                {mensaje && (
                                                    <div className='form-group'>
                                                        <div className='alert alert-danger'>
                                                            {mensaje}
                                                        </div>
                                                    </div>
                                                )}
                                            </div>
                                            <div className="card-footer text-center py-3">
                                                <div className="small"><Link to="/register">No tienes cuenta, registrate !</Link></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </main>
                    </div>
                    <div id="layoutAuthentication_footer">
                        <footer className="py-4 bg-light mt-auto">
                            <div className="container-fluid px-4">
                                <div className="d-flex align-items-center justify-content-between small">
                                    <div className="text-muted">Copyright &copy; Your Website 2022</div>
                                    <div>
                                        <a href="#">Privacy Policy</a>
                                        &middot;
                                        <a href="#">Terms &amp; Conditions</a>
                                    </div>
                                </div>
                            </div>
                        </footer>
                    </div>
                </div>
            </>
        )
}
export default Login;