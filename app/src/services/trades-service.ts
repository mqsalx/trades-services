import { dayTrading } from "../interfaces/day-trading.js";
import { Trade } from "../models/trade.js";

export class TradesService {
    public getDayTrading(): Promise<Trade[]> {
        return fetch("http://localhost:8080/dados")
        .then(response => response.json())
        .then((
            data: dayTrading[]) => {
                return data.map(
                    dataIndata => new Trade(
                        new Date(),
                        dataIndata.montante,
                        dataIndata.vezes
                    )
                )
            }
        )
    }
}