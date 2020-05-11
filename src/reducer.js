import {ADD_COMMENT} from './actions';

const initialState = {
    comments: [],
    title: ""
};

export default (state = initialState, action ) => {
    switch( action.type ){
        case ADD_COMMENT : 
                            return Object.assign({}, state, {
                                comments : [ 
                                    ...state.comments, 
                                    {
                                        author : action.author, 
                                        comment : action.comment
                                    }
                                ]
                            });

                            
        default : return state;
    }
}; // Change me!
