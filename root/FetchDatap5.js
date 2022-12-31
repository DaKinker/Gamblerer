var table;
var table2;
var table3;
var table4;
var library;
var library2;
var library3;
var library4;
var kolom;
var welkeDatabase;

function preload() {
  //j5 functie die tabellen laadt vanuit csv
  table2 = loadTable("CSV/Date_and_bets.csv", "csv", "header");
  table4 = loadTable("CSV/Financing.csv", "csv", "header");
  table3 = loadTable("CSV/More_userdata_on_gamblers.csv", "csv", "header");
  table = loadTable("CSV/Userdata1.csv", "csv", "header");
  }

function setup() {
  //maak library van tabellen
  
  library = table_to_library(table);
  library2 = table_to_library(table2);
  library3 = table_to_library(table3);
  library4 = table_to_library(table4);

}

//sorteert de database met behulp van de opgeslagen filters en de goede volgorde en stuurt dit dan naar de display functie
function sortings(order) {
  var sortArray = welkeDatabase;
  var column = kolom;

    if (order == "desc") {
      sortArray = sortArray.sort((a,b) => +a[column] < +b[column] ? 1 : -1);
    } else if (order == "asc"){
        sortArray = sortArray.sort((a,b) => +a[column] > +b[column] ? 1 : -1);
    } else {
        sortArray = "sorteren doet niet";
    }
    displayLibrary(sortArray);
}

//zet de tabel om in een library (zie triviale problemen)
function table_to_library(table) {
  var library_array = [];
  var library = {};



  for (var r = 0; r < table.getRowCount(); r++){
    
    for (var c = 0; c < table.getColumnCount(); c++){
        library[table.columns[c]] = table.get(r,c);
    }
    library_array[r] = library;
    library = {};

  }
  return library_array;
}

//zorgt ervoor dat de tabel ook daadwerkelijk te zien is op de site, en verwijderd de oude tabel als deze nog aanwezig is. 
function displayLibrary(library) {
    var hh ="<tr>"; // header html
    for (var c = 0; c < Object.keys(library[0]).length; c++) {
        hh +="<th>" +  Object.keys(library[0])[c] +"</th>";
    }
    hh +="</tr>"
    
    // setup the table row HTML string
    var rh =""; // row html
    
    for (var r = 0; r < library.length; r++){
        rh +="<tr>";
        for (var c = 0; c < Object.keys(library[0]).length; c++){
        
        // add the content of each cell
        rh +="<td>" +  library[r][Object.keys(library[0])[c]] + "</td>"; 
        
        }
        rh +="</tr>";
    }

    var tables = document.getElementsByTagName('table')[0];

    if (tables != null) {
      tables.remove();
    }

    var elem = createElement("table", hh+rh);

    
}

//De shower functie is de controller voor de zichtbaarheid van alle knoppen. 
function shower(what) {
    if (what == 0){
      document.getElementById("UData1").removeAttribute("hidden");
      document.getElementById("DNBets").setAttribute("hidden", "hidden");
      document.getElementById("UData2").setAttribute("hidden", "hidden");
      document.getElementById("Fina").setAttribute("hidden", "hidden");
      welkeDatabase = library
    } else if (what == 1){
      document.getElementById("UData1").setAttribute("hidden", "hidden");
      document.getElementById("DNBets").removeAttribute("hidden");
      document.getElementById("UData2").setAttribute("hidden", "hidden");
      document.getElementById("Fina").setAttribute("hidden", "hidden")
      welkeDatabase = library2

    } else if (what == 2){
      document.getElementById("UData1").setAttribute("hidden", "hidden");
      document.getElementById("DNBets").setAttribute("hidden", "hidden");
      document.getElementById("UData2").removeAttribute("hidden");
      document.getElementById("Fina").setAttribute("hidden", "hidden")
      welkeDatabase = library3

    } else if (what == 3){
      document.getElementById("UData1").setAttribute("hidden", "hidden");
      document.getElementById("DNBets").setAttribute("hidden", "hidden");
      document.getElementById("UData2").setAttribute("hidden", "hidden");
      document.getElementById("Fina").removeAttribute("hidden");
      welkeDatabase = library4

    }
}

//slaat de filters op in variabeles zodat deze later gebruikt kunnen worden
function saveColumn(kolominput) {
  kolom = kolominput;
  document.getElementById("Order").removeAttribute("hidden");
}
