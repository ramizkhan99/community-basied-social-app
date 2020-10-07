import axios from "axios";

export interface INewPost {
    title:String;
    content:String;
    genre:String;

}

export const newPost = (postDetails:INewPost)=> {
    return (dispatch: any, getState: any) => {
        const authorId = getState().userReducer.user
        const authorName = getState().userReducer.username
        console.log("inside post actions",authorId,authorName,postDetails)
        
        axios
            .post(
                "http://localhost:5000/newpost",
                {
                    authorId:authorId,
                    authorName:authorName,
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