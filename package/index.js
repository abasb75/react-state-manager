import React from "react";
function prepareReactHooks(store) {
    const useStateSelector = (selector) => {
        const [state, setState] = React.useState(selector(store.get()));
        React.useEffect(() => {
            const unsubscribe = store.subscribe((newState, oldState) => {
                const selectedState = selector(newState);
                const disabledState = selector(oldState);
                if (JSON.stringify(disabledState) !== JSON.stringify(selectedState)) {
                    setState(p => {
                        if (p) { }
                        return selectedState;
                    });
                }
            });
            return () => unsubscribe();
        }, []);
        return state;
    };
    const useStateDispatcher = () => {
        return store.set;
    };
    const useAction = (actionSelector) => {
        return actionSelector(store.getActions());
    };
    const useStore = () => {
        return store;
    };
    return {
        useStateSelector,
        useSelector: useStateSelector,
        useStateDispatcher,
        useDispatch: useStateDispatcher,
        useAction,
        useStore,
    };
}
export default prepareReactHooks;
