var customer;
var customers=[];
$(document).ready(function(){
 
        function Customer() {
			this._name="serega";
			this._email="";
			this._telephone="";
			this._address="";
			this._street="";
			this._city="";
			this._state="";
			this._zip="";
        }

     customer = new Customer();

    mvvm.observe(customer);
	// );
 $("#create_customer").click(function () {
	 $("#customers_form").css("display","block");
 });
 $("#done").click(function() {
		
 })	
});