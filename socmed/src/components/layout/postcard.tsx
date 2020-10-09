import React from "react";
import {Redirect,Link} from 'react-router-dom'
import { Card } from 'antd';

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
            
            <Link to={url}>
                <Card title={props.title}  >
                    <p>Genre: {props.genre} </p>
                    <p>Posted By {props.authorName}</p>
                </Card> 
            </Link> 

        </div>
    )

}
