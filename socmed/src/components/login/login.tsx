import React, { Component } from "react";
import { connect } from "react-redux";
import { ICredentials, signIn } from "../../store/actions/userActions";
import { Redirect } from "react-router-dom";
import Button from "../layout/Button";
import { Row, Col } from "antd";

interface ISignInProps {
    signIn: (state: any) => any;
    authError: string;
}

class SignIn extends Component<ISignInProps, {}> {
    state = {
        username: "",
        password: ""
    };
    handleChange = (e: any) => {
        this.setState({
            [e.target.id]: e.target.value
        });
    };
    handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        this.props.signIn(this.state);
    };
    render() {
        const { authError } = this.props;

        return (
            <div className="container">
                <Row>
                    <Col span={12} />
                    <form className="white" onSubmit={this.handleSubmit}>
                        <h5 className="grey-text text-darken-3">Sign In</h5>
                        <div className="input-field">
                            <label htmlFor="username">Email</label>
                            <input
                                type="text"
                                id="username"
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
                            <Button type="primary">Login</Button>
                            <div className="red-text center">
                                {authError ? <p>{authError}</p> : null}
                            </div>
                        </div>
                    </form>
                    <Col span={12} />
                    <div>
                        <img src="LoginIllustration.svg" alt="SVG Image Here" />
                    </div>
                </Row>
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
        signIn: (creds: ICredentials) => {
            dispatch(signIn(creds));
        }
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
