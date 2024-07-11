import { scape } from "../decorators/scape.js"
import { Trades } from "../models/trades.js"
import { View } from "./view.js"

export class TradesView extends View <Trades> {

    @scape
    protected template(model: Trades): string{
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
                        `
                    }).join('')}
            </table>
        `
    }

    private format(date: Date): string {
        return new Intl.DateTimeFormat().format(date)
    }
}