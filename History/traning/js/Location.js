//Start Creat Api Map
require([
  "esri/views/MapView",
  "esri/Map",
  "esri/layers/FeatureLayer",
  "esri/widgets/Search",
  "esri/widgets/BasemapToggle",
], function (MapView, Map, FeatureLayer, Search, BasemapToggle) {
  var myPopup = {
    title: `{Name} فى {city}`,
  };

  var myLayer = new FeatureLayer({
    url: "http://localhost:6080/arcgis/rest/services/History/Sgites/MapServer",
    popupTemplate: myPopup,
  });

  var myMap = new Map({
    basemap: "streets",
    layers: myLayer,
  });

  var myView = new MapView({
    map: myMap, // References a Map instance
    container: "esri-continer", // References the ID of a DOM element
    center: [32.29, 25.43],
    zoom: 7,
  });

  myView.on("click", function (event) {
    // event is the event handle returned after the event fires.
    myView.goTo(
      {
        center: [event.mapPoint.longitude, event.mapPoint.latitude],
        zoom: 12,
      },
      5000
    );
    console.log(event.mapPoint);
  });
  var searchWidget = new Search({
    view: myView,
  });

  myView.ui.add(searchWidget, {
    position: "bottom-left",
    index: 2,
  });
  var basemapToggle = new BasemapToggle({
    view: myView,
    nextBasemap: "hybrid",
  });
  myView.ui.add(basemapToggle, {
    position: "bottom-left",
    index: 2,
  });
});
//End Creat Api Map
var continer = document.querySelectorAll(".contineer-combo .child");
var continerA = Array.from(continer);
removeAllActive();
function myFunction() {
  var x = document.getElementById("select").selectedIndex;
  var y = document.getElementById("select").options;
  var aswan = document.getElementById("select-aswan");
  var aswanI = document.getElementById("select-aswan").selectedIndex;
  var aswanO = document.getElementById("select-aswan").options;
  var luxor = document.getElementById("select-luxor");
  var luxorI = document.getElementById("select-luxor").selectedIndex;
  var luxorO = document.getElementById("select-luxor").options;
  var asna = document.getElementById("select-asna");
  var asnaI = document.getElementById("select-asna").selectedIndex;
  var asnaO = document.getElementById("select-asna").options;
  var sohag = document.getElementById("select-sohag");
  var sohagI = document.getElementById("select-sohag").selectedIndex;
  var sohagO = document.getElementById("select-sohag").options;
  var buttn2 = document.querySelector(".but");
  console.log(y[x].text);

  //First Choise frome Main Select
  if (y[x].text === "اسوان") {
    aswan.classList.add("active");
    buttn2.classList.add("active");
  } else if (y[x].text === "الاقصر") {
    luxor.classList.add("active");
    buttn2.classList.add("active");
  } else if (y[x].text === "اسنا") {
    asna.classList.add("active");
    buttn2.classList.add("active");
  } else if (y[x].text === "سوهاج") {
    sohag.classList.add("active");
    buttn2.classList.add("active");
  }

  //Start Choise frome Aswan Select
  if (aswanO[aswanI].text == "السد العالى") {
    removeDivActive();
    continerA[0].classList.add("active");
    continerA[0].classList.add("animation");
  } else if (aswanO[aswanI].text == "معبد ابو سمبل") {
    removeDivActive();
    continerA[3].classList.add("active");
    continerA[3].classList.add("animation");
  } else if (aswanO[aswanI].text == "معبد فيلة") {
    removeDivActive();
    continerA[4].classList.add("active");
    continerA[4].classList.add("animation");
  } else if (aswanO[aswanI].text == "المسلة الناقصة") {
    removeDivActive();
    continerA[5].classList.add("active");
    continerA[5].classList.add("animation");
  } else if (aswanO[aswanI].text == "معبد كوم امبو") {
    removeDivActive();
    continerA[6].classList.add("active");
    continerA[6].classList.add("animation");
  }
  //Start Choise frome luxor Select
  if (luxorO[luxorI].text == "معبد الدير البحرى") {
    removeDivActive();
    continerA[1].classList.add("active");
    continerA[1].classList.add("animation");
  } else if (luxorO[luxorI].text == "معبد الكرنك") {
    removeDivActive();
    continerA[2].classList.add("active");
    continerA[2].classList.add("animation");
  }
  //Start Choise frome sohag Select
  if (sohagO[sohagI].text == "منطقة ابيدوس") {
    removeDivActive();
    continerA[7].classList.add("active");
    continerA[7].classList.add("animation");
  }

  //Start Choise frome asna Select
  if (asnaO[asnaI].text == "معبد اسنا") {
    removeDivActive();
    continerA[8].classList.add("active");
    continerA[8].classList.add("animation");
  }
  console.log(sohagO[sohagI].text);
}

//Start Creat Function For Remove Select Active
function removeAllActive() {
  aswan.classList.remove("active");
  luxor.classList.remove("active");
  asna.classList.remove("active");
  sohag.classList.remove("active");
  buttn2.classList.remove("active");
}
//start Cerat Functon for Remove Child Active
function removeDivActive() {
  continerA[0].classList.remove("active");
  continerA[1].classList.remove("active");
  continerA[2].classList.remove("active");
  continerA[3].classList.remove("active");
  continerA[4].classList.remove("active");
  continerA[5].classList.remove("active");
  continerA[6].classList.remove("active");
  continerA[7].classList.remove("active");
  continerA[8].classList.remove("active");
}

/*first */
