export function domInject(selector) {
    return function (target, propertyKey) {
        console.log(`Modifying prototype of ${target.constructor.name} and adding getter for property ${propertyKey}`);
        let element = null;
        const getter = function () {
            if (!element) {
                element = document.querySelector(selector);
                console.log(`Searching for element with selector ${selector} and found ${element}`);
            }
            return element;
        };
        Object.defineProperty(target, propertyKey, {
            get: getter
        });
    };
}
//# sourceMappingURL=dom-inject.js.map