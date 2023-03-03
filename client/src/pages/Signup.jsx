import Header from "../components/header";
import Signup from "../components/signup";
import Partbg from "../components/particles";

export default function SignupPage() {
  return (
    <>
      <Partbg />
      <Header
        heading="Signup to create an account"
        paragraph="Already have an account? "
        linkName="Login"
        linkUrl="/"
      />
      <Signup />
    </>
  );
}
