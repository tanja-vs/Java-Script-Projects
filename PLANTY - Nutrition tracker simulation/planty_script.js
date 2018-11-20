        var reqCalories = 0;
        var reqTotalCarbohydrate = 0;
        var reqLinoleicAcid = 0;
        var reqAlphaLinoleicAcid = 0;
        var reqProtein = 0;
        var reqDietaryFiber = 0;
        var reqVitA = 0;
        var reqVitD = 0;
        var reqVitE = 0;
        var reqVitK = 0;
        var reqVitB1 = 0;
        var reqVitB2 = 0;
        var reqVitB3 = 0;
        var reqVitB5 = 0;
        var reqVitB6 = 0;
        var reqVitB9 = 0;
        var reqVitB12 = 0;
        var reqCa = 0;
        var reqCu = 0;
        var reqFe = 0;
        var reqMg = 0;
        var reqMn = 0;
        var reqP = 0;
        var reqSe = 0;
        var reqZn = 0;
        var reqK = 0;
        var reqNa = 0;
        
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

                    if (checkAge > 70) {
                        reqCa = 1200;
                    }
                    else {
                        reqCa = 1000;
                    }
                    
                    reqCu = 900;
                    reqFe = 8;

                    if (checkAge < 31) {
                        reqMg = 400;
                    }
                    else {
                        reqMg = 420;
                    }
                    
                    reqMn = 2.3;
                    reqP = 700;
                    reqSe = 55;
                    reqZn = 11;
                    reqK = 4.7;

                    if (checkAge > 30 && checkAge <= 70) {
                        reqNa = 1.3;
                    }
                    else if (checkAge > 70) {
                        reqNa = 1.2;
                    }
                    else {
                        reqNa = 1.5;
                    }
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
                    
                    if (checkAge > 50) {
                        reqCa = 1200;
                        reqFe = 8;
                    }
                    else {
                        reqCa = 1000;
                        reqFe = 18;
                    }
                    
                    reqCu = 900;
                    
                    if (checkAge <= 30) {
                        reqMg = 310;
                    }
                    else {
                        reqMg = 320;
                    }
                    
                    reqMn = 1.8;
                    reqP = 700;
                    reqSe = 55;
                    reqZn = 8;
                    reqK = 4.7;

                    if (checkAge > 30 && checkAge <= 70) {
                        reqNa = 1.3;
                    }
                    else if (checkAge > 70) {
                        reqNa = 1.2;
                    }
                    else {
                        reqNa = 1.5;
                    }

                }
                 
                document.getElementById("calories").innerHTML = reqCalories.toFixed(2);

                document.getElementById("calcium").innerHTML = reqCa;
                document.getElementById("copper").innerHTML = reqCu;
                document.getElementById("iron").innerHTML = reqFe;
                document.getElementById("magnesium").innerHTML = reqMg;
                document.getElementById("manganese").innerHTML = reqMn;
                document.getElementById("phosphorus").innerHTML = reqP;
                document.getElementById("selenium").innerHTML = reqSe;
                document.getElementById("zinc").innerHTML = reqZn;
                document.getElementById("potassium").innerHTML = reqK;
                document.getElementById("sodium").innerHTML = reqNa;
            }
            
		}