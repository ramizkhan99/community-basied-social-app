import axios from "axios"
export const signIn = (credentials) => {
    console.log(credentials)
    return (dispatch, getState) => {
      
        axios.post('http://localhost:5000/login', {       //change url 
            username:credentials.username,
            password:credentials.password
          }).then((res) => {
            console.log(res);
        dispatch({ type: 'LOGIN_SUCCESS',userId:res.data.id,token:res.data.token});
      }).catch((err) => {
        console.log(err);
        dispatch({ type: 'LOGIN_ERROR', err });
      });
  
    }
  }
  
  export const signOut = () => {
    return (dispatch, getState) => {
      
  
      axios.post('http://localhost:5000/signout').then(() => {
        dispatch({ type: 'SIGNOUT_SUCCESS' })
      });
    }
  }
  
  export const signUp = (newUser) => {
    
    return (dispatch, getState) => {
     
  
      axios.post("http://localhost:5000/users",{
          username:newUser.username,
          password:newUser.password,
          email:newUser.email,
          firstName:newUser.firstName
      }).then(() => {
        dispatch({ type: 'SIGNUP_SUCCESS' });
      }).catch((err) => {
        console.log(err)
        dispatch({ type: 'SIGNUP_ERROR', err});
      });
    }
  }