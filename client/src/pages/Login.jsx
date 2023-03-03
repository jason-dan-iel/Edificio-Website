import Header from "../components/header"
import Login from "../components/login"
import Partbg from "../components/particles"

export default function LoginPage(){
    return (
      <>
        <Partbg />
        <Header 
        heading = "Login to your account"
        paragraph="Don't have an account yet"
        linkName="Signup"
        linkUrl="/signup"
        />
        <Login />
        </>
      );
};