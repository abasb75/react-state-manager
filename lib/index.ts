import { Store } from "@abasb75/state-manager";
import { MSExposedMSActions } from "@abasb75/state-manager";
import React from "react";

function prepareReactHooks<
    MSState extends { [key: string]: any; } & keyof MSState extends string ? {} : "Type must be string",
    MSActions extends { [key: string]: any; } & keyof MSActions extends string ? {} : "Type must be string",
>(store:Store<MSState,MSActions>) {

    const useStateSelector = <Selected = unknown>(selector: (state: MSState) => Selected): Selected => {
        const [state,setState] = React.useState(selector(store.get()));
        React.useEffect(()=>{
            const unsubscribe = store.subscribe((newState:MSState,oldState:MSState|undefined)=>{
                const selectedState = selector(newState);
                const disabledState  = selector(oldState as MSState);
                if(JSON.stringify(disabledState) !== JSON.stringify(selectedState)){
                    setState(p=>{
                        if(p){}
                        return selectedState
                    });
                }
            });
            return ()=>unsubscribe();
        },[]);
        return state;
    }

    const useStateDispatcher = ()=>{
        return store.set;
    }

    const useAction = <Selected = unknown>(actionSelector: (actions: MSExposedMSActions<MSActions, MSState>) => Selected):Selected =>{
        return actionSelector(store.getActions());
    }

    const useStore = ()=>{
        return store;
    }

    return {
        useStateSelector, 
        useSelector:useStateSelector,
        useStateDispatcher,
        useDispatch:useStateDispatcher,
        useAction,
        useStore,
   }

}

export default prepareReactHooks;