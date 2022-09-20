function CounterViewModel() {
    var self = this

    //* make firstName an observable and give it's initial value "Wayne"
    //* (just like useState)
    self.firstName = ko.observable("Wayne")

    //* set the value
    self.firstName("George")

    //* get the value
    // self.firstName()

    self.count = ko.observable(0)
    self.increase = function(){
        var currentValue = self.count()
        self.count(currentValue+1)
    }

    self.decrease = function(){
        if(self.count() > 0){
            var currentValue = self.count()
        self.count(currentValue-1)
        }
    }
}

ko.applyBindings(new CounterViewModel(),
document.querySelector("#knockout-app"))