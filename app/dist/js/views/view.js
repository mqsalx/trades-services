export class View {
    constructor(selector) {
        const element = document.querySelector(selector);
        if (element) {
            this.element = element;
        }
        else {
            throw Error(`Selector ${selector} not found`);
        }
    }
    update(model) {
        let template = this.template(model);
        this.element.innerHTML = template;
        const t2 = performance.now();
    }
}
//# sourceMappingURL=view.js.map