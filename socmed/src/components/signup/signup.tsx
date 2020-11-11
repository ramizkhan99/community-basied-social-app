import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { INewUser, signUp } from "../../store/actions/userActions";
import { Form, Input, Button } from "antd";

interface ISignUpProps {
    signUp: (state: any) => any;
    authError: string;
}

const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
};
const tailLayout = {
    wrapperCol: { offset: 8, span: 16 },
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
        console.log("Form submitted");
        this.props.signUp(this.state);
    };
    render() {
        const { authError } = this.props;
        return (
            <div className="container">
                <h5 className="text-center">Sign Up</h5>
                <Form {...layout} onFinish={this.handleSubmit}>
                    <Form.Item label="Email">
                        <Input
                            type="email"
                            id="email"
                            onChange={this.handleChange}
                        />
                    </Form.Item>
                    <Form.Item label="Password">
                        <Input
                            type="password"
                            id="password"
                            onChange={this.handleChange}
                        />
                    </Form.Item>
                    <Form.Item label="FirstName">
                        <Input
                            type="text"
                            id="firstName"
                            onChange={this.handleChange}
                        />
                    </Form.Item>
                    <Form.Item label="Username">
                        <Input
                            type="text"
                            id="username"
                            onChange={this.handleChange}
                        />
                    </Form.Item>
                    <Form.Item {...tailLayout}>
                        <Button
                            type="primary"
                            className="btn green darken-1 waves-effect"
                            htmlType="submit"
                        >
                            Sign Up
                        </Button>
                    </Form.Item>
                    <div className="red-text center">
                        {authError ? <p>{authError}</p> : null}
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
