	        function ViewModel() {
	                var self = this;

	                // self.resultChoices = ["Delete", "Update"];

	                self.customers = ko.observableArray([
	                        new Customer("Brendan","Kiev"),
	                        new Customer("Brendan","Odessa"),
	                        new Customer("Michelle","Paris")
	                ]
				);
					self.addCustomer = function() {
					        self.customers.push(new Customer("",""));
					}
				    self.removePlayer = function (customer) {
						//self.gameResults.splice(1);
				            for (var i = 0; i < self.customers().length; i++) {
 				               if (self.customers()[i] == customer) {
							   
 				                 self.customers.splice(i, 1);
						      }
 				           }
 				       }
	        };