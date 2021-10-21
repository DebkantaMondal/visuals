import axios from 'axios';
import { useState, useEffect } from 'react'
import './Register.css';

export default function Register() {

    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [rP, setRP] = useState("");


    const [usernameMsg, setUsernameMsg] = useState("");

    const [registerMsg, setRegisterMsg] = useState("");

    const [userFlag, setUserFlag] = useState(true);
    const [isSubmit, setIsSubmit] = useState(false);
    const [isPassword, setIsPassword] = useState(false);


    useEffect(() => {
        const handleUsernameValidate = async () => {
            if (username !== "") {
                await axios.post("https://my-blog-backend-deb.herokuapp.com/api/viewer/authenticate/usernameValidate", { username: username })
                    .then(res => {
                        setUsernameMsg(res.data);
                        if (usernameMsg === "Username already taken") {
                            setUserFlag(false);
                        } else {
                            setIsSubmit(false);
                            setUserFlag(true);
                        }
                    })
            } else {
                setUsernameMsg("");
            }

        }
        handleUsernameValidate();
        rP === "" ? setIsPassword(false) : rP === password ? setIsPassword(true) : setIsPassword(false);
        const handleRegister = async () => {

            if (userFlag) {
                if (isPassword) {
                    await axios.post("https://my-blog-backend-deb.herokuapp.com/api/viewer/authenticate/register", { username: username, email: email, password: password })
                        .then(res => {
                            if (res) {
                                setRegisterMsg("R");
                            } else {
                                setRegisterMsg("Error in Registration");
                            }
                        })
                        .catch(err => {
                            setRegisterMsg("Same Email Used Detected. Try with New . Sign Up Error")
                        })
                } else {
                    setRegisterMsg("Password Not Matched");
                }
            } else {
                setRegisterMsg("This Username is already taken For Signup. Try again")
            }

        }
        if (isSubmit) {
            handleRegister();
        }

    }, [username, userFlag, usernameMsg, isSubmit, isPassword, rP, password, email]);


    const register = (e, status) => {
        e.preventDefault();
        setIsSubmit(status);
    }

    return (
        <div style={{ marginTop: "4.4rem" }}>
            <div class="form_wrapper">
                <div class="form_container">
                    <div class="title_container">
                        <h2>Sign Up with Visuals</h2>
                    </div>
                    <div class="row clearfix">
                        <div class="">
                            <p>{registerMsg === "R" ? (<span style={{ color: "green" }}>You're Successfully Registered.</span>) : (<span style={{ color: "red" }}>{registerMsg}</span>)}</p>
                            <form onSubmit={(e) => register(e, true)}>
                                <div class="input_field"> <span><i aria-hidden="true" class="fa fa-user"></i></span>
                                    <input type="text" name="username" value={username} placeholder="Username" onChange={(e) => setUsername(e.target.value)} required />
                                    <br />
                                    <p>{usernameMsg === "Username already taken" ? (<span style={{ color: "red" }}>{usernameMsg}</span>) : (<span style={{ color: "green" }}>{usernameMsg}</span>)}</p>
                                </div>

                                <div class="input_field"> <span><i aria-hidden="true" class="fa fa-envelope"></i></span>
                                    <input type="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" required />
                                </div>
                                <div class="input_field"> <span><i aria-hidden="true" class="fa fa-lock"></i></span>
                                    <input type="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" required />
                                </div>
                                <div class="input_field"> <span><i aria-hidden="true" class="fa fa-lock"></i></span>
                                    <input type="password" name="password" value={rP} onChange={(e) => setRP(e.target.value)} placeholder="Re-type Password" required />
                                    <p>{rP === "" ? "" : rP === password ? (<span style={{ color: "green" }}>Matched</span>) : (<span style={{ color: "red" }}>Not Matched</span>)}</p>
                                </div>
                                <div class="input_field checkbox_option">
                                    <input type="checkbox" id="cb1" required />
                                    <label for="cb1">I agree with terms and conditions</label>
                                </div>
                                <div class="input_field checkbox_option">
                                    <input type="checkbox" id="cb2" required />
                                    <label for="cb2">I want to receive the newsletter</label>
                                </div>
                                <input class="button" type="submit" value="SIGN UP" />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}