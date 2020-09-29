import React, { FunctionComponent } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { Button } from "antd";
import { signOut } from "../store/actions/userActions";



const SignOut = (props:any) => {
    return(
        <div>
            <Button type="primary" onClick={props.signOut}>Signout</Button>
        </div>
    );
   }


   const mapDispatchToProps = (dispatch: any) => {
    return {
        signOut: () => {
            dispatch(signOut());
        }
    };
};
export default connect(null, mapDispatchToProps)(SignOut);