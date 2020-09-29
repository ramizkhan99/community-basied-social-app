import React ,{Component} from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'
import {Redirect} from 'react-router-dom'
import SignOut from "../signout"

interface ISignInProps {
    authError: String;
}

class Dashboard extends Component<ISignInProps, {}>{
    render(){
        
        const { authError } = this.props;
        
        if(authError!=="success") return <Redirect to='/signin'/>
        return(
        <div className="dashboard container">
            <h1>Welcome to Commcon</h1>
            <SignOut/>
        </div>
    
        )
    }
}
const mapStateToProps = (state:any) =>{
    
    return{
        authError: state.userReducer.authError
    }
}
export default connect(mapStateToProps)(Dashboard)