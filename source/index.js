import "../source/style";
import {activateSTmodal} from "../source/ST-modal-plugin/ST-modal";
activateSTmodal({
    modal: ".ST-modal",
    openButton: "#modal-open",
    confirmButton: "#modal-confirm",
    cancelButton: "#modal-cancel",
    exitButton: "#modal-close",
    dischargePlace: ".container"
});