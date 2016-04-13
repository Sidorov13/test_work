  function ViewModel() {
    var self = this;
	self.customers = ko.observableArray(
	  [
	    new Customer("Alexander","Kiev"),
	    new Customer("Sergey","Odessa"),
	    new Customer("Michael","Paris")
	  ]
	);
	
	self.addCustomer = function() {
	  self.customers.push(new Customer("",""));
    }
	self.removeCustomer = function (customer) {
	  for (var i = 0; i < self.customers().length; i++) {
 	    if (self.customers()[i] == customer) {
 	      self.customers.splice(i, 1);
		}
 	  }
    }
 };
	