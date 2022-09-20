function CounterViewModel() {
    var self = this

    //* make firstName an observable and give it's initial value "Wayne"
    //* (just like useState)
    self.firstName = ko.observable("Wayne")

    self.firstName("George")
}

ko.applyBindings(new CounterViewModel(),
document.querySelector("#knockout-app"))