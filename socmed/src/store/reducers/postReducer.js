const initState = {
    posts:[
        {id:'1',title:'title here',content:'content here',genre:'genre here'},
        {id:'2',title:'title here',content:'content here',genre:'genre here'},
        {id:'3',title:'title here',content:'content here',genre:'genre here'}

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
        default:
            return state;

    }
}

export default projectReducer