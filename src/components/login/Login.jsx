import React, { useState } from 'react'
import './login.css'
import { IoMdClose } from "react-icons/io";
const Login = ({ setShowLogin }) => {
    const [showForm, setShowForm] = useState("S'inscrire")
    return (
        <div className='login_section'>
            <form action="" className='form_sign_up'>
                <div className='form_title'>
                    <h1>{showForm}</h1>
                    <IoMdClose onClick={() => setShowLogin(false)} style={{ fontSize: "30px", cursor: 'pointer' }} />
                </div>

                <div className='form_input'>
                    {showForm === 'connexion' ? <></> : <div className="row">
                        <div className="col-sm-10 mt-5">
                            <input type="text" className="form-control" id="inputNom" placeholder='Nom Complet ' style={{ width: "400px", border: "1px solid blue" }} />
                        </div>
                    </div>
                    }

                    <div className="row" >
                        <div className="col-sm-10" style={{ marginTop: '-50px' }}>
                            <input type="email" className="form-control" id="inputEmail3" placeholder='Email Adress ' style={{ width: "400px", border: "1px solid blue" }} />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-10" style={{ marginTop: '-50px' }}>
                            <input type="password" className="form-control" id="inputPassword3" placeholder='Mot De Pass' style={{ width: "400px", border: "1px solid blue" }} />
                        </div>
                    </div>

                    <button type="submit" className="btn btn-primary" style={{ marginLeft: "50px", width: '300px', marginTop: '-120px' }}>{showForm === "S'inscrire" ? 'Créer nouveau' : "connexion"}</button>

                    <div class="form-check" style={{ marginTop: "-10px" }}>
                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                        <label class="form-check-label" for="flexCheckDefault" style={{ width: '80%' }}>
                            En continuant, j'accepte les conditions d'utilisation et la politique de confidentialité.
                        </label>
                    </div>
                    {showForm === "connexion" ?
                        <p style={{ marginTop: "20px" }}>Créer un nouveau compte ?<span onClick={() => setShowForm("S'inscrire")} style={{ color: 'blue' }}>Cliquez ici </span> </p> :
                        <p style={{ marginTop: "20px" }}>Vous avez déjà un compte ? <span onClick={() => setShowForm("connexion")} style={{ color: 'blue' }}>Connectez-vous ici</span></p>
                    }

                </div>


            </form>

        </div>
    )
}

export default Login
