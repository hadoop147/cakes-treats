				/*aFunction a displays an alert message when page loads and bFunction informs the user that their message has benn submitted*/
				
				function aFunction(){
					alert("Please enter your details in the form.");
				}
				function bFunction(){
					alert("Thanks.\nYour message has been submitted.");
				}
				/*timeFunction shows the current time on the page. Code is from w3schools.com*/
				var myVar = setInterval(myTimer, 1000);
				
				function myTimer() {
					var d = new Date();
					document.getElementById("time").innerHTML = d.toLocaleTimeString();
				}
				//confirmation box for website t&c's
				function tcFunction(){
					confirm("By using our website, you are agreeing to our T&C's.\nDo you agree?");
				}
				