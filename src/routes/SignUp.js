import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import AboutImg from "../assets/paris1.jpg";
import Footer from "..//components/Footer";
import SignUpForm from "../components/SignUpForm";

function SignUp() {
    return(
        <>
        <Navbar />
        <Hero 
        cName="hero-mid"
        heroImg={AboutImg}     
        title="Sign Up"
        btnClass="hide"
        />
        <SignUpForm />
        <Footer />
        </>
    )
}

export default SignUp;