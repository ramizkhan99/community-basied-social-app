import React ,{Component} from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'
import {Redirect,Link} from 'react-router-dom'
import SignOut from "../signout"
import {getPosts} from "../../store/actions/postActions"



interface ISignInProps {
    authError: String;
    username:String;
    getPosts:any;
}

class Dashboard extends Component<ISignInProps, {}>{
    componentDidMount(){
        this.props.getPosts();

    }
    render(){
        
        const { authError,username } = this.props;
        
        if(authError!=="success") return <Redirect to='/signin'/>
        return(
        <div className="dashboard container">
            <h1>Welcome to Commcon,{username}</h1>
            <SignOut/>
            <Link to="/post">Create New Post!</Link>
            <br/>
            <Link to="/feed">Check Out The Feed!</Link>

        </div>
    
        )
    }
}
const mapStateToProps = (state:any) =>{
    
    return{
        authError: state.userReducer.authError,
        username:state.userReducer.username
    }
}
const mapDispatchtoProps = (dispatch: any) => {
    return{
        getPosts:()=> dispatch(getPosts())
    }

}
export default connect(mapStateToProps,mapDispatchtoProps)(Dashboard)