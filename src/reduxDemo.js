import React, {Component} from 'react'
import {combineReducers, createStore } from 'redux'

class ReduxDemo extends Component {

    render() {

        const attackReducer = function(state = "", action){
switch (action.type){
    case "ATTACK":
        return action.payload
        case "GREENATTACK":
            return action.payload
            case "quickAttack":
                return action.payload
}
            return state;
        }

        const defenceReducer = function(state = "", action){
            if(action.type === "ATTACK"){
                return action.payload
            }
            if(action.type === "GREENATTACK"){
                return action.payload + " mouse"
            }
            return state;
        }

        const combatReducer = combineReducers({
            attack: attackReducer,
            defence: defenceReducer
        })
        //create store
        const store = createStore(combatReducer,{
            attack: "ATTACK",
            defence: "ATTACK"
        },
        window.devToolsExtension && window.devToolsExtension()
        )
        //create an reducer

       
        //subscribe
        store.subscribe(() => {
            console.log("store is now ", store.getState())
        })

        // dispatch

        store.dispatch({type: "ATTACK", payload: "IronMan"}) //passing an object with action and payload to dispatch
        store.dispatch({type: "GREENATTACK", payload: "HULK"})

        const updateAttack = {
            type: "quickAttack",
            payload: "slice"
        }
        store.dispatch(updateAttack)
        return(
            <div>
                test

            </div>
        );
    }
}

export default ReduxDemo;