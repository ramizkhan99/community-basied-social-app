import axios from "axios";

export interface ICredentials {
    username: string;
    password: string;
}

export interface INewUser {
    username: string;
    password: string;
    email: string;
    firstName: string;
    lastName?: string;
}

export const signIn = (credentials: ICredentials) => {
    //console.log(credentials);
    return (dispatch: any, getState: any) => {
        axios
            .post("http://localhost:5000/login", {
                username: credentials.username,
                password: credentials.password
            })
            .then((res:any) => {
                console.log(res);
                dispatch({
                    type: "LOGIN_SUCCESS",
                    userId: res.data.id,
                    token: res.data.token,
                    username:res.data.username
                });
            })
            .catch((err) => {
               // console.log(err);
                dispatch({ type: "LOGIN_ERROR", err });
            });
    };
};

export const signOut = () => {
    
    return (dispatch: any, getState: any) => {
        
        axios.post("http://localhost:5000/signout",{
            
        },{
            headers:{
                'authorization': 'Bearer '+ getState().userReducer.token
            }
        }).then(() => {
            dispatch({ type: "SIGNOUT_SUCCESS" });
        });
    };
};

export const signUp = (newUser: INewUser) => {
    return (dispatch: any, getState: any) => {
        axios
            .post("http://localhost:5000/users", {
                username: newUser.username,
                password: newUser.password,
                email: newUser.email,
                firstName: newUser.firstName
            })
            .then(() => {
                dispatch({ type: "SIGNUP_SUCCESS" });
            })
            .catch((err) => {
                console.log(err);
                dispatch({ type: "SIGNUP_ERROR", err });
            });
    };
};
