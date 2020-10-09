import React ,{Component} from 'react'
import { connect } from 'react-redux'
import {Redirect,Link} from 'react-router-dom'
import {PostCard} from './postcard'
import { Layout } from 'antd';
const { Header, Sider, Content } = Layout;


interface IFeedProps {
    posts:any;
    authError: String;
    username:String;
    
}
interface IPostProps {
    genre:String;
    title:String;
    authorName:String;
    lodash:string;
}

class Feed extends Component<IFeedProps, {}>{
    
    render(){
        
        
        const { posts,authError,username, } = this.props;
        if(authError!=="success") return <Redirect to='/signin'/>
        return(
        <div className="feed container" >
            <Layout>
                <Header style={{color:"white"}}>Welcome to Commcon Feed {username}</Header>
                <Layout>
                    
                    <Content style={{textAlign:"center"}}>
                        {posts.map((post:any,key:any)=>{
                        return(
                            <PostCard genre={post.genre} title={post.title} authorName={post.authorName} lodash={post.lodash} key={post.lodash}/>
                        )
                            }
                        
                                )}
                    </Content>

                </Layout>
            
            </Layout>
            
            
        </div>
    
        )
    }
}

const mapStateToProps = (state:any) =>{
    
    return{
        posts: state.postReducer.posts,
        authError: state.userReducer.authError,
        username:state.userReducer.username,
        
    }
}


export default connect(mapStateToProps)(Feed)