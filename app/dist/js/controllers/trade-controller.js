var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Trade } from "../models/trade.js";
import { Trades } from "../models/trades.js";
import { TradesView } from "../views/trades-view.js";
import { MessageView } from "../views/message-view.js";
import { DaysOfWeek } from "../enums/day-of-week.js";
import { logTimeExecution } from "../decorators/time-execution.js";
import { inspect } from "../decorators/inspect.js";
import { domInject } from "../decorators/dom-inject.js";
import { TradesService } from "../services/trades-service.js";
import { print } from "../utils/print.js";
export class TradeController {
    constructor() {
        this.trades = new Trades();
        this.tradesView = new TradesView("#tradesView");
        this.messageView = new MessageView("#msgView");
        this.tradesService = new TradesService();
        this.tradesView.update(this.trades);
    }
    addTrade() {
        const trade = Trade.createFrom(this.inputDate.value, this.inputAmount.value, this.inputValue.value);
        if (!this.isBusinessDay(trade.date)) {
            this.messageView.update("Trade can only be made on business days");
            return;
        }
        this.trades.addTrades(trade);
        print(trade, this.trades);
        this.clearForm();
        this.updatedView();
    }
    importData() {
        this.tradesService
            .getDayTrading()
            .then(dayTrading => {
            return dayTrading.filter(dayTrading => {
                return !this.trades
                    .list()
                    .some(trade => trade.isEqual(dayTrading));
            });
        })
            .then(dayTrading => {
            for (let trade of dayTrading) {
                this.trades.addTrades(trade);
            }
            this.tradesView.update(this.trades);
        });
    }
    isBusinessDay(date) {
        return date.getDay() > DaysOfWeek.Monday && date.getDay() < DaysOfWeek.Saturday;
    }
    clearForm() {
        this.inputDate.value = "";
        this.inputAmount.value = "";
        this.inputValue.value = "";
        this.inputDate.focus();
    }
    updatedView() {
        this.tradesView.update(this.trades);
        this.messageView.update("Trade added successfully");
    }
}
__decorate([
    domInject("#date")
], TradeController.prototype, "inputDate", void 0);
__decorate([
    domInject("#amount")
], TradeController.prototype, "inputAmount", void 0);
__decorate([
    domInject("#value")
], TradeController.prototype, "inputValue", void 0);
__decorate([
    inspect,
    logTimeExecution()
], TradeController.prototype, "addTrade", null);
//# sourceMappingURL=trade-controller.js.map