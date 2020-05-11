export const ADD_COMMENT = 'ADD_COMMENT';
export const addComment = (author, comment) => {
    return {
        type: ADD_COMMENT,
        author,
        comment 
    }
};
