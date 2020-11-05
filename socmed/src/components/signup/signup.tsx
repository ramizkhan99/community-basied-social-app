import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { INewUser, signUp } from "../../store/actions/userActions";
import { Layout, Form, Input, Button } from "antd";

interface ISignUpProps {
    signUp: (state: any) => any;
    authError: string;
}

const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
};

class SignUp extends Component<ISignUpProps> {
    state = {
        email: "",
        password: "",
        firstName: "",
        username: "",
    };
    handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({
            [e.target.id]: e.target.value,
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
                <h5 className="text-center">Sign Up</h5>
                <Form {...layout} onFinish={this.handleSubmit}>
                    <div className="input-field">
                        <Form.Item label="Email">
                            <Input
                                type="email"
                                id="email"
                                onChange={this.handleChange}
                            />
                        </Form.Item>
                    </div>
                    <div className="input-field">
                        <Form.Item label="Password">
                            <Input
                                type="password"
                                id="password"
                                onChange={this.handleChange}
                            />
                        </Form.Item>
                    </div>
                    <div className="input-field">
                        <Form.Item label="FirstName">
                            <Input
                                type="text"
                                id="firstName"
                                onChange={this.handleChange}
                            />
                        </Form.Item>
                    </div>
                    <div className="input-field">
                        <Form.Item label="Username">
                            <Input
                                type="text"
                                id="username"
                                onChange={this.handleChange}
                            />
                        </Form.Item>
                    </div>
                    <div className="input-field">
                        <Button
                            type="primary"
                            className="btn green darken-1 waves-effect"
                            htmlType="submit"
                        >
                            Sign Up
                        </Button>
                        <div className="red-text center">
                            {authError ? <p>{authError}</p> : null}
                        </div>
                    </div>
                </Form>
            </div>
        );
    }
}
const mapStateToProps = (state: any) => {
    return {
        authError: state.authError,
    };
};
const mapDispatchToProps = (dispatch: any) => {
    return {
        signUp: (newUser: INewUser) => dispatch(signUp(newUser)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
