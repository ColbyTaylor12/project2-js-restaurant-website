const url = 'https://entree-f18.herokuapp.com/v1/menu/8';
//Set the main function to load all on load of page.
//Each individual menu section will have a separate API call. 
async function loadMenu(){
   loadApps();
   loadSands();
   loadEntrees();
   loadSides();
   loadDesserts();
}

//Api call for appetizers to load items and create the div cards. 
async function loadApps() {
   var app = "";

   for (var i = 0; i < 8; i++) {
       app = app + "<div class='card' id='item-'" + i + "><div class='card-body'>";
       var output = await fetch(url).then(function (response) {
           return response.json();
       })
           .then(function (myJson) {
               console.log(JSON.stringify(myJson.menu_items[0].description));
               app = app + JSON.stringify(myJson.menu_items[0].description) + "</div></div>";

           });
       console.log(output);
       document.getElementById("collap1").innerHTML = app;
   }
}
//Api call for sandwiches to load items and create the div cards.
async function loadSands() {
   var app = "";

   for (var i = 0; i < 8; i++) {
       app = app + "<div class='card' id='item-'" + i + "><div class='card-body'>";
       var output = await fetch(url).then(function (response) {
           return response.json();
       })
           .then(function (myJson) {
               console.log(JSON.stringify(myJson.menu_items[0].description));
               app = app + JSON.stringify(myJson.menu_items[0].description) + "</div></div>";

           });
       console.log(output);
       document.getElementById('collap2').innerHTML = app;
   }
}
//Api call for entrees to load items and create the div cards.
async function loadEntrees() {
   var app = "";

   for (var i = 0; i < 8; i++) {
       app = app + "<div class='card' id='item-'" + i + "><div class='card-body'>";
       var output = await fetch(url).then(function (response) {
           return response.json();
       })
           .then(function (myJson) {
               console.log(JSON.stringify(myJson.menu_items[0].description));
               app = app + JSON.stringify(myJson.menu_items[0].description) + "</div></div>";

           });
       console.log(output);
       document.getElementById('collap3').innerHTML = app;
   }
}
//Api call for sides to load items and create the div cards.
async function loadSides() {
   var app = "";

   for (var i = 0; i < 8; i++) {
       app = app + "<div class='card' id='item-'" + i + "><div class='card-body'>";
       var output = await fetch(url).then(function (response) {
           return response.json();
       })
           .then(function (myJson) {
               console.log(JSON.stringify(myJson.menu_items[0].description));
               app = app + JSON.stringify(myJson.menu_items[0].description) + "</div></div>";

           });
       console.log(output);
       document.getElementById('collap4').innerHTML = app;
   }
}
//Api call for desserts to load items and create the div cards.
async function loadDesserts() {
    var app = "";
 
    for (var i = 0; i < 8; i++) {
        app = app + "<div class='card' id='item-'" + i + "><div class='card-body'>";
        var output = await fetch(url).then(function (response) {
            return response.json();
        })
            .then(function (myJson) {
                console.log(JSON.stringify(myJson.menu_items[0].description));
                app = app + JSON.stringify(myJson.menu_items[0].description) + "</div></div>";
 
            });
        console.log(output);
        document.getElementById('collap5').innerHTML = app;
    }
 }