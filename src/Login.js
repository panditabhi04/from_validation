import Recat, { useState } from 'react';
function Login() {
    const [user, setUser] = useState("");
    const [password, setPassword] = useState("");
    const [userErr, setUserErr] = useState("");
    const [passErr, setPassErr] = useState("");

    function loginHandl(e) {
        e.preventDefault();
        if (user.length < 3 || password.length < 3) {
            alert("Enter correct values");
        }
        else {
            alert("All Good:)");

        }
    }
    function userHandler(e) {
        console.log(e.target.value);
        let item = e.target.value
        if (item.length < 3) {
            setUserErr(true);
        }
        else {
            setPassErr(false);
        }
        setUser(item)
    }
    function passworldHandler(e) {
        console.log(e.target.value);
        let item = e.target.value
        if (item.length < 3) {
            setPassErr(true);
        }
        else {
            setPassErr(false);
        }
        setPassword(item);
    }

    return (
        <div>
            <h1>Login</h1>
            <from onSubmit={loginHandl}>
                <input type="text" placeholder='Enter User Id'
                    onChange={userHandler} />{userErr ? <span>invalide User Id</span> : ""}
                <br /><br />
                <input type="text"
                    placeholder='Enter User Password'
                    onChange={passworldHandler} />{passErr ? <span>invalide Password</span> : ""}
                <br /><br />
                <button typeof='submit' onClick={loginHandl}>Login</button>
            </from>
        </div>
    )
}
export default Login;
