import { createStore } from "redux";

const counterReducer = (state ={counter: 0, showHiden: false}, action) =>{
    if(action.type === 'increment'){
        return{
            counter:state.counter+1
        }
    }

    if(action.type === 'decrement'){
        return{
            counter: state.counter-1
        }
    }
    if(action.type === 'toggle'){
        if(!state.showHiden){
            return{
                ...state, showHiden: true 
            }
        }else{
            return{
                ...state, showHiden: false
            }
        }
        
    }
    
    return state;
}

const store = createStore(counterReducer);

export default store;