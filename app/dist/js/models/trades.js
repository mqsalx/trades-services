export class Trades {
    constructor() {
        this.trades = [];
    }
    addTrades(trade) {
        this.trades.push(trade);
    }
    list() {
        return this.trades;
    }
    toText() {
        return JSON.stringify(this.trades, null, 2);
    }
    isEqual(trades) {
        return JSON.stringify(this.trades) === JSON.stringify(trades.list());
    }
}
//# sourceMappingURL=trades.js.map