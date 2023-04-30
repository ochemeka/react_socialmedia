import "./login.css"

export default function Login() {
  return (
    <div className="login">
        <div className="loginWrapper">
            <div className="loginLeft"> 
                <h3 className="loginLogo"> MelvinSocial</h3>
                    <span className="loginDesc">
                        Connect with friends and the world around you on MelvinSocial
                    </span>
                
            </div>
            {/*  */}
            <div className="loginRight"> 
                <div className="loginBox">
                    <input placeholder="email" className="loginInput" />
                    <input placeholder="password" className="loginInput" />
                    <button className="loginButton">Log In</button>
                    <span className="loginFotgot">Forgot Password?</span>
                    <button className="loginRegisterButton">Create A New Account</button>
                </div>
            </div>
        </div>
      
    </div>
  )
}
