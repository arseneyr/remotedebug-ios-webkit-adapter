//
// Copyright (C) Microsoft. All rights reserved.
//

import { IOSProtocol } from './ios';
import { Target } from '../target';

export class IOS9Protocol extends IOSProtocol {

    constructor(target: Target) {
        super(target);
        this._target.addMessageFilter('tools::DOM.setInspectedNode', (msg) => { msg.method = 'Console.addInspectedNode'; return Promise.resolve(msg); });
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
