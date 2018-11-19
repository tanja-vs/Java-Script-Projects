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
        
        function showSelect() {
            var sexValue = document.getElementById("selectSex").value;
            
            if (sexValue === "female") {
                document.getElementById("selectPregnantLactating").style.display = "inline-block";
                document.getElementById("pregnantLactating").style.display = "inline-block";
            }

            else {
                document.getElementById("selectPregnantLactating").style.display = "none";
                document.getElementById("pregnantLactating").style.display = "none";
            }
        }

        function calculateActivity() {
            var lifeStyle = document.getElementById("selectLifestyle").value;
            var sex = document.getElementById("selectSex").value;
            var calAct = 0;

            if (sex === "male") {
                switch (lifeStyle) {
                    case "sedentary":
                        calAct = 1;
                        break;
                    case "littleActive":
                        calAct = 1.11;
                        break;
                    case "active":
                        calAct = 1.25;
                        break;
                    case "veryActive":
                        calAct = 1.48;
                        break;
                }
            }

            else if (sex === "female") {
                switch (lifeStyle) {
                    case "sedentary":
                        calAct = 1;
                        break;
                    case "littleActive":
                        calAct = 1.12;
                        break;
                    case "active":
                        calAct = 1.27;
                        break;
                    case "veryActive":
                        calAct = 1.45;
                        break;
                }
            }

            return calAct;
        }

		function calculate() {
			var checkAge = document.getElementById("inputAge").value;
            var checkSex = document.getElementById("selectSex").value;
            var checkPregnantLactating = document.getElementById("selectPregnantLactating").value;
			var checkHeight = document.getElementById("inputHeight").value;
            var checkWeight = document.getElementById("inputWeight").value;
            var checkLifestyle = document.getElementById("selectLifestyle").value;

            var reqCalories = 0;
            var activity = 0;

			if (checkAge === "" || checkSex === "") {
				document.getElementById("messageFillIn2").innerHTML = "Please fill in the required fields.";
            }
            
            else if ((checkHeight === "" || checkWeight === "") || checkLifestyle === "") {
				document.getElementById("messageFillIn2").innerHTML = "Please fill in the required fields.";
            }

            else {            
                document.getElementById("divPersonalInfo").style.display = "none";
                document.getElementById("divDailyRequirement").style.display = "block";

                activity = calculateActivity();

                if (checkSex === "male") {
                    reqCalories = 662 - (9.53 * checkAge) + activity * ( (15.91 * checkWeight) + (539.6 * checkHeight / 100) );
                }
                else if (checkSex === "female") {
                    reqCalories = 354 - (6.91 * checkAge) + activity * ( (9.36 * checkWeight) + (726 * checkHeight / 100) );
                   
                    switch (checkPregnantLactating) {
                        case "":
                        case "pregnant1":
                            reqCalories += 0;
                            break;
                        case "pregnant2":
                            reqCalories += 340;
                            break;
                        case "pregnant3":
                            reqCalories += 452;
                            break;
                        case "lactating1":
                            reqCalories += 330;
                            break;
                        case "lactating2":
                            reqCalories += 400;
                            break;
                    }
                }
                 
                document.getElementById("calories").innerHTML = reqCalories.toFixed(2);
            }
            
		}