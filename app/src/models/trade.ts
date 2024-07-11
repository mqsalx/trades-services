import { Model } from "../interfaces/model.js"

export class Trade implements Model<Trade> {

    constructor(
        private _date: Date,
        public readonly amount: number,
        public readonly value: number
    ) {}

    get volume(): number {
        return this.amount * this.value
    }

    get date(): Date {
        const date = new Date(this._date.getTime())
        return date
    }

    public static createFrom(dateString: string, amountString: string, valueString: string): Trade {

        const exp = /-/g
        const date = new Date(dateString.replace(exp, ","))
        const amount = parseInt(amountString)
        const value = parseFloat(valueString)

        return new Trade(
            date,
            amount,
            value
        )
    }

    public toText(): string {
        return `
            Date: ${this.date}
            Amount: ${this.amount}
            Value: ${this.value}
            Volume: ${this.volume}
        `
    }

    public isEqual(trade: Trade): boolean {
        return (
            this.date.getDate() === trade.date.getDate()
            && this.date.getMonth() === trade.date.getMonth()
            && this.date.getFullYear() === trade.date.getFullYear()
            && this.amount === trade.amount
            && this.value === trade.value
        )
    }

}