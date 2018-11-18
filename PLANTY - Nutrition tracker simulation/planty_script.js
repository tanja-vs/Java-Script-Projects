		function logIn() {
			var checkName = document.getElementById("inputName").value;
            var checkEmail = document.getElementById("inputEmail").value;
            
			if (checkName === "" || checkEmail === "") {
				document.getElementById("messageFillIn").innerHTML = "Please fill in the required fields.";
            }
            
			else {
                document.getElementById("divLogIn").style.display = "none";
                document.getElementById("divPersonalInfo").style.display = "block";
				document.getElementById("personalGreeting").innerHTML = "Hi, " + checkName + "!";
			}
        }
        
        function showCheckbox() {
            var sexValue = document.getElementById("selectSex").value;
            
            if (sexValue === "female") {
                document.getElementById("inputPregnant").style.display = "inline-block";
                document.getElementById("inputLactating").style.display = "inline-block";
                document.getElementById("pregnant").style.display = "inline-block";
                document.getElementById("lactating").style.display = "inline-block";
            }

            else
            {
                document.getElementById("inputPregnant").style.display = "none";
                document.getElementById("inputLactating").style.display = "none";
                document.getElementById("pregnant").style.display = "none";
                document.getElementById("lactating").style.display = "none";
            }
        }

		function calculate() {
			var checkAge = document.getElementById("inputAge").value;
            var checkSex = document.getElementById("selectSex").value;
            var checkPregnant = document.getElementById("inputPregnant").value;
            var checkLactating = document.getElementById("inputLactating").value;
			var checkHeight = document.getElementById("inputHeight").value;
            var checkWeight = document.getElementById("inputWeight").value;
            var checkLifestyle = document.getElementById("selectLifestyle").value;

			if (checkAge === "" || checkSex === "") {
				document.getElementById("messageFillIn2").innerHTML = "Please fill in the required fields.";
            }
            
            else if ((checkHeight === "" || checkWeight === "") || checkLifestyle === "") {
				document.getElementById("messageFillIn2").innerHTML = "Please fill in the required fields.";
            }

            else 
            {
                alert("Go on");
            }
            
		}