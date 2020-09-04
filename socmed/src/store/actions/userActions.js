import axios from "axios"
export const signIn = (credentials) => {
    return (dispatch, getState) => {
      
        axios.post('http://localhost:3000//login', {       //change url 
            username:credentials.username,
            password:credentials.password
          }).then((res) => {
        dispatch({ type: 'LOGIN_SUCCESS',userId:res.id,token:res.token});
      }).catch((err) => {
        dispatch({ type: 'LOGIN_ERROR', err });
      });
  
    }
  }
  
  export const signOut = () => {
    return (dispatch, getState) => {
      
  
      axios.post('http://localhost:3000/signout').then(() => {
        dispatch({ type: 'SIGNOUT_SUCCESS' })
      });
    }
  }
  
  export const signUp = (newUser) => {
    return (dispatch, getState) => {
     
  
      axios.post("http://localhost:3000/users",{
          username:newUser.username,
          password:newUser.password,
          email:newUser.email,
          firstName:newUser.firstName
      }).then(() => {
        dispatch({ type: 'SIGNUP_SUCCESS' });
      }).catch((err) => {
        dispatch({ type: 'SIGNUP_ERROR', err});
      });
    }
  }