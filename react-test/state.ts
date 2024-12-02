import { createStore } from "@abasb75/state-manager";
import prepareReactHooks from "@abasb75/react-state-manager";

interface StateType {
    darkMode:boolean;
    counter:number;
    notes:{
        text:string;
        date:number;
    }[];
}

const initialState:StateType = {
    darkMode:false,
    counter:0,
    notes:[],
}

const actions = {
    toggleDarkMode:(state:StateType)=>{
        return {
            ...state,
            darkMode:!state.darkMode,
        };
    },
    counter:{
        increment:(state:StateType)=>{
            return {
                ...state,
                counter:state.counter+1,
            }
        },
        decrement:(state:StateType)=>{
            return {
                ...state,
                counter:state.counter-1,
            }
        },
    },
    notes:{
        add:(state:StateType,text:string):StateType=>{
            console.log('add worked!')
            return {
                ...state,
                notes:[
                    ...state.notes,
                    {
                        text:text,
                        date:Date.now(),
                    }
                ]
            }
        },
        delete:(state:StateType,id:number):StateType=>{
            return {
                ...state,
                notes:state.notes.filter(n=>n.date!==id),
            }
        },
    }
}

const store = createStore({
    initialState,
    actions,
    storgable:true,
    storageKey:'mystorage',
});

const {
    useStateSelector,
    useStateDispatcher,
    useAction,
} = prepareReactHooks(store);

export {
    useStateSelector,
    useStateDispatcher,
    useAction,
};