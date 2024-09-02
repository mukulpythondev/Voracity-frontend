import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
// import { Link } from "react-router-dom";
// import api from "../utils/Api"; // Assuming you have a configured Axios instance in utils/api.js
// import Cookies from "js-cookie";
import logo from "../assets/logo.svg";
import Google from "../assets/google.svg";
import Microsoft from "../assets/microsoft.svg";
import { Navigate, useNavigate } from "react-router-dom";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null); // State for handling errors
  const [isEmailSubmitted, setIsEmailSubmitted] = useState(false); // State to track if email is submitted
  const navigate= useNavigate();
  const handleEmailSubmit = (e) => {
    e.preventDefault();
    setIsEmailSubmitted(true); // Set email as submitted
  };

  const handleSignUp = async (e) => {
    e.preventDefault();
    setError(null);

    try {
      // const response = await api.post('/signup', { email, password });
      // console.log('User created successfully:', response.data);
      // Cookies.set('token', response.data.access_token, { expires: 7 }); // Store JWT token in cookies, valid for 7 days
      // Redirect or navigate to another page after successful signup
      navigate('/account-setup')
    } catch (err) {
      if (err.response) {
        // Handle different status codes and set an appropriate error message
        switch (err.response.status) {
          case 400:
            setError("Invalid input or email already registered.");
            break;
          case 500:
            setError(
              "An error occurred on the server. Please try again later."
            );
            break;
          default:
            setError("An unexpected error occurred.");
            break;
        }
      } else {
        setError("Network error. Please check your connection.");
      }
    }
  };

  return (
    <div className="flex gap-20 w-full p-7 h-screen">
      <div className="left p-4 w-3/12">
        <img src={logo} alt="" />
        <div className="form-content mt-32 p-4 flex flex-col items-start gap-y-3">
          <h1 className="text-4xl font-bold">Sign In</h1>
          <h3 className="text-xl font-medium">
            {isEmailSubmitted
              ? "Enter the Password"
              : "Enter your mail to sign in"}
          </h3>
          <form
            className="w-full"
            onSubmit={isEmailSubmitted ? handleSignUp : handleEmailSubmit}
          >
            {!isEmailSubmitted ? (
              <Input
                type="email"
                placeholder="email@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full mt-2"
              />
            ) : (
              <Input
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full mt-2"
              />
            )}
            {error && <p className="text-red-500 my-2 text-center">{error}</p>}{" "}
            {/* Display error message */}
            {isEmailSubmitted ? (
              <Button
                type="submit"
                className="w-full mt-6 bg-[#573CFF] hover:bg-[#573CFF] hover:scale-95 transition-all duration-300 text-xl text-white"
              >
                Continue
              </Button>
            ) : (
              <Button className="w-full mt-6 bg-[#573CFF] hover:bg-[#573CFF] hover:scale-95 transition-all duration-300 text-xl text-white">
                Sign In
              </Button>
            )}
            {isEmailSubmitted && (
              <Button
                onClick={() => {
                  setIsEmailSubmitted(false);
                  setError(null);
                }}
                variant="outline"
                className="w-full mt-6  border-black  transition-all duration-300 text-xl"
              >
                Back
              </Button>
            )}
          </form>
          {!isEmailSubmitted && (
            <>
              <div className="flex w-full items-center my-6">
                <span className="h-[1px] w-5/12 bg-gray-500"></span>
                <span className="mx-4 text-lg">or</span>
                <span className="h-[1px] w-5/12 bg-gray-500"></span>
              </div>
              <div className="other-methods flex w-full flex-col gap-7 items-center">
                <Button
                  variant="outline"
                  className="flex w-full shadow-lg bg-slate-50 items-center text-lg justify-start gap-2"
                >
                  <img className="h-10 w-10" src={Google} alt="" /> Sign in with
                  Google
                </Button>
                <Button
                  variant="outline"
                  className="flex w-full text-lg justify-start shadow-lg bg-slate-50 items-center gap-4"
                >
                  <img src={Microsoft} className="h-6 w-6" alt="" /> Sign in
                  with Microsoft
                </Button>
              </div>
            </>
          )}
        </div>
      </div>
      <div className="right rounded-lg bg-gradient-to-b from-[#6d88fe] via-[#656dfe] to-[#583eff] w-9/12 h-full"></div>
    </div>
  );
};

export default SignUp;
