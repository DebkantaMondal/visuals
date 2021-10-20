import React from 'react'
import './Register.css';

export default function Login() {
    return (
        <div style={{ marginTop: "4.4rem" }}>
            <div class="form_wrapper">
                <div class="form_container">
                    <div class="title_container">
                        <h2>Login with Visuals</h2>
                    </div>
                    <div class="row clearfix">
                        <div class="">
                            <form>
                                <div class="input_field"> <span><i aria-hidden="true" class="fa fa-user"></i></span>
                                    <input type="text" name="username" placeholder="Username" required />
                                </div>
                                {/*<div class="input_field"> <span><i aria-hidden="true" class="fa fa-envelope"></i></span>
                                    <input type="email" name="email" placeholder="Email" required />
                                </div>*/}
                                <div class="input_field"> <span><i aria-hidden="true" class="fa fa-lock"></i></span>
                                    <input type="password" name="password" placeholder="Password" required />
                                </div>
                                
                                <input class="button" type="submit" value="LOGIN" />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}