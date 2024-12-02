# @abasb75/react-state-manager
`@abasb75/react-state-manager` is a great and best state manager tools for your javascript web applications.  
1. sync data between opened browser tabs when updating state.
2. save data on `localstorage`
3. great type hint for `state` or defined `action`

# installation

```sh
npm i @abasb75/state-manager @abasb75/react-state-manager --save
```

# Quick Start:

1. Create `initial value`  for passing to store's object:

```javascript

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

```


2. Define your `actions`:

```javascript

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

```

3. Create your store:

```javascript

import { createStore } from "@abasb75/state-manager";

...

const initialState:StateType = {
    ...
}


const actions = {
    ...
}

const store = createStore({
    initialState,
    actions,
    storgable:true, // if storagble sets true, states saved on localstorage
    storageKey:'mystorage',
});

export default store;

```

4. create hook via store;

```javascript
import prepareReactHooks from "@abasb75/react-state-manager";

....

const {
    useStateSelector,
    useAction,
} = prepareReactHooks(store);

export {
    useStateSelector,
    useAction,
};

```

5. get state data with `useStateSelector` hook:

```javascript

import { useStateSelector } from "./state";

...

const darkMode = useStateSelector(state=>state.darkMode); //return darkMode value 

```

6. update state properties value with `useStateDispatcher` hook:

```javascript

import { useStateSelector } from "./state";

....

const dispatch = useStateDispatcher();

dispatch({
  counter:0;
}).then(state=>{
  console.log(state.counter);
});

```

7. update state value with defiened `actions`:

```javascript

import { useAction } from "./state";

...

const toggleDarkMode = useAction(actions=>actions.toggleDarkMode);

...

onClick={()=>toggleDarkMode()}

```

# Examples:
<a href="https://github.com/abasb75/react-state-manager/tree/main/react-test">Simple Note App</a>