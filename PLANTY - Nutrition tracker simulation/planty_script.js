        //Storing row index of tableMyPlate
        let rowIndexMyPlate = 0;

        //Array of sum of allNutrients
        let totalNutrients = [];
        let checkArrayTotal = 0;


        ///////////////////////////////////////////////////////////////////
        //Food's nutritional value 
        //Calories, TotalCarbohydrate, LinoleicAcid, AlphaLinoleicAcid, Protein, DietaryFiber, VitA, VitD, VitE, VitK, VitC, VitB1, VitB2, VitB3
        //VitB5, VitB6, VitB9, VitB12, Ca, Cu, Fe, Mg, Mn, P, Se, Zn, K, Na
        const grainsArray = [ ["Oats, raw", [389, 66.27, 2.424, 0.111, 16.89, 10.6, 0, 0, 0, 0, 0, 0.763, 0.139, 0.961, 1.349, 0.119, 56, 0, 54, 626, 4.72, 177, 4.916, 523, 0, 3.97, 0.429, 0.002]],
         ["Rice, raw", [362, 76.17, 0.918, 0.041, 7.50, 3.4, 0, 0, 0, 0, 0, 0.413, 0.043, 4.308, 1.493, 0.509, 20, 0, 33, 277, 1.80, 143, 3.743, 264, 0, 2.02, 0.268, 0.004]],
         ["Quinoa, raw", [368, 64.16, 2.977, 0.260, 14.12, 7, 8.4, 0, 2.44, 0, 0, 0.360, 0.318, 1.520, 0.772, 0.487, 184, 0, 47, 590, 4.57, 197, 2.033, 457, 0, 3.10, 0.563, 0.005]] ];
        const vegetablesArray = [ ["Broccoli, raw", [34, 6.64, 0.049, 0.063, 2.82, 2.6, 373.8, 0, 0.78, 101.6, 89.2, 0.071, 0.117, 0.639, 0.573, 0.175, 63, 0, 47, 49, 0.73, 21, 0.210, 66, 2.5, 0.41, 0.316, 0.033]],
         ["Carrots, raw", [41, 9.58, 0.100, 0.002, 0.93, 2.8, 10023.6, 0, 0.66, 13.2, 5.9, 0.066, 0.058, 0.983, 0.273, 0.138, 19, 0, 33, 45, 0.30, 12, 0.143, 35, 0.1, 0.24, 0.320, 0.069]],
         ["Potatos, raw, skin", [58, 12.44, 0.032, 0.010, 2.57, 2.5, 0, 0, 0, 0, 11.4, 0.021, 0.038, 1.033, 0.302, 0.239, 17, 0, 30, 423, 3.24, 23, 0.602, 38, 0.3, 0.35, 0.413, 0.010]] ];
        const fruitsArray = [ ["Apples, raw, with skin", [52, 13.81, 0.043, 0.009, 0.26, 2.4, 32.4, 0, 0.18, 2.2, 4.6, 0.017, 0.026, 0.091, 0.061, 0.041, 3, 0, 6, 27, 0.12, 5, 0.035, 11, 0, 0.04, 0.107, 0.001]],
         ["Bananas, raw", [89, 22.84, 0.046, 0.027, 1.09, 2.6, 38.4, 0, 0.10, 0.5, 8.7, 0.031, 0.073, 0.665, 0.334, 0.367, 20, 0, 5, 78, 0.26, 27, 0.270, 22, 1.0, 0.15, 0.358, 0.001]],
         ["Oranges, raw, with peel", [63, 15.50, 0.044, 0.016, 1.30, 4.5, 150, 0, 0, 0, 71, 0.100, 0.050, 0.500, 0.330, 0.093, 30, 0, 70, 57, 0.80, 14, 0, 22, 0.7, 0.11, 0.196, 0.002]] ];
         
        //Daily required macro and micronutrients, depending on age, sex, if pregnant or lactating
        const USERS_NUTRIENT_REQUIRMENTS = {
            "user": {
                "reqTotalCarbohydrate": 0,
                "reqLinoleicAcid": 1,
                "reqAlphaLinoleicAcid": 2,
                "reqProtein": 3,
                "reqDietaryFiber": 4,
                "reqVitA": 5,
                "reqVitD": 6,
                "reqVitE": 7,
                "reqVitK": 8,
                "reqVitC": 9,
                "reqVitB1": 10,
                "reqVitB2": 11,
                "reqVitB3": 12,
                "reqVitB5": 13,
                "reqVitB6": 14,
                "reqVitB9": 15,
                "reqVitB12": 16,
                "reqCa": 17,
                "reqCu": 18,
                "reqFe": 19,
                "reqMg": 20,
                "reqMn": 21,
                "reqP": 22,
                "reqSe": 23,
                "reqZn": 24,
                "reqK": 25,
                "reqNa": 26
            }
        };

        //Creating empty object for user's personal nutrient requirements
        let userNutReq = {}; 
       
        //Checking if the required field are filled and moving to the next div
        function logIn() {
			let name = document.getElementById("inputName").value;
            let email = document.getElementById("inputEmail").value;
            let question = document.getElementById("personalQuestion").innerHTML;
            
			if (name === "" || email === "") {
				document.getElementById("messageFillIn").innerHTML = "Please fill in the required fields.";
            }
            
			else {
                scrollTo(0,0);
                document.getElementById("divLogIn").style.display = "none";
                document.getElementById("divPersonalInfo").style.display = "block";
				document.getElementById("personalGreeting").innerHTML = "HI, " + name.toUpperCase() + "!";
                document.getElementById("personalQuestion").innerHTML = name.toUpperCase() + question;               
			}
        }
        
        //If the user is female, show select box, so she can choose if she is pregnant or lactating
        function showSelect() {
            let sexValue = document.getElementById("selectSex").value;
            
            if (sexValue === "female") {
                document.getElementById("selectPregnantLactating").style.display = "inline-block";
                document.getElementById("pregnantLactating").style.display = "inline-block";
            }

            else {
                document.getElementById("selectPregnantLactating").style.display = "none";
                document.getElementById("pregnantLactating").style.display = "none";
                document.getElementById("selectPregnantLactating").value = "";
            }
        }

        //Calculate and present energy requirements and personalized daily nutrient requirements
		function calculate() {
			let age = document.getElementById("inputAge").value;
            let sex = document.getElementById("selectSex").value;
            let pregnantOrLactating = document.getElementById("selectPregnantLactating").value;
			let height = document.getElementById("inputHeight").value;
            let weight = document.getElementById("inputWeight").value;
            let lifestyle = document.getElementById("selectLifestyle").value;

            //Inicializing activity coeficient (which depend of user's sex) and required calories (which depends of user's age, height, weight, sex, pregnant or lactating and activity)
            let activity = 0;
            let reqCalories = 0;  

            //Checking if the form is filled
			if (age === "" || sex === "") {
				document.getElementById("messageFillIn2").innerHTML = "Please fill in the required fields.";
            }
            
            else if ((height === "" || weight === "") || lifestyle === "") {
				document.getElementById("messageFillIn2").innerHTML = "Please fill in the required fields.";
            }

            else if (age < 18) {
                document.getElementById("messageFillIn2").innerHTML = "This app is not for users under 18 years";    
            }

            else {   
                scrollTo(0,0);         
                document.getElementById("divPersonalInfo").style.display = "none";
                document.getElementById("divDailyRequirement").style.display = "block";

                 //Calculate the activity coefficient used in Estimated Energy Requirements equation or required calories in our case
                if (sex === "male") {
                    switch (lifestyle) {
                        case "sedentary":
                            activity = 1;
                            break;
                        case "littleActive":
                            activity = 1.11;
                            break;
                        case "active":
                            activity = 1.25;
                            break;
                        case "veryActive":
                            activity = 1.48;
                            break;
                    }
                }

                else if (sex === "female") {
                    switch (lifestyle) {
                        case "sedentary":
                            activity = 1;
                            break;
                        case "littleActive":
                            activity = 1.12;
                            break;
                        case "active":
                            activity = 1.27;
                            break;
                        case "veryActive":
                            activity = 1.45;
                            break;
                    }
                }

                //Calculating calories and daily nutrient requirements
                if (sex === "male") {
                    //Calculating required calories
                    reqCalories = 662 - (9.53 * age) + activity * ( (15.91 * weight) + (539.6 * height / 100) );

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

                    if (age <= 50) {
                        reqVitB6 = 1.3;
                        reqDietaryFiber = 38;
                        reqLinoleicAcid = 17;
                    }
                    else {
                        reqVitB6 = 1.7;
                        reqDietaryFiber = 30;
                        reqLinoleicAcid = 14;
                    }

                    if (age > 70) {
                        reqCa = 1200;
                        reqVitD = 20;
                    }
                    else {
                        reqCa = 1000;
                        reqVitD = 15;
                    }
                    
                    if (age <= 30) {
                        reqMg = 400;
                    }
                    else {
                        reqMg = 420;
                    }
                    
                    if (age > 50 && age <= 70) {
                        reqNa = 1.3;
                    }
                    else if (age > 70) {
                        reqNa = 1.2;
                    }
                    else {
                        reqNa = 1.5;
                    }
                }


                //Calculating when user is female
                else if (sex === "female") {
                    reqCalories = 354 - (6.91 * age) + activity * ( (9.36 * weight) + (726 * height / 100) );
                   

                    //Calculating when the user is pregnant or lactating
                    if (pregnantOrLactating !== "") {
                        switch (pregnantOrLactating) {
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

                    if (age > 70) {
                        reqVitD = 20;
                    }
                    else {
                        reqVitD = 15;
                    }
                    
                    if (age > 50) {
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
                    
                    if (age <= 30) {
                        reqMg = 310;
                    }
                    else {
                        reqMg = 320;
                    }
                    
                    if (age > 50 && age <= 70) {
                        reqNa = 1.3;
                    }
                    else if (age > 70) {
                        reqNa = 1.2;
                    }
                    else {
                        reqNa = 1.5;
                    }

                    //Calculating when the user is pregnant or lactating
                    if (pregnantOrLactating !== "") {
                        switch (pregnantOrLactating) {
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

                userNutReq = USERS_NUTRIENT_REQUIRMENTS["user"];
                //Adding calories property to user's object with nutrient requrements
                userNutReq["reqCalories"] = reqCalories.toFixed(0);
                
                //Filling the table "Daily Requirement"
                let tableReq = document.getElementById("tableDailyRequirement");
                let cellId = "";

                for (let rowIndex = 0; rowIndex < tableReq.rows.length; rowIndex++) {
                    if (rowIndex == 6 || rowIndex == 19) {
                    }
                    else {
                        cellId = tableReq.rows.item(rowIndex).cells[1].id;
                        tableReq.rows.item(rowIndex).cells[1].innerHTML = userNutReq[cellId];
                    }
                }
            }
            
		}

        //Going to divQuestion from 
        function next() {
            scrollTo(0,0);
            document.getElementById("divDailyRequirement").style.display = "none";
            document.getElementById("divQuestion").style.display = "block";  
        }

        //Going to divFoodSelection
        function checkMyDay() {
            scrollTo(0,0);
            document.getElementById("divQuestion").style.display = "none";
            document.getElementById("divFoodSelection").style.display = "block";
        }

        //Adding food artical in tableMyPlate if food is chosen in drop down menu
        function addFood(foodCategory) {
            let foodCategoryID = foodCategory.id;
            let foodCategoryValue = document.getElementById(foodCategoryID).value;

            if (foodCategoryValue !== "") {
                document.getElementById("tableMyPlate").style.display = "block";
    
                rowIndexMyPlate++;
                
                let tableFood = document.getElementById("tableMyPlate");
                let rowFood = tableFood.insertRow(rowIndexMyPlate);
                let cellFood1 = rowFood.insertCell(0);
                let cellFood2 = rowFood.insertCell(1);
                let cellFood3 = rowFood.insertCell(2);
                let cellFood4 = rowFood.insertCell(3);
            
                cellFood1.innerHTML = foodCategoryValue;   
        
                let inputCell2 = document.createElement("INPUT");
                inputCell2.className = "inputsMyPlate";
                inputCell2.type = "number";
                inputCell2.name = "quantity";
                inputCell2.value = 100;
                cellFood2.appendChild(inputCell2);

                cellFood3.innerHTML = "g ";
            
                let btnCell4 = document.createElement("BUTTON"); 
                btnCell4.className = "btnDelete"; 
                btnCell4.type = "button";
                btnCell4.addEventListener("click", deleteRow);           
                let textBtn = document.createTextNode("Delete");
                btnCell4.appendChild(textBtn);     
                cellFood4.appendChild(btnCell4);
            }
        }

        //Calculating the sum of nutrients of all food and calling other function for calculating percents of fullfiled daily requirements
        function tracking() {           
            let tableList = document.getElementById("tableMyPlate");
            let rowsLength = tableList.rows.length;
            let foodValue = "";
            let nutrientValue = 0;
            let foodQuantityCell = "";
            let foodQuantity = 0;
            let totalValue = 0;

            if (rowsLength === 1) {
                document.getElementById("messageFillIn3").innerHTML = "Please choose your food.";
            }
            
            else {
                scrollTo(0,0);
                document.getElementById("divFoodSelection").style.display = "none";
                document.getElementById("divNutritionTracker").style.display = "block";
            
                //Checking the food category
                for (let indexRows = 1; indexRows < rowsLength; indexRows++) {
                    foodValue = tableList.rows.item(indexRows).cells[0].innerHTML;
 
                    //Checking if it is a grain
                    for (let arrayIndex = 0; arrayIndex < grainsArray.length; arrayIndex++) {
                        if (grainsArray[arrayIndex][0] === foodValue) {
                            for (let subArrayIndex = 0; subArrayIndex < grainsArray[arrayIndex][1].length; subArrayIndex++) {
                                nutrientValue = grainsArray[arrayIndex][1][subArrayIndex];
                                foodQuantityCell = tableList.rows.item(indexRows).cells[1];
                                foodQuantity = foodQuantityCell.children[0].value;
                                totalValue = nutrientValue * foodQuantity / 100;
                            
                                if (checkArrayTotal === 0) {
                                    totalNutrients.push(totalValue);
                                }
                                else {
                                    totalNutrients[subArrayIndex] += totalValue;
                                }
                            }
                        }
                    }

                    //Checking if it is a vegetable
                    for (let arrayIndex = 0; arrayIndex < vegetablesArray.length; arrayIndex++) {
                        if (vegetablesArray[arrayIndex][0] === foodValue) {
                            for (let subArrayIndex = 0; subArrayIndex < vegetablesArray[arrayIndex][1].length; subArrayIndex++) {
                                nutrientValue = vegetablesArray[arrayIndex][1][subArrayIndex];
                                foodQuantityCell = tableList.rows.item(indexRows).cells[1];
                                foodQuantity = foodQuantityCell.children[0].value;
                                totalValue = nutrientValue * foodQuantity / 100;
                            
                                if (checkArrayTotal === 0) {
                                    totalNutrients.push(totalValue);
                                }
                                else {
                                    totalNutrients[subArrayIndex] += totalValue;
                                }
                            }
                        }
                    }

                    //Cheking if it is a fruit
                    for (let arrayIndex = 0; arrayIndex < fruitsArray.length; arrayIndex++) {
                        if (fruitsArray[arrayIndex][0] === foodValue) {
                            for (let subArrayIndex = 0; subArrayIndex < fruitsArray[arrayIndex][1].length; subArrayIndex++) {
                                nutrientValue = fruitsArray[arrayIndex][1][subArrayIndex];
                                foodQuantityCell = tableList.rows.item(indexRows).cells[1];
                                foodQuantity = foodQuantityCell.children[0].value;
                                totalValue = nutrientValue * foodQuantity / 100;
                            
                                if (checkArrayTotal === 0) {
                                    totalNutrients.push(totalValue);
                                }
                                else {
                                    totalNutrients[subArrayIndex] += totalValue;
                                }
                            }
                        }
                    }




                    checkArrayTotal++;
                }
            
                fillResults();
            }
        }

        //calculating percenting of daily nutrients fullfilment and filling the tables cells
        function fillResults() {
            let tableResults = document.getElementById("tableNutritionTracker");
            let tableRequirements = document.getElementById("tableDailyRequirement");
            let totalNut = 0;
            let requiredNut = 0;
            let percents = 0;
            let rowsResultsLength = tableResults.rows.length;
            let arrayIndex = 0;

            for (let rowRIndex = 0; rowRIndex < rowsResultsLength; rowRIndex++) {
                //the if (rowRIndex !== 6 || rowRIndex !== 19) couldn't solve filling the entire table. It stops at 7th row with collspan
                if (rowRIndex === 6 || rowRIndex === 19) {
                }
                else {
                    totalNut = totalNutrients[arrayIndex];
                    requiredNut = tableRequirements.rows.item(rowRIndex).cells[1].innerHTML;
                    //Multiplaying by 100 because nutrient value is per 100g
                    percents = totalNut / requiredNut * 100;
                    tableResults.rows.item(rowRIndex).cells[1].children[0].innerHTML = percents.toFixed(0) + "%";
                   
                    if (percents >= 100) {
                        tableResults.rows.item(rowRIndex).cells[1].children[0].style.width = "100%";
                        tableResults.rows.item(rowRIndex).cells[1].children[0].style.backgroundColor = "#3be8ba";
                    }
                    else {
                        tableResults.rows.item(rowRIndex).cells[1].children[0].style.width = percents.toFixed(0) + "%";
                        tableResults.rows.item(rowRIndex).cells[1].children[0].style.backgroundColor = "#e83b52";
                    }
                    
                    arrayIndex++;
                }
            }
        }

        //Going back to add more foods on daily food list
        function addMoreFood() {
            scrollTo(0,0);
            document.getElementById("divFoodSelection").style.display = "block";
            document.getElementById("divNutritionTracker").style.display = "none";
            
            //deleting stored values from totalNutrients array
            for (let i = 0; i < 29; i++) {
                totalNutrients.pop();
            }

            checkArrayTotal = 0;
        }
        
        //Delete the row with the artical that the user doesn't need
        function deleteRow() {
            this.closest("tr").remove();

            rowIndexMyPlate--;
        }

