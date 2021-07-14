function createStore(reducer,initialState){
    let listeners = [];
    let state = initialState || {};

    let getState = function(){
        return state;
    };

    let subscribe = function(listener){
        listener.push(listener);

        return ()=>{listeners = listeners.filter(ele=>ele!==listener);}
    }

    let dispatch = function(action){
        let newState = reducer(state,action);

        listeners.forEach(listener=>listener());
        state=newState;
    }

    return {
        getState,
        subscribe,
        dispatch
    }
}