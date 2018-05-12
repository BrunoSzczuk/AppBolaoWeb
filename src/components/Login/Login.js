import React, { Component } from "react";
class Login extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div class="container" >
                <div class="col-md-4 col-md-offset-4">
                    <div class="panel panel-default">
                        <div class="panel-heading"><h3 class="panel-title"><strong>Login </strong></h3></div>
                        <div class="panel-body">
                            <form role="form">
                                <div class="form-group">
                                    <label for="exampleInputEmail1">E-mail</label>
                                    <input type="email" class="form-control" id="exampleInputEmail1" placeholder="Insira o E-mail" />
                                </div>
                                <div class="form-group">
                                    <label for="exampleInputPassword1">Senha <a href="/sessions/forgot_password">(esqueci a senha)</a></label>
                                    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Senha" />
                                </div>
                                <button type="submit" class="btn btn-sm btn-default">Login</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Login;