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
                "http://localhost:5000/newpost",
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