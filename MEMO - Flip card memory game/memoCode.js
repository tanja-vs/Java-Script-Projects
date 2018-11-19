            var flipedCards = 0;
            var end = 0;
            var frontMemory1;
            var frontMemory2;
            var backMemory1;
            var backMemory2;
            var cardColor1;
            var cardColor2;

            var colorsArray = ["#2e2ee6", "#e62ee6", "#2ee6e6", "#e6e62e", "#008080", "#ff6600", "#2e2ee6", "#e62ee6", "#2ee6e6", "#e6e62e", "#008080", "#ff6600", "#2e2ee6", "#e62ee6", "#2ee6e6", "#e6e62e", "#008080", "#ff6600", "#2e2ee6", "#e62ee6", "#2ee6e6", "#e6e62e", "#008080", "#ff6600"];

            var cardsArray = ["card1", "card2", "card3", "card4", "card5", "card6", "card7", "card8", "card9", "card10", "card11", "card12", "card13", "card14", "card15", "card16", "card17", "card18", "card19", "card20", "card21", "card22", "card23", "card24"];

            var cardsArrayBack = ["card101", "card102", "card103", "card104", "card105", "card106", "card107", "card108", "card109", "card110", "card111", "card112", "card113", "card114", "card115", "card116", "card117", "card118", "card119", "card120", "card121", "card122", "card123", "card124"];

            startAgain();
            
            function startAgain() {
                flipedCards = 0;
                end = 0;
                frontMemory1 = undefined;
                frontMemory2 = undefined;
                backMemory1 = undefined;
                backMemory2 = undefined;
                cardColor1 = undefined;
                cardColor2 = undefined;
                document.getElementById("congratulations").style.display = "none";
              
                for(var i = 0; i < 24; i++) {
                    document.getElementById(cardsArray[i]).style.display = "inline-block";
                    document.getElementById(cardsArray[i]).style.zIndex = 10;
                    document.getElementById(cardsArrayBack[i]).style.display = "inline-block";
                    document.getElementById(cardsArrayBack[i]).style.zIndex = 20;
                }
                           
               shuffle(colorsArray);
            
              //Color the front side of the cards
              for(var i = 0; i < 24; i++) {
                document.getElementById(cardsArray[i]).style.backgroundColor = colorsArray[i];
              }
            }            
           
            //Shufle the color array
            function shuffle(arr) {
                var num = arr.length;
                var temp;
                var index;

                while (num > 0) {
                    index = Math.floor(Math.random() * num);          
                    num--;
                    // Swap the last element with it
                    temp = arr[num];
                    arr[num] = arr[index];
                    arr[index] = temp;
                }           
                
                return arr;
            }

            function flipIt(backCard, frontCard) {
                document.getElementById(frontCard).style.zIndex = 30;

                if (flipedCards == 0) {
                    flipedCards++;
                    frontMemory1 = frontCard;
                    backMemory1 = backCard;
                    return;
                }

                else if (flipedCards == 1) {
                    frontMemory2 = frontCard;
                    backMemory2 = backCard;
                    cardColor1 = document.getElementById(frontMemory1).style.backgroundColor;
                    cardColor2 = document.getElementById(frontMemory2).style.backgroundColor;
                    
                    if (cardColor1 == cardColor2) {
                        document.getElementById(frontMemory1).style.display = "none";
                        document.getElementById(frontMemory2).style.display = "none";
                        document.getElementById(backMemory1).style.display = "none";
                        document.getElementById(backMemory2).style.display = "none";

                        frontMemory1 = undefined;
                        frontMemory1 = undefined;
                        backMemory1 = undefined;
                        backMemory2 = undefined;
                        flipedCards = 0;
                      
                      for(var i = 0; i < 24; i++) {
                        var checkDispayFront =             document.getElementById(cardsArray[i]).style.display;
                        var checkDisplayBack =
                    document.getElementById(cardsArrayBack[i]).style.display;
                        if (checkDispayFront == "none" && checkDisplayBack == "none") {
                          end++;
                        }
                }
                      if (end == 24) {
                        document.getElementById("congratulations").style.display = "block";
                      }
                      end = 0;
                    }

                    else {
                        flipedCards++;
                    }

                    return;
                }

                else if (flipedCards == 2) {
                    document.getElementById(frontMemory1).style.zIndex = 10;
                    document.getElementById(frontMemory2).style.zIndex = 10;
                    flipedCards = 1;
                    frontMemory1 = frontCard;
                    backMemory1 = backCard;
                    frontMemory2 = undefined;
                    backMemory2 = undefined;
                }
              
            }
            
    