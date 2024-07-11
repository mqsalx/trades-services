import { TradeController } from "./controllers/trade-controller.js";
const controller = new TradeController();
const form = document.querySelector(".form");
if (form) {
    form.addEventListener("submit", event => {
        event.preventDefault();
        controller.addTrade();
    });
}
else {
    throw Error("Form not found");
}
const importButton = document.querySelector("#btn-import-data");
if (importButton) {
    importButton.addEventListener("click", () => {
        controller.importData();
    });
}
else {
    throw Error("Import button not found");
}
//# sourceMappingURL=app.js.map