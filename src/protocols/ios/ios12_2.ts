import { IOSProtocol } from './ios';
import { Target } from '../target';

export class IOS12_2Protocol extends IOSProtocol {

    constructor(target: Target) {
        super(target);
    }

    protected mapSelectorList (selectorList): void {
        const range = selectorList.range;

        for (let i = 0; i < selectorList.selectors.length; i++) {
            if (range !== undefined) {
                selectorList.selectors[i].range = range;
            }
        }

        delete selectorList.range;
    }
}
