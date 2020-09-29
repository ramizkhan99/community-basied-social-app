import React ,{Component} from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'
import {Redirect} from 'react-router-dom'

interface ISignInProps {
    authError: boolean;
}

class Dashboard extends Component<ISignInProps, {}>{
    render(){
        
        const { authError } = this.props;
        console.log(authError)
        if(authError) return <Redirect to='/signin'/>
        return(
        <div className="dashboard container">
            <h1>Welcome to Commcon</h1>
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