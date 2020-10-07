const initState = {
    authError:null,
    
    username:null,
    
};

const userReducer = (state=initState,action)=>{
    switch(action.type){
        case 'LOGIN_ERROR':
            console.log('login error')
                return{
                    ...state,
                    authError:action.err
                }
        case 'LOGIN_SUCCESS':
            //console.log('login success');
            //console.log(action)
            return{
                ...state,
                authError: "success",
                username:action.username
            }
        case 'SIGNOUT_SUCCESS':
            console.log('signout success')
            return {
                ...state,
                authError: null
              }
        case 'SIGNUP_SUCCESS':
                //console.log('signup success')
                return {
                  ...state,
                  authError: "success"
                }
          
        case 'SIGNUP_ERROR':
                console.log('signup error')
                return {
                  ...state,
                  authError: action.err
                }
        default:
            return state;
    }
    
}
export default userReducer;