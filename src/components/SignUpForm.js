import "./SignUpFormStyles.css";

function SignUpForm(){
    return(
        <div className="form-container">
            <h1>Please Sign Up for more Amazing Trips!</h1>
            <form>
                <input placeholder="Userame"/>
                <input placeholder="Email"/>
                <input placeholder="Password"/>
                <input placeholder="Repeat Password"/>
                <button type="submit">Create account</button>
            </form>
        </div>
    );
}

export default SignUpForm;