function CounterView() {
    var self = this

    self.firstName = ko.observable("Wayne")
}

KeyboardEvent.applyBindings(new CounterViewModel(),
document.querySelector("#knockout"))