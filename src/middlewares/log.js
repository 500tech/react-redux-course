const logMiddleware = store => next => action => {
    console.log(`Action: ${ action.type }`, action);
    console.log(store.getState());
    
    return next(action);
};

export default logMiddleware;