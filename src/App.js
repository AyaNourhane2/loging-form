import React from "react";
import "./App.css";

function App() {
  return (
    <div className="app-container">
      {/* SECTION GAUCHE : Image de fond + texte */}
      <div className="left-section">
        <div className="text-overlay">
          <h1>Réalisez vos idées</h1>
          <p>Commencez gratuitement et profitez d'offres attractives de la communauté</p>
        </div>
      </div>

      {/* SECTION DROITE : Formulaire */}
      <div className="right-section">
        <div className="form-container">
          <h2>Login</h2>
          <p>Welcome Back! Please enter your details.</p>

          <form>
            <label htmlFor="email">Email</label>
            <input 
              type="email" 
              id="email" 
              placeholder="Enter your email" 
            />

            <label htmlFor="password">Password</label>
            <input 
              type="password" 
              id="password" 
              placeholder="Enter your password" 
            />

            <button type="submit" className="login-button">
              Log In
            </button>

            <p className="register-text">
              Don't have an account? <a href="#register">Register</a>
            </p>

            {/* BOUTON GOOGLE AVEC SVG */}
            <button type="button" className="google-button">
              {/* Icône Google en SVG */}
              <svg 
                width="18" 
                height="18" 
                viewBox="0 0 533.5 544.3" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <path 
                  fill="#4285f4" 
                  d="M533.5 278.4c0-15.7-1.3-31-3.8-46h-254v87h146.7c-6.3 34-25 62.7-53.3 82v68h86.2c50.3-46.4 78.2-114.9 78.2-191z"
                />
                <path 
                  fill="#34a853" 
                  d="M266.7 544.3c72 0 132.3-23.8 176.4-64.6l-86.2-68c-23.3 15.7-53.3 25-90.2 25-68.9 0-127.3-46.5-148.1-109.2h-88v68.6c44 87.7 133.9 148.2 236.1 148.2z"
                />
                <path 
                  fill="#fbbc04" 
                  d="M118.6 327.5c-10.2-30.6-10.2-63.6 0-94.2v-68.6h-88c-37.3 72.8-37.3 158.6 0 231.4l88-68.6z"
                />
                <path 
                  fill="#ea4335" 
                  d="M266.7 106.6c35.7 0 67.7 12.3 93 36.4l69.8-69.8c-44-41-104.3-66.1-162.8-66.1-102.2 0-192.1 60.5-236.1 148.2l88 68.6c20.8-62.7 79.2-109.2 148.1-109.2z"
                />
              </svg>

              <span>Sign in with Google</span>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
