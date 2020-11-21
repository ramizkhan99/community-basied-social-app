import axios from "axios";

export interface INewPost {
    title:String;
    content:String;
    genre:String;

}

export const newPost = (postDetails:INewPost)=> {
    return (dispatch: any, getState: any) => {
        
        
        
        axios
            .post(
                "http://localhost:5000/blogs",
                {
                    
                    title:postDetails.title,
                    content:postDetails.content,
                    genre:postDetails.genre,
                    
                },
                {
                    withCredentials: true,
                }
            )
            .then(() => {
                dispatch({ type: "CREATE_POST",postDetails});
            })
            .catch((err) => {
                console.log(err);
                dispatch({ type: "CREATE_POST_ERROR", err });
            });
    };
};
export const getPosts = () =>{
    return (dispatch: any, getState: any) => {
        axios.get(
            "http://localhost:5000/blogs",
            { withCredentials: true }
        ).then((response:any)=>{
            dispatch({type:"FETCHED_POSTS",response})
        }).catch((err)=>{
            dispatch({type:"FETCH_POSTS_ERROR",err})
        })
    }

}