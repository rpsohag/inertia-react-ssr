import { Ziggy as ZiggyConfig } from '../ziggy';
import { route as routeFn } from 'ziggy-js';

declare global {
    var route: typeof routeFn;
    var Ziggy: typeof ZiggyConfig;
}
