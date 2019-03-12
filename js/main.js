const url = 'https://entree-f18.herokuapp.com/v1/menu/8';
//Set the main function to load all on load of page.
//Each individual menu section will have a separate API call. 
async function loadMenu(){
   //loadApps()
   loadMenuItems(8, "collap1");
   //loadSand()
   loadMenuItems(8, "collap2");
   //loadEntrees()
   loadMenuItems(8, "collap3");
   //loadSides()
   loadMenuItems(8, "collap4");
   //loadDesserts()
   loadMenuItems(8, "collap5");
}

//Function will run based on the above parameters. 
//Function will both build the card divs as well as fill with the menu items.  
async function loadMenuItems(num, whereTo) {
    var app = "";
    var uri = url + num;
        var output = await fetch(uri).then(function (response) {
            return response.json();
        })
        .then(function (myJson) {
            // app will add an open div with class.
            // then it will generate an id specific to the item 
            // Then the closing divs are added after the pulled information
            for (var i = 0; i < myJson.menu_items.length; i++) {
                app += "<div class='card bg-dark text-success' id='item-" + i + "'><div class='card-body'>";
                app += myJson.menu_items[i].description + "</div></div>";
            }
            console.log(output);
            document.getElementById(whereTo).innerHTML = app;
        });
 
 }