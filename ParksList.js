function wapatoClick(){
    function initMap() {
    // The location of Wapato
    var Wapato = {lat: 47.194973, lng: -122.454884};
    // The map, centered at Wapato
    var map = new google.maps.Map(
        document.getElementById('map'), {zoom: 15, center: Wapato});
    // The marker, positioned at Wapato Park
    var marker = new google.maps.Marker({position: Wapato, map: map});
    }
    //set text 
    document.getElementById("parkInfo").innerHTML = "Wapato Park lies in a beautiful setting of lake and forest. Features include a walking trail around the lake (.9 miles), a playground, a dog park, picnic shelters, and an impressive, historic pergola.";
    document.getElementById("footnote").innerHTML = "Description provided by MetroParks";
    //draw map 
    initMap(); 
}
function oakTreeParkClick(){
    function initMap() {
    // The location of Oak Tree Park
    var oakTreePark = {lat: 47.190195, lng: -122.476021};
    // The map, centered at Oak Tre Park
    var map = new google.maps.Map(
        document.getElementById('map'), {zoom: 15, center: oakTreePark});
    // The marker, positioned at Oak Tree Park
    var marker = new google.maps.Marker({position: oakTreePark, map: map});
    }
    //set text
    document.getElementById("parkInfo").innerHTML = "Oak Tree Park is a 25 acre parcel that comprises one of the last remnants of the Garry oak habitat that used to dominate this part of the city.";
    document.getElementById("footnote").innerHTML = "Description provided by MetroParks";
    //draw map 
    initMap();    
}
function southParkClick(){
    function initMap() {
    // The location of Oak Tree Park
    var southPark = {lat: 47.212361, lng: -122.482904};
    // The map, centered at Oak Tre Park
    var map = new google.maps.Map(
        document.getElementById('map'), {zoom: 15, center: southPark});
    // The marker, positioned at Oak Tree Park
    var marker = new google.maps.Marker({position: southPark, map: map});
    }
    //set text 
    document.getElementById("parkInfo").innerHTML = "This forested park serves south Tacoma and features gardens, play equipment, and a sprayground.";
    document.getElementById("footnote").innerHTML = "Description provided by MetroParks";
    //draw map 
    initMap();
}
