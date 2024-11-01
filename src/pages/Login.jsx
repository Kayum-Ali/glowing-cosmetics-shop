import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthProvider";
import { FcGoogle } from "react-icons/fc";
import {  useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const Login = () => {
  const [currentState, setCurrentState] = useState("Sign Up");
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { signUp, login,googleLogin } = useContext(AuthContext);
   const navigate = useNavigate()
   const location = useLocation()
   const from = location?.state ? location.state : '/'
  const handleSubmit = (e) => {
    e.preventDefault();
    if (currentState === "Sign Up") {
      signUp(email, password).then((result) => {
        setCurrentState("Login");
        setUserName("");
        setEmail("");
        setPassword("");
        console.log(result.user);
      });
    } else {
      // login code here
      login(email, password).then((result) => {
        setCurrentState("Login");
        setUserName("");
        setEmail("");
        setPassword("");
        console.log(result.user);
       
      });
    }
  };


  const handleGoogleLogin = ()=>{
    googleLogin()
    .then((result) => {
        console.log(result.user);
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Successfully Login",
          showConfirmButton: false,
          timer: 1500
        });
        navigate(from)

    })

  }
  return (
    <div className="flex justify-center py-12 items-center bg-[url('https://res.cloudinary.com/dqescabbl/image/upload/v1730393528/scroll-navigation-05_nzk1ty.jpg')] bg-center">
      <div className="border-2 p-12 bg-[#FFB6C1] w-[450px]">
        <div className="text-center">
          <h2 className="text-3xl font-bold">{currentState}</h2>
          <p>Please {currentState} using account detail bellow.</p>
        </div>
        <form onSubmit={handleSubmit} className="space-y-3 pt-8">
          {currentState === "Sign Up" ? (
            <input
              onChange={(e) => setUserName(e.target.value)}
              value={userName}
              type="text"
              placeholder="Name"
              className="px-3 py-2 w-full rounded-md outline-none"
            />
          ) : null}

          <input
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            placeholder="Email"
            className="px-3 py-2 w-full rounded-md outline-none"
          />
          <input
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            type="password"
            placeholder="Password"
            className="px-3 py-2 w-full rounded-md outline-none"
          />
          {/* forgate password */}

          <button
            type="submit"
            className="bg-[#e6e6facc]  px-12 py-2.5 w-full font-bold rounded-md"
          >
            {currentState === "Sign Up" ? "Create account" : "Login now"}
          </button>
          {/* registration link */}
          {currentState === "Sign Up" ? (
            <p className="login-toggle text-[#5c5c5c]">
              Already have an account{" "}
              <span
                onClick={() => setCurrentState("Login")}
                className="text-[#077EFF] cursor-pointer underline"
              >
                Login here
              </span>
            </p>
          ) : (
            <p className="login-toggle text-[#5c5c5c]">
              Create an account{" "}
              <span
                onClick={() => setCurrentState("Sign Up")}
                className="text-[#077EFF] cursor-pointer underline"
              >
                click here
              </span>
            </p>
          )}

          {/* goolgle login */}
          <div className="divider">OR</div>
          <div onClick={handleGoogleLogin} className="rounded-box h-20 bg-white justify-center items-center text-xl gap-5 flex">
           <p><FcGoogle/></p>
          <p>
          Goolgle
          </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
