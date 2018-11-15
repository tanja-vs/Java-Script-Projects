function showResult() {
    var answer = [];
    var resultOne = [];
    var resultTwo = [];
    var resultThree = [];
    var resultFour = [];
    var resultFive = [];
    var resultSix = [];
    var resultSeven = [];
    var checkYes = 0;
    var checkNo = 0;
    var optimalDiet = 0;
    var adviceOne = document.getElementById("adviceOne");
    var adviceTwo = document.getElementById("adviceTwo");
    var adviceThree = document.getElementById("adviceThree");
    var adviceFour = document.getElementById("adviceFour");
    var adviceFive = document.getElementById("adviceFive");
    var adviceSix = document.getElementById("adviceSix");
    var adviceSeven = document.getElementById("adviceSeven");

    var result = document.getElementById("result");

    if (document.getElementById("q11").checked) {
        answer.push(document.getElementById("q11").value);
        resultOne.push(document.getElementById("q11").value);
    }
    
    if (document.getElementById("q12").checked) {
        answer.push(document.getElementById("q12").value);
        resultOne.push(document.getElementById("q12").value);
    }

    if (document.getElementById("q21").checked) {
        answer.push(document.getElementById("q21").value);
        resultOne.push(document.getElementById("q21").value);
    }
    
    if (document.getElementById("q22").checked) {
        answer.push(document.getElementById("q22").value);
        resultOne.push(document.getElementById("q22").value);
    }
    
    if (document.getElementById("q31").checked) {
        answer.push(document.getElementById("q31").value);
        resultOne.push(document.getElementById("q31").value);
    }
    
    if (document.getElementById("q32").checked) {
        answer.push(document.getElementById("q32").value);
        resultOne.push(document.getElementById("q32").value);
    }
    
    if (document.getElementById("q41").checked) {
        answer.push(document.getElementById("q41").value);
        resultOne.push(document.getElementById("q41").value);
    }
    
    if (document.getElementById("q42").checked) {
        answer.push(document.getElementById("q42").value);
        resultOne.push(document.getElementById("q42").value);
    }
    
    if (document.getElementById("q51").checked) {
        answer.push(document.getElementById("q51").value);
        resultTwo.push(document.getElementById("q51").value);
    }
    
    if (document.getElementById("q52").checked) {
        answer.push(document.getElementById("q52").value);
        resultTwo.push(document.getElementById("q52").value);
    }
    
    if (document.getElementById("q61").checked) {
        answer.push(document.getElementById("q61").value);
        resultTwo.push(document.getElementById("q61").value);
    }
    
    if (document.getElementById("q62").checked) {
        answer.push(document.getElementById("q62").value);
        resultTwo.push(document.getElementById("q62").value);
    }
    
    if (document.getElementById("q71").checked) {
        answer.push(document.getElementById("q71").value);
        resultTwo.push(document.getElementById("q71").value);
    }
    
    if (document.getElementById("q72").checked) {
        answer.push(document.getElementById("q72").value);
        resultTwo.push(document.getElementById("q72").value);
    }
    
    if (document.getElementById("q81").checked) {
        answer.push(document.getElementById("q81").value);
        resultThree.push(document.getElementById("q81").value);
    }
    
    if (document.getElementById("q82").checked) {
        answer.push(document.getElementById("q82").value);
        resultThree.push(document.getElementById("q82").value);
    }
    
    if (document.getElementById("q91").checked) {
        answer.push(document.getElementById("q91").value);
        resultThree.push(document.getElementById("q91").value);
    }
    
    if (document.getElementById("q92").checked) {
        answer.push(document.getElementById("q92").value);
        resultThree.push(document.getElementById("q92").value);
    }
    
    if (document.getElementById("q101").checked) {
        answer.push(document.getElementById("q101").value);
        resultThree.push(document.getElementById("q101").value);
    }
    
    if (document.getElementById("q102").checked) {
        answer.push(document.getElementById("q102").value);
        resultThree.push(document.getElementById("q102").value);
    }
    
    if (document.getElementById("q111").checked) {
        answer.push(document.getElementById("q111").value);
        resultThree.push(document.getElementById("q111").value);
    }
    
    if (document.getElementById("q112").checked) {
        answer.push(document.getElementById("q112").value);
        resultThree.push(document.getElementById("q112").value);
    }
        
    if (document.getElementById("q131").checked) {
        answer.push(document.getElementById("q131").value);
        resultFour.push(document.getElementById("q131").value);
    }
    
    if (document.getElementById("q132").checked) {
        answer.push(document.getElementById("q132").value);
        resultFour.push(document.getElementById("q132").value);
    }
    
    if (document.getElementById("q141").checked) {
        answer.push(document.getElementById("q141").value);
        resultFour.push(document.getElementById("q141").value);
    }
    
    if (document.getElementById("q142").checked) {
        answer.push(document.getElementById("q142").value);
        resultFour.push(document.getElementById("q142").value);
    }
    
    if (document.getElementById("q151").checked) {
        answer.push(document.getElementById("q151").value);
        resultFour.push(document.getElementById("q151").value);
    }
    
    if (document.getElementById("q152").checked) {
        answer.push(document.getElementById("q152").value);
        resultFour.push(document.getElementById("q152").value);
    }
    
    if (document.getElementById("q161").checked) {
        answer.push(document.getElementById("q161").value);
        resultFour.push(document.getElementById("q161").value);
    }
    
    if (document.getElementById("q162").checked) {
        answer.push(document.getElementById("q162").value);
        resultFour.push(document.getElementById("q162").value);
    }
    
    if (document.getElementById("q171").checked) {
        answer.push(document.getElementById("q171").value);
        resultFive.push(document.getElementById("q171").value);
    }
    
    if (document.getElementById("q172").checked) {
        answer.push(document.getElementById("q172").value);
        resultFive.push(document.getElementById("q172").value);
    }
    
    if (document.getElementById("q181").checked) {
        answer.push(document.getElementById("q181").value);
        resultFive.push(document.getElementById("q181").value);
    }
    
    if (document.getElementById("q182").checked) {
        answer.push(document.getElementById("q182").value);
        resultFive.push(document.getElementById("q182").value);
    }
    
    if (document.getElementById("q191").checked) {
        answer.push(document.getElementById("q191").value);
        resultFive.push(document.getElementById("q191").value);
    }

    if (document.getElementById("q192").checked) {
        answer.push(document.getElementById("q192").value);
        resultFive.push(document.getElementById("q192").value);
    }
    
    if (document.getElementById("q201").checked) {
        answer.push(document.getElementById("q201").value);
        resultFive.push(document.getElementById("q201").value);
    }
    
    if (document.getElementById("q202").checked) {
        answer.push(document.getElementById("q202").value);
        resultFive.push(document.getElementById("q202").value);
    }
    
    if (document.getElementById("q211").checked) {
        answer.push(document.getElementById("q211").value);
        resultSix.push(document.getElementById("q211").value);
    }
    
    if (document.getElementById("q212").checked) {
        answer.push(document.getElementById("q212").value);
        resultSix.push(document.getElementById("q212").value);
    }

    if (document.getElementById("q221").checked) {
        answer.push(document.getElementById("q221").value);
        resultSix.push(document.getElementById("q221").value);
    }

    if (document.getElementById("q222").checked) {
        answer.push(document.getElementById("q222").value);
        resultSix.push(document.getElementById("q222").value);
    }

    if (document.getElementById("q231").checked) {
        answer.push(document.getElementById("q231").value);
        resultSix.push(document.getElementById("q231").value);
    }
    
    if (document.getElementById("q232").checked) {
        answer.push(document.getElementById("q232").value);
        resultSix.push(document.getElementById("q232").value);
    }
    
    if (document.getElementById("q241").checked) {
        answer.push(document.getElementById("q241").value);
        resultSix.push(document.getElementById("q241").value);
    }
    
    if (document.getElementById("q242").checked) {
        answer.push(document.getElementById("q242").value);
        resultSix.push(document.getElementById("q242").value);
    }

    if (document.getElementById("q251").checked) {
        answer.push(document.getElementById("q251").value);
        resultSix.push(document.getElementById("q251").value);
    }

    if (document.getElementById("q252").checked) {
        answer.push(document.getElementById("q252").value);
        resultSix.push(document.getElementById("q252").value);
    }    

    if (document.getElementById("q261").checked) {
        answer.push(document.getElementById("q261").value);
        resultSix.push(document.getElementById("q261").value);
    }

    if (document.getElementById("q262").checked) {
        answer.push(document.getElementById("q262").value);
        resultSix.push(document.getElementById("q262").value);
    }
    
    if (document.getElementById("q271").checked) {
        answer.push(document.getElementById("q271").value);
        resultSeven.push(document.getElementById("q271").value);
    }
    
    if (document.getElementById("q272").checked) {
        answer.push(document.getElementById("q272").value);
        resultSeven.push(document.getElementById("q272").value);
    }

    if (document.getElementById("q281").checked) {
        answer.push(document.getElementById("q281").value);
        resultSeven.push(document.getElementById("q281").value);
    }

    if (document.getElementById("q282").checked) {
        answer.push(document.getElementById("q282").value);
        resultSeven.push(document.getElementById("q282").value);
    }

    if (document.getElementById("q291").checked) {
        answer.push(document.getElementById("q291").value);
        resultSeven.push(document.getElementById("q291").value);
    }

    if (document.getElementById("q292").checked) {
        answer.push(document.getElementById("q292").value);
        resultSeven.push(document.getElementById("q292").value);
    }
    
    if (document.getElementById("q301").checked) {
        answer.push(document.getElementById("q301").value);
        resultSeven.push(document.getElementById("q301").value);
    }
    
    if (document.getElementById("q302").checked) {
        answer.push(document.getElementById("q302").value);
        resultSeven.push(document.getElementById("q302").value);
    }

    if(answer.length < 29) {
        document.getElementById("message").innerHTML = "Please answer all the questions.";
    }

    else if (answer.length === 29) {
        document.getElementById("divForm").style.display = "none";
        document.getElementById("divResult").style.display = "block";
        
        checkYes = 0;
        checkNo = 0;

        for (var indexOne = 0; indexOne < resultOne.length; indexOne++) {
            if (resultOne[indexOne] === "yes") {
                checkYes++;
            }
            else if (resultOne[indexOne] === "no") {
                checkNo++;
            }
        }
            
            if (checkYes >= checkNo) {
                document.getElementById("headlineAdvice").style.display = "block";
                adviceOne.innerHTML = "It's not necessarily bad for you to skip meals and replace them with snacks, as long as the snacks you eat provide sufficient nutrients to replace those of a complete meal. Many people, particularly those who do lots of physical activity, snack throughout the day to maintain their energy levels."
                + " Skipping meals on a regular basis, particularly breakfast, disturbs the body's metabolism and can affect the way that you feel in a variety of different ways. It can also make it more difficult for you if you are trying to lose weight. Try to establish a regular eating pattern with no longer than 3 or 4 hours between meals and snacks.";
            }
            else {
                optimalDiet++;
            }

        checkYes = 0;
        checkNo = 0;

        for (var indexTwo = 0; indexTwo < resultTwo.length; indexTwo++) {
            if (resultTwo[indexTwo] === "yes") {
                checkYes++;
            }
            else if (resultTwo[indexTwo] === "no") {
                checkNo++;
            }
        }
            
            if (checkNo >= checkYes) {
                document.getElementById("headlineAdvice").style.display = "block";
                adviceTwo.innerHTML = "Aim to eat at least 5 portions of fruit and vegetables every day."
                + " They provide a variety of different vitamins and minerals, as well as being a good source of fibre.";
                document.getElementById("ulTwo").style.display = "block";
                document.getElementById("listTwoOne").innerHTML = "Fresh, frozen, canned and dried fruit or vegetables and fruit or vegetable juices, all count.";
                document.getElementById("listTwoTwo").innerHTML = "A portion is about 80g.";
                document.getElementById("listTwoThree").innerHTML = "Enjoy fruit and vegetables with meals and/or as snacks.";
                document.getElementById("listTwoFour").innerHTML = "Watch out for sugar or syrup in some canned fruits and vegetables, and for salt in some canned vegetables.";
                document.getElementById("listTwoFive").innerHTML = "Fruit juice counts as only 1 portion a day, however much you drink.";
                document.getElementById("listTwoSix").innerHTML = "Beans and pulses count as only 1 portion a day, however much you eat.";
                document.getElementById("listTwoSeven").innerHTML = "Try to include lots of different varieties of fruit and vegetables.";
                document.getElementById("listTwoEight").innerHTML = "Try to avoid adding fat or rich sauces to vegetables.";
            }
            else {
                optimalDiet++;
            }

        checkYes = 0;
        checkNo = 0;

        for (var indexThree = 0; indexThree < resultThree.length; indexThree++) {
            if (resultThree[indexThree] === "yes") {
                checkYes++;
            }
            else if (resultThree[indexThree] === "no") {
                checkNo++;
            }
        }
            
            if (checkNo >= checkYes) {
                document.getElementById("headlineAdvice").style.display = "block";
                adviceThree.innerHTML = "Most people would benefit from eating less saturated fat. This is the type of fat found in many common foods including meat and dairy products and in many processed foods. Eating too much fat in general may contribute to weight gain, and too much saturated fat can contribute towards coronary heart disease."
                + " Foods containing fat should be eaten in moderate amounts:";
                document.getElementById("ulThree").style.display = "block";
                document.getElementById("listThreeOne").innerHTML = "Choose lower-fat and/or leaner versions whenever you can. 'Lower-fat versions' means things like meat with the fat cut off, poultry without the skin, and fish without batter.";
                document.getElementById("listThreeTwo").innerHTML = "Avoid frying foods and instead opt for grilled, baked, boiled, steamed, dry-fried or microwaved choices.";
                document.getElementById("listThreeThree").innerHTML = "Replacing some saturated fats with monounsaturated fats and polyunsaturated fats will help to improve the ratio of 'protective' cholesterol to 'harmful' cholesterol in your blood.";
                document.getElementById("listThreeFour").innerHTML = "Eating oily fish regularly can help reduce the risk of coronary heart disease.";
                document.getElementById("listThreeFive").innerHTML = "Beans and pulses are good alternatives to meat as they are naturally very low in fat.";               
            }
            else {
                optimalDiet++;
            }

        checkYes = 0;
        checkNo = 0;

        for (var indexFour = 0; indexFour < resultFour.length; indexFour++) {
            if (resultFour[indexFour] === "yes") {
                checkYes++;
            }
            else if (resultFour[indexFour] === "no") {
                checkNo++;
            }
        }
            
            if (checkNo >= checkYes) {
                document.getElementById("headlineAdvice").style.display = "block";
                adviceFour.innerHTML = "Aim to base all meals on a good-sized serving from starchy food, choosing wholegrain types when you can.";
                document.getElementById("ulFour").style.display = "block";
                document.getElementById("listFourOne").innerHTML = "Starchy foods contain carbohydrate mainly in the form of starch, which provides energy. They also contain some protein, minerals, vitamins and fibre.";
                document.getElementById("listFourTwo").innerHTML = "Fibre helps the digestive system function properly, preventing bowel disorders such as constipation.";
                document.getElementById("listFourThree").innerHTML = "Try to avoid frying foods in this food group (eg, chips), or adding too much fat (eg, spreading butter on bread), or adding rich sauces or dressings (eg, cheese sauce on pasta).";
            }
            else {
                optimalDiet++;
            }

        checkYes = 0;
        checkNo = 0;

        for (var indexFive = 0; indexFive < resultFive.length; indexFive++) {
            if (resultFive[indexFive] === "yes") {
                checkYes++;
            }
            else if (resultFive[indexFive] === "no") {
                checkNo++;
            }
        }
            
            if (checkYes >= checkNo) {
                document.getElementById("headlineAdvice").style.display = "block";
                adviceFive.innerHTML = "Foods high in added sugar include soft drinks, sweets, jams, cake, puddings, biscuits, pastries and ice-cream. If you eat foods and drinks containing sugar, eat them mainly at mealtimes rather than in between meals, to reduce the risk of tooth decay."
                + " Sugar can count for a lot of additional calories during the day, especially if you add sugar to every drink.";
            }
            else {
                optimalDiet++;
            }

        checkYes = 0;
        checkNo = 0;

        for (var indexSix = 0; indexSix < resultSix.length; indexSix++) {
            if (resultSix[indexSix] === "yes") {
                checkYes++;
            }
            else if (resultSix[indexSix] === "no") {
                checkNo++;
            }
        }
            
            if (checkYes >= checkNo) {
                document.getElementById("headlineAdvice").style.display = "block";
                adviceSix.innerHTML = "Reducing the amount of salt in your diet can help keep your blood pressure down, especially if this is part of a healthy diet that includes plenty of fruit and vegetables. Reducing your blood pressure reduces the risk of developing heart disease and stroke, even if your blood pressure is already within the normal range.";
            }
            else {
                optimalDiet++;
            }

        checkYes = 0;
        checkNo = 0;

        for (var indexSeven = 0; indexSeven < resultSeven.length; indexSeven++) {
            if (resultSeven[indexSeven] === "yes") {
                checkYes++;
            }
            else if (resultSeven[indexSeven] === "no") {
                checkNo++;
            }
        }
            
            if (checkNo >= checkYes) {
                document.getElementById("headlineAdvice").style.display = "block";
                adviceSeven.innerHTML = "You should drink about 1.2 litres (6 to 8 glasses) of fluid every day to stop you getting dehydrated."
                + " Too much alcohol can damage the heart muscle, increase blood pressure and lead to weight gain. However, moderate drinking — between 1 and 2 units a day — may help protect the heart in men aged over 40 and women who have gone through the menopause.";
            }
            else {
                optimalDiet++;
            }

            if (optimalDiet === 7) {
                document.getElementById("headlineOptimalDiet").style.display = "block";
            }
    }
    
}