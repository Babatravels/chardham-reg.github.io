
			jQuery(document).ready(function($) {
				$("#submitform").validate({
				    rules: {
				        name: {
					        required: true,
					        minlength: 3
				     	},
				        email: {
					        required: true,
					        email: true
					      },
					    mobno : {
					        required: true,
					        minlength: 10,
					        maxlength:10
					    },
					    location : {
					        required: true
					    },
					    from_date : {
					        required: true
					    },
					     person_no: {
				        	required: true
				      	}			
				    },
				    messages: {
					    name: {
					      required: "We need your name to contact you",
					      name: "Your Name should be least 3 character."
					    },
					    email: {
					      required: "We need your email address to contact you",
					      email: "Your email address must be in the format of name@domain.com"
					    },
					    mobno:{
					    	required: "Please enter the phone number",
					    	minlength: "Minimum length is 10 digits"
					    },
					    location: {
					    	required: "We need your location for trip",
					    	location: "Please Enter Your Start Location",
					    
					    },
					    from_date:"Please select date of traveling arrival",
					    person_no:"Please select number of person for traveling ",
					}
				});
			});

			jQuery(document).ready(function($) {
				$("#modalform").validate({
				    rules: {
				        name: {
					        required: true,
					        minlength: 3
				     	},
				        email: {
					        required: true,
					        email: true
					      },
					    mobno : {
					        required: true,
					        minlength: 10,
					        maxlength:10
					    },
					    location : {
					        required: true
					    },
					    from_date : {
					        required: true
					    },
					     person_no: {
				        	required: true
				      	}			
				    },
				    messages: {
					    name: {
					      required: "We need your name to contact you",
					      name: "Your Name should be least 3 character."
					    },
					    email: {
					      required: "We need your email address to contact you",
					      email: "Your email address must be in the format of name@domain.com"
					    },
					    mobno:{
					    	required: "Please enter the phone number",
					    	minlength: "Minimum length is 10 digits"
					    },
					    location: {
					    	required: "We need your location for trip",
					    	location: "Please Enter Your Start Location",
					    
					    },
					    from_date:"Please select date of traveling arrival",
					    person_no:"Please select number of person for traveling ",
					}
				});
			});
			jQuery(document).ready(function($) {
				$("#submitform2").validate({
				    rules: {
				        name: {
					        required: true,
					        minlength: 3
				     	},
				        email: {
					        required: true,
					        email: true
					      },
					    mobno : {
					        required: true,
					        minlength: 10,
					        maxlength:10
					    },
					    location : {
					        required: true
					    },
					    from_date : {
					        required: true
					    },
					     person_no: {
				        	required: true
				      	}			
				    },
				    messages: {
					    name: {
					      required: "We need your name to contact you",
					      name: "Your Name should be least 3 character."
					    },
					    email: {
					      required: "We need your email address to contact you",
					      email: "Your email address must be in the format of name@domain.com"
					    },
					    mobno:{
					    	required: "Please enter the phone number",
					    	minlength: "Minimum length is 10 digits"
					    },
					    location: {
					    	required: "We need your location for trip",
					    	location: "Please Enter Your Start Location",
					    
					    },
					    from_date:"Please select date of traveling arrival",
					    person_no:"Please select number of person for traveling ",
					}
				});
			});
			jQuery(document).ready(function($) {
				$("#modalform1").validate({
				    rules: {
				        name: {
					        required: true,
					        minlength: 3
				     	},
				        email: {
					        required: true,
					        email: true
					      },
					    mobno : {
					        required: true,
					        minlength: 10,
					        maxlength:10
					    },
					   		
				    },
				    messages: {
					    name: {
					      required: "We need your name to contact you",
					      name: "Your Name should be least 3 character."
					    },
					    email: {
					      required: "We need your email address to contact you",
					      email: "Your email address must be in the format of name@domain.com"
					    },
					    mobno:{
					    	required: "Please enter the phone number",
					    	minlength: "Minimum length is 10 digits"
					    },
					}
				});
			});
			$(document).ready(function () {
				$("#quote_btn_1").click(function () {
					$('#sightseeing').val($('[id*="package1"]').html());
				});
				$("#quote_btn_2").click(function () {
					$('#sightseeing').val($('[id*="package2"]').html());
				});
				$("#quote_btn_3").click(function () {
					$('#sightseeing').val($('[id*="package3"]').html());
				});
				$("#quote_btn_4").click(function () {
					$('#sightseeing').val($('[id*="package4"]').html());
				});
				$("#quote_btn_5").click(function () {
					$('#sightseeing').val($('[id*="package5"]').html());
				});
				$("#quote_btn_6").click(function () {
					$('#sightseeing').val($('[id*="package6"]').html());
				});
			});
		