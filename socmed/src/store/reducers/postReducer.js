const initState = {
    posts:[
        

    ]
}

const projectReducer = (state=initState,action)=>{
    switch(action.type){
        case 'CREATE_POST':
            console.log('post created');
            return state;
        case 'CREATE_PROJECT_ERROR':
            console.log('Error occured while posting',action.err);
            return state;
        case 'FETCHED_POSTS':
            
            return {
                ...state,
                posts:action.response.data.posts
            }
        case 'FETCH_POSTS_ERROR':
            console.log("Error Occured while fetching posts",action.posts)
            return state

        default:
            return state;

    }
}

export default projectReducer