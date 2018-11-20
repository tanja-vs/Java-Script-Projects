        //Daily required macro and micronutrients, depending on sex and age
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
        var reqVitC = 0;
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
        
        //On Button "LOG IN" click
        function logIn() {
			var checkName = document.getElementById("inputName").value;
            var checkEmail = document.getElementById("inputEmail").value;
            var question = document.getElementById("personalQuestion").innerHTML;
            
			if (checkName === "" || checkEmail === "") {
				document.getElementById("messageFillIn").innerHTML = "Please fill in the required fields.";
            }
            
			else {
                document.getElementById("divLogIn").style.display = "none";
                document.getElementById("divPersonalInfo").style.display = "block";
				document.getElementById("personalGreeting").innerHTML = "HI, " + checkName.toUpperCase() + "!";
                document.getElementById("personalQuestion").innerHTML = checkName.toUpperCase() + question;               
			}
        }
        
        //If the user is female, show select box, so she can choose if pregnant or lactating
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

        //Calculate the activity coefficient used in Estimated Energy Requirements equation or required calories in our case
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

        //On Button "CALCULATE" click
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

                //Calculating when user is male
                if (checkSex === "male") {
                    //Calculating required calories
                    reqCalories = 662 - (9.53 * checkAge) + activity * ( (15.91 * checkWeight) + (539.6 * checkHeight / 100) );

                    //Calculating required micro and macro nutrients
                    reqTotalCarbohydrate = 130;
                    reqAlphaLinoleicAcid = 1.6;
                    reqProtein = 56;
                    reqVitA = 900;                    
                    reqVitE = 15;
                    reqVitK = 120;
                    reqVitC = 90;
                    reqVitB1 = 1.2;
                    reqVitB2 = 1.3;
                    reqVitB3 = 16;
                    reqVitB5 = 5;
                    reqVitB9 = 400;
                    reqVitB12 = 2.4;
                    reqCu = 900;
                    reqFe = 8;
                    reqMn = 2.3;
                    reqP = 700;
                    reqSe = 55;
                    reqZn = 11;
                    reqK = 4.7;

                    if (checkAge <= 50) {
                        reqVitB6 = 1.3;
                        reqDietaryFiber = 38;
                        reqLinoleicAcid = 17;
                    }
                    else {
                        reqVitB6 = 1.7;
                        reqDietaryFiber = 30;
                        reqLinoleicAcid = 14;
                    }

                    if (checkAge > 70) {
                        reqCa = 1200;
                        reqVitD = 20;
                    }
                    else {
                        reqCa = 1000;
                        reqVitD = 15;
                    }
                    
                    if (checkAge <= 30) {
                        reqMg = 400;
                    }
                    else {
                        reqMg = 420;
                    }
                    
                    if (checkAge > 50 && checkAge <= 70) {
                        reqNa = 1.3;
                    }
                    else if (checkAge > 70) {
                        reqNa = 1.2;
                    }
                    else {
                        reqNa = 1.5;
                    }
                }


                //Calculating when user is female
                else if (checkSex === "female") {
                    reqCalories = 354 - (6.91 * checkAge) + activity * ( (9.36 * checkWeight) + (726 * checkHeight / 100) );
                   

                    //Calculating when the user is pregnant or lactating
                    if (checkPregnantLactating !== "") {
                        switch (checkPregnantLactating) {
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

                    //Calculating required micro and macro nutrients
                    reqTotalCarbohydrate = 130;
                    reqAlphaLinoleicAcid = 1.1;
                    reqProtein = 46;
                    reqVitA = 700;                    
                    reqVitE = 15;
                    reqVitK = 90;
                    reqVitC = 75;
                    reqVitB1 = 1.1;
                    reqVitB2 = 1.1;
                    reqVitB3 = 14;
                    reqVitB5 = 5;
                    reqVitB9 = 400;
                    reqVitB12 = 2.4;
                    reqCu = 900;
                    reqMn = 1.8;
                    reqP = 700;
                    reqSe = 55;
                    reqZn = 8;
                    reqK = 4.7;

                    if (checkAge > 70) {
                        reqVitD = 20;
                    }
                    else {
                        reqVitD = 15;
                    }
                    
                    if (checkAge > 50) {
                        reqCa = 1200;
                        reqFe = 8;
                        reqVitB6 = 1.5;
                        reqLinoleicAcid = 11;
                        reqDietaryFiber = 21;
                    }
                    else {
                        reqCa = 1000;
                        reqFe = 18;
                        reqVitB6 = 1.3;
                        reqLinoleicAcid = 12;
                        reqDietaryFiber = 25;
                    }
                    
                    if (checkAge <= 30) {
                        reqMg = 310;
                    }
                    else {
                        reqMg = 320;
                    }
                    
                    if (checkAge > 50 && checkAge <= 70) {
                        reqNa = 1.3;
                    }
                    else if (checkAge > 70) {
                        reqNa = 1.2;
                    }
                    else {
                        reqNa = 1.5;
                    }

                    //Calculating when the user is pregnant or lactating
                    if (checkPregnantLactating !== "") {
                        switch (checkPregnantLactating) {
                            case "pregnant1":
                            case "pregnant2":
                            case "pregnant3":
                                reqTotalCarbohydrate = 175;
                                reqLinoleicAcid = 13;
                                reqAlphaLinoleicAcid = 1.4;
                                reqProtein = 71;
                                reqDietaryFiber = 28;
                                reqVitA = 770;
                                reqVitC = 85;
                                reqVitB1 = 1.4;
                                reqVitB2 = 1.4;
                                reqVitB3 = 18;
                                reqVitB5 = 6;
                                reqVitB6 = 1.9;
                                reqVitB9 = 600;
                                reqVitB12 = 2.6;
                                reqCu = 1000;
                                reqFe = 27;
                                reqMg = 360;
                                reqMn = 2;
                                reqSe = 60;
                                reqZn = 11;
                                break;
                            case "lactating1":
                            case "lactating2":
                                reqTotalCarbohydrate = 210;
                                reqLinoleicAcid = 13;
                                reqAlphaLinoleicAcid = 1.3;
                                reqProtein = 71;
                                reqDietaryFiber = 29;
                                reqVitA = 1300;
                                reqVitC = 120;
                                reqVitE = 19;
                                reqVitB1 = 1.4;
                                reqVitB2 = 1.6;
                                reqVitB3 = 17;
                                reqVitB5 = 7;
                                reqVitB6 = 2;
                                reqVitB9 = 500;
                                reqVitB12 = 2.8;
                                reqCu = 1300;
                                reqFe = 9;
                                reqMn = 2.6;
                                reqSe = 70;
                                reqZn = 12;
                                reqK = 5.1;
                                break;
                            }
                        }
                }
                
                //Filling the table "Daily Requirement" cells
                document.getElementById("calories").innerHTML = reqCalories.toFixed(2);
                document.getElementById("totalCarbohydrate").innerHTML = reqTotalCarbohydrate;
                document.getElementById("linoleicAcid").innerHTML = reqLinoleicAcid;
                document.getElementById("alfaLinoleicAcid").innerHTML = reqAlphaLinoleicAcid;
                document.getElementById("protein").innerHTML = reqProtein;
                document.getElementById("dietaryFiber").innerHTML = reqDietaryFiber;
                document.getElementById("vitA").innerHTML = reqVitA;
                document.getElementById("vitD").innerHTML = reqVitD;
                document.getElementById("vitE").innerHTML = reqVitE;
                document.getElementById("vitK").innerHTML = reqVitK;
                document.getElementById("vitC").innerHTML = reqVitC;
                document.getElementById("vitB1").innerHTML = reqVitB1;
                document.getElementById("vitB2").innerHTML = reqVitB2;
                document.getElementById("vitB3").innerHTML = reqVitB3;
                document.getElementById("vitB5").innerHTML = reqVitB5;
                document.getElementById("vitB6").innerHTML = reqVitB6;
                document.getElementById("vitB9").innerHTML = reqVitB9;
                document.getElementById("vitB12").innerHTML = reqVitB12;
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

        function next() {
            document.getElementById("divDailyRequirement").style.display = "none";
            document.getElementById("divQuestion").style.display = "block";  
        }

        function checkMyDay() {
            document.getElementById("divQuestion").style.display = "none";
            document.getElementById("divFoodSelection").style.display = "block";  
        }