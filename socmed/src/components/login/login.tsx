import React, { Component } from "react";
import { connect } from "react-redux";
import { ICredentials, signIn } from "../../store/actions/userActions";
import { Redirect } from "react-router-dom";
//import Button from "../layout/Button";
import { Row, Col } from "antd";
import {  Form, Input, Button, Checkbox  } from "antd";
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import loginIllustration from "./LoginIllustration.svg";
import "./login.scss";

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
        //e.preventDefault();

        this.props.signIn(this.state);
    };
    render() {
        const { authError } = this.props;
        if(!authError) return<Redirect to='/'/>

        return (
            <div className="container">
                <Row align="middle">
                    <Col lg={12} sm={24}>
                    <Form name="normal_login" className="login-form"  onFinish={this.handleSubmit}
    >
                            <Row gutter={[0, 32]}>
                                <h5 className="grey-text text-darken-3">
                                    Sign In
                                </h5>
                            </Row>
                            <Row gutter={[0, 12]}>
                                <Col span={12} offset={2}>
                                    <div className="input-field">
                                    <Form.Item
                                        name="username"
                                        rules={[{ required: true, message: 'Please input your Username!' }]}
                                        >
                                       <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" id="username" onChange={this.handleChange} />
                                    </Form.Item>
                                    </div>
                                </Col>
                            </Row>
                            <Row gutter={[0, 24]}>
                                <Col span={12} offset={2}>
                                    <div className="input-field">
                                        <Form.Item
                                            name="password"
                                            rules={[{ required: true, message: 'Please input your Password!' }]}
                                        >
                                            <Input
                                                prefix={<LockOutlined className="site-form-item-icon" />}
                                                type="password"
                                                placeholder="Password"
                                                id="password"
                                                onChange = {this.handleChange}
                                             />
                                        </Form.Item>
                                    </div>
                                </Col>
                            </Row>
                            <Row>
                                <Col span={12} offset={2}>
                                    <div className="input-field">
                                        <Button type="primary" htmlType="submit">Login</Button>
                                        <div className="red-text center">
                                            {authError ? (
                                                <p>{authError}</p>
                                            ) : null}
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                        </Form>
                    </Col>
                    <Col lg={12} sm={0}>
                        <div>
                            <img src={loginIllustration} alt="SVG Image Here" />
                        </div>
                    </Col>
                </Row>
            </div>
        );
    }
}
const mapStateToProps = (state: any) => {
    return {
        authError: state.userReducer.authError
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
