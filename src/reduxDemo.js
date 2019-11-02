import React, {Component} from 'react'
import { createStore } from 'redux'

class ReduxDemo extends Component {

    render() {

        const reducer = function(state, action){
            if(action.type === "ATTACK"){
                return action.payload
            }
            if(action.type === "GREENATTACK"){
                return action.payload
            }
            return state;
        }
        //create store
        const store = createStore(reducer, "Peace")
        //create an reducer


        //subscribe
        store.subscribe(() => {
            console.log("store is now ", store.getState())
        })

        // dispatch

        store.dispatch({type: "ATTACK", payload: "IronMan"})
        store.dispatch({type: "GREENATTACK", payload: "HULK"})

        return(
            <div>
                test

            </div>
        );
    }
}

export default ReduxDemo;