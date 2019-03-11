const url = 'https://entree-f18.herokuapp.com/v1/menu/8';

async function loadMenu(){
   loadApps();
   loadSands();
   loadEntrees();
   loadSides();
   loadDesserts();
}


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