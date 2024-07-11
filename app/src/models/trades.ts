import { Model } from "../interfaces/model.js"
import { Trade } from "./trade.js"


export class Trades implements Model<Trades> {
    private trades: Trade[] = []
    public addTrades(trade: Trade){
        this.trades.push(trade)
    }

    public list(): readonly Trade[] {
        return this.trades
    }

    public toText(): string {
        return JSON.stringify(this.trades, null, 2)
    }

    public isEqual(trades: Trades): boolean {
        return JSON.stringify(this.trades) === JSON.stringify(trades.list())
    }
}