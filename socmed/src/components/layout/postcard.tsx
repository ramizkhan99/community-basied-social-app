import React from "react";
import {Redirect,Link} from 'react-router-dom'

interface IPostProps {
    genre:String;
    title:String;
    authorName:String;
    lodash:String;
}
export function PostCard(props:IPostProps){
    const url = "/blogs/"+props.lodash;
    return(
        <div>
            <h1>{props.title}</h1>
            <h3>Authored By:{props.authorName}</h3>
            <h3>Genre:{props.genre}</h3>
            <Link to={url}>Check Full Article</Link> 

        </div>
    )

}
