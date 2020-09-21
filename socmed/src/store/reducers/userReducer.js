const initState = {
    authError:null,
    user:null,
    token:null
};

const userReducer = (state=initState,action)=>{
    switch(action.type){
        case 'LOGIN_ERROR':
            console.log('login error')
                return{
                    ...state,
                    authError:action.err.message
                }
        case 'LOGIN_SUCCESS':
            console.log('login success');
            console.log(action)
            return{
                ...state,
                authError:null,
                user:action.userId,
                token:action.token
            }
        case 'SIGNOUT_SUCCESS':
            console.log('signout success')
            return state;
        case 'SIGNUP_SUCCESS':
                console.log('signup success')
                return {
                  ...state,
                  authError: null
                }
          
        case 'SIGNUP_ERROR':
                console.log('signup error')
                return {
                  ...state,
                  authError: action.err.message
                }
        default:
            return state;
    }
    
}
export default userReducer;