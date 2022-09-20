function InventoryViewModel() {
    var self = this;

    var iconTypes = [
        { icon: "icon-bone", text: "Bone"},
        { icon: "icon-ball", text: "Ball"},
        { icon: "icon-circle", text: "Circle"},
        { icon: "icon-rabbit", text: "Rabbit"},
     ]

}

const knockoutApp = document.querySelector("#knockout-app");
ko.applyBindings(new InventoryViewModel(), knockoutApp);