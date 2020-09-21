import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { INewUser, signUp } from "../../store/actions/userActions";
import Button from "../layout/Button";

interface ISignUpProps {
    signUp: (state: any) => any;
    authError: string;
}

class SignUp extends Component<ISignUpProps> {
    state = {
        email: "",
        password: "",
        firstName: "",
        username: ""
    };
    handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({
            [e.target.id]: e.target.value
        });
    };
    handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        this.props.signUp(this.state);
    };
    render() {
        const { authError } = this.props;
        return (
            <div className="container">
                <form className="white" onSubmit={this.handleSubmit}>
                    <h5 className="grey-text text-darken-3">Sign Up</h5>
                    <div className="input-field">
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            onChange={this.handleChange}
                        />
                    </div>
                    <div className="input-field">
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            id="password"
                            onChange={this.handleChange}
                        />
                    </div>
                    <div className="input-field">
                        <label htmlFor="firstName">First Name</label>
                        <input
                            type="text"
                            id="firstName"
                            onChange={this.handleChange}
                        />
                    </div>
                    <div className="input-field">
                        <label htmlFor="lastName">username</label>
                        <input
                            type="text"
                            id="username"
                            onChange={this.handleChange}
                        />
                    </div>
                    <div className="input-field">
                        <button className="btn green darken-1 waves-effect ">
                            Sign Up
                        </button>
                        <div className="red-text center">
                            {authError ? <p>{authError}</p> : null}
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}
const mapStateToProps = (state: any) => {
    return {
        authError: state.authError
    };
};
const mapDispatchToProps = (dispatch: any) => {
    return {
        signUp: (newUser: INewUser) => dispatch(signUp(newUser))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
