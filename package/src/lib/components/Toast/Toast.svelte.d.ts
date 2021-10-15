import { SvelteComponentTyped } from 'svelte';
import type { ToastItem } from './toast';
import type { Color } from '../../types/bg';
import type { Icons } from '../../types/icons';
import type { Offset } from '../../types/position';
export type { Color, Icons, ToastItem };
declare const __propDef: {
    props: {
        toastItem?: ToastItem;
        id?: number;
        type?:
            | 'primary'
            | 'secondary'
            | 'success'
            | 'error'
            | 'initial'
            | 'dark'
            | 'gray'
            | 'light'
            | 'warning';
        icon?: Icons;
        timeout?: number;
        closable?: true;
        invert?: boolean;
        reverse?: boolean;
        visible?: boolean;
        offset?: Offset;
    };
    events: {
        close: CustomEvent<any>;
    } & {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
};
export declare type ToastProps = typeof __propDef.props;
export declare type ToastEvents = typeof __propDef.events;
export declare type ToastSlots = typeof __propDef.slots;
export default class Toast extends SvelteComponentTyped<
    ToastProps,
    ToastEvents,
    ToastSlots
> {}