import { Store } from "@abasb75/state-manager";
import React from "react";
export type RMSStoreContext<MSState extends {
    [key: string]: any;
} & keyof MSState extends string ? {} : "Type must be string", MSActions extends {
    [key: string]: any;
} & keyof MSActions extends string ? {} : "Type must be string"> = Store<MSActions, MSActions> extends Store<infer S, infer A> ? React.Context<Store<S, A>> : never;
