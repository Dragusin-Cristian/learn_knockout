function InventoryViewModel() {
    var self = this;

    var iconTypes = [
        { icon: "icon-bone", text: "Bone"},
        { icon: "icon-ball", text: "Ball"},
        { icon: "icon-circle", text: "Circle"},
        { icon: "icon-rabbit", text: "Rabbit"},
     ]

     //* state for an array
     self.inventory = ko.observableArray([])

     self.addItem = function(){
        var index = Math.floor(Math.random() * iconTypes.length)
        self.inventory.push(iconTypes[index])
     }

     //* arguments we can access for working with the data and the event:
     self.removeItem = function(data, event){
        var index = event.target.getAttribute('item-index')
        self.inventory.splice(index, 1)
     }



}

const knockoutApp = document.querySelector("#knockout-app");
ko.applyBindings(new InventoryViewModel(), knockoutApp);