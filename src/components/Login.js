import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { connect } from "react-redux";
import "./styles.css";
import { onLogin } from "../actions";

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    static getDerivedStateFromProps = (props, state) => {
        const { loginSuccess, history } = props;
        if (loginSuccess) { history.push("/planets")}
        return null;
    };

    onSubmit = (event) => {
        event.preventDefault();
        let [username, password] = Array.from(event.target).map(elem => elem.value);
        const { dispatch } = this.props;
        dispatch(onLogin({username, password}));
        console.log("username", username);
    };

    render() {
        return (
            <div className="row">
                <div className="col-md-3 login-panel">
                    <form onSubmit={this.onSubmit.bind(this)}>
                        <div className="form-group">
                            <input type="text" className="form-control" id="username" placeholder="Enter username" name="email" required />
                        </div>
                        <div className="form-group">
                            <input type="password" className="form-control" id="pwd" placeholder="Enter password" name="pwd" required />
                        </div>
                        <button type="submit" className="btn btn-default login-btn" >Login</button>
                    </form>
                </div>
            </div>
        );
    }
}
export default connect((state) => {
    // const userData = state.get
    return {
        userData: state.userData,
        loginSuccess: state.loginSuccess
    }
})(Login);