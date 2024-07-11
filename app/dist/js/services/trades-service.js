import { Trade } from "../models/trade.js";
export class TradesService {
    getDayTrading() {
        return fetch("http://localhost:8080/dados")
            .then(response => response.json())
            .then((data) => {
            return data.map(dataIndata => new Trade(new Date(), dataIndata.montante, dataIndata.vezes));
        });
    }
}
//# sourceMappingURL=trades-service.js.map