            var tableItems = document.getElementById("itemsTable");
            var row = 0;
            var items = [[1.5, "Apples", 1.1], [3, "Potatoes", 0.8], [1, "Shampoo", 10], [1, "Toothpaste", 2]];
            var total = 0;
            var memory = 0;

            insertRowsAndColumns();
            calculateTotal();

            //Inserting new rows for every array element and filing cells with every array subelement
            function insertRowsAndColumns() {
                for (var index = 0; index < items.length; index++) {
                    row = tableItems.insertRow(index + 1); 

                    for (var indexCell = 0; indexCell < 3; indexCell++) {
                        row.insertCell(indexCell);
                        tableItems.rows.item(index + 1).cells[indexCell].innerHTML = items[index][indexCell];                    
                    }

                    row.insertCell(3);

                    tableItems.rows.item(index + 1).cells[3].innerHTML = (items[index][0] * items[index][2]).toFixed(2);
                
                    memory = items.length;
                }
            }

            //Calculating the total price of the shopping list
            function calculateTotal() {
                total = 0;

                for (var index = 0; index < items.length; index++) {
                    total += items[index][0] * items[index][2];
                }

                document.getElementById("totalData").innerHTML = total.toFixed(2);
            }

            //Adding new array element and inserting new row and cells for it
            function addNewItem() {
                var itemQty = document.getElementById("quantity").value;
                var itemDescription = document.getElementById("description").value;
                var itemRate = document.getElementById("rate").value;
                
                //Adding new array element
                items.push([itemQty, itemDescription, itemRate]);

                //Inserting new rows and cells in it, for every array subelement
                row = tableItems.insertRow(memory + 1);

                for (var indexCell = 0; indexCell < 3; indexCell++) {
                    row.insertCell(indexCell);
                    tableItems.rows.item(memory + 1).cells[indexCell].innerHTML = items[memory][indexCell];                    
                }

                row.insertCell(3);
                tableItems.rows.item(memory + 1).cells[3].innerHTML = (items[memory][0] * items[memory][2]).toFixed(2);

                //Calculating the total price of the shopping list
                calculateTotal();
                
                memory = items.length;   
            }

            function deleteLastItem() {
                document.getElementById("itemsTable").deleteRow(memory);
                items.pop();
                memory = items.length;

                //Calculating the total price of the shopping list
                calculateTotal();
            }

            function deleteAllItems() {
                while (memory !== 0) {
                    deleteLastItem();
                }
            }