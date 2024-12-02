import { Store } from "@abasb75/state-manager";
import { MSExposedMSActions } from "@abasb75/state-manager";
declare function prepareReactHooks<MSState extends {
    [key: string]: any;
} & keyof MSState extends string ? {} : "Type must be string", MSActions extends {
    [key: string]: any;
} & keyof MSActions extends string ? {} : "Type must be string">(store: Store<MSState, MSActions>): {
    useStateSelector: <Selected = unknown>(selector: (state: MSState) => Selected) => Selected;
    useSelector: <Selected = unknown>(selector: (state: MSState) => Selected) => Selected;
    useStateDispatcher: () => any;
    useDispatch: () => any;
    useAction: <Selected = unknown>(actionSelector: (actions: MSExposedMSActions<MSActions, MSState>) => Selected) => Selected;
    useStore: () => Store<MSState, MSActions>;
};
export default prepareReactHooks;
