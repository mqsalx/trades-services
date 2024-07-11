var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { scape } from "../decorators/scape.js";
import { View } from "./view.js";
export class TradesView extends View {
    template(model) {
        return `
            <table class="table table-hover table-bordered">
                <thead>
                    <tr>
                        <th>DATE</th>
                        <th>AMOUNT</th>
                        <th>VALUE</th>
                    </tr>
                </thead>
                <tbody>
                    ${model.list().map(trade => {
            return `
                            <tr>
                                <td>
                                    ${this.format(trade.date)}
                                </td>
                                <td>
                                    ${trade.amount}
                                </td>
                                <td>
                                    ${trade.value}
                                </td>
                            </tr>
                        `;
        }).join('')}
            </table>
        `;
    }
    format(date) {
        return new Intl.DateTimeFormat().format(date);
    }
}
__decorate([
    scape
], TradesView.prototype, "template", null);
//# sourceMappingURL=trades-view.js.map