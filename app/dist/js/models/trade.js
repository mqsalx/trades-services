export class Trade {
    constructor(_date, amount, value) {
        this._date = _date;
        this.amount = amount;
        this.value = value;
    }
    get volume() {
        return this.amount * this.value;
    }
    get date() {
        const date = new Date(this._date.getTime());
        return date;
    }
    static createFrom(dateString, amountString, valueString) {
        const exp = /-/g;
        const date = new Date(dateString.replace(exp, ","));
        const amount = parseInt(amountString);
        const value = parseFloat(valueString);
        return new Trade(date, amount, value);
    }
    toText() {
        return `
            Date: ${this.date}
            Amount: ${this.amount}
            Value: ${this.value}
            Volume: ${this.volume}
        `;
    }
    isEqual(trade) {
        return (this.date.getDate() === trade.date.getDate()
            && this.date.getMonth() === trade.date.getMonth()
            && this.date.getFullYear() === trade.date.getFullYear()
            && this.amount === trade.amount
            && this.value === trade.value);
    }
}
//# sourceMappingURL=trade.js.map