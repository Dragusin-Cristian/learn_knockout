// This is a simple *viewmodel* - JavaScript that defines the data and behavior of your UI
function AppViewModel() {
    var self = this
    self.firstName = ko.observable("Dragusin")
    self.lastName = ko.observable("Cristian")
    
    self.fullName = ko.computed(function(){
        return self.firstName() + " " + self.lastName()
    })
    
    self.toUpperCase = function(){
        var lName = self.lastName()
        self.lastName(lName.toUpperCase())
    }
}

// Activates knockout.js
ko.applyBindings(new AppViewModel(), document.getElementById("ko-app"));