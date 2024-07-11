import { Trade } from "../models/trade.js"
import { Trades } from "../models/trades.js"
import { TradesView } from "../views/trades-view.js"
import { MessageView } from "../views/message-view.js"
import { DaysOfWeek } from "../enums/day-of-week.js"
import { logTimeExecution } from "../decorators/time-execution.js"
import { inspect } from "../decorators/inspect.js"
import { domInject } from "../decorators/dom-inject.js"
import { TradesService } from "../services/trades-service.js"
import { print } from "../utils/print.js"

export class TradeController {

    @domInject("#date")
    private inputDate: HTMLInputElement
    @domInject("#amount")
    private inputAmount: HTMLInputElement
    @domInject("#value")
    private inputValue: HTMLInputElement
    private trades = new Trades()
    private tradesView = new TradesView("#tradesView")
    private messageView = new MessageView("#msgView")
    private tradesService = new TradesService()

    constructor() {

        this.tradesView.update(this.trades)
    }

    @inspect
    @logTimeExecution()
    public addTrade(): void {

        const trade = Trade.createFrom(
            this.inputDate.value,
            this.inputAmount.value,
            this.inputValue.value
        )
        if (!this.isBusinessDay(trade.date)) {
            this.messageView.update("Trade can only be made on business days")
            return
        }

        this.trades.addTrades(trade)
        print(trade, this.trades)
        this.clearForm()
        this.updatedView()
    }

    public importData(): void {
        this.tradesService
            .getDayTrading()
            .then(
                dayTrading => {
                    return dayTrading.filter(
                        dayTrading => {
                            return !this.trades
                            .list()
                            .some(trade => trade.isEqual(dayTrading))
                        }
                    )
                }
            )
            .then(dayTrading => {
                for (let trade of dayTrading) {
                    this.trades.addTrades(trade)
                }
                this.tradesView.update(this.trades)
            })
    }

    private isBusinessDay(date: Date) {
        return date.getDay() > DaysOfWeek.Monday && date.getDay() < DaysOfWeek.Saturday
    }

    private clearForm(): void {
        this.inputDate.value = ""
        this.inputAmount.value = ""
        this.inputValue.value = ""
        this.inputDate.focus()
    }

    private updatedView(): void {
        this.tradesView.update(this.trades)
        this.messageView.update("Trade added successfully")
    }
}