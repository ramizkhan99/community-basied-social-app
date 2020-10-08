import React ,{Component} from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'
import {Redirect,Link} from 'react-router-dom'




interface ISignInProps {
    authError: String;
    username:String;
}

class Dashboard extends Component<ISignInProps, {}>{
    render(){
        
        const { authError,username } = this.props;
        
        if(authError!=="success") return <Redirect to='/signin'/>
        return(
        <div className="dashboard container">
            <h1>Welcome to Commcon,{username}</h1>
            
            <Link to="/post">Create New Post!</Link>

        </div>
    
        )
    }
}
const mapStateToProps = (state:any) =>{
    console.log(state)
    return{
        authError: state.userReducer.authError,
        username:state.userReducer.username
    }
}
export default connect(mapStateToProps)(Dashboard)