import Header from "../components/header"
import Login from "../components/login"
import Partbg from "../components/particles"

export default function LoginPage(){
    return (
      <div className="z-999 flex flex-col justify-center items-center h-screen">
        <Header 
        heading = "Login to your account"
        paragraph="Don't have an account yet?"
        linkName="Signup"
        linkUrl="/signup"
        />
        <Login />
        </div>
      );
};