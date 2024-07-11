export function domInject(selector: string) {
    return function(target: any, propertyKey: string) {

        console.log(`Modifying prototype of ${target.constructor.name} and adding getter for property ${propertyKey}`)
        let element: HTMLElement | null = null

        const getter = function() {

            if (!element){
                element = document.querySelector(selector) as HTMLElement
                console.log(`Searching for element with selector ${selector} and found ${element}`)
            }

            return element
        }

        Object.defineProperty(target, propertyKey, {
            get: getter
        })
    }
}
