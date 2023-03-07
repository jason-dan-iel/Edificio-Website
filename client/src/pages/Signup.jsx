import Header from "../components/header";
import Signup from "../components/signup";
import Partbg from "../components/particles";

export default function SignupPage() {
  return (
    <div className="flex flex-col  items-center h-[2000px] z-[999]">
      <Header
        heading="Signup to create an account"
        paragraph="Already have an account? "
        linkName="Login"
        linkUrl="/login"
      />
      <Signup />
    </div>
  );
}
