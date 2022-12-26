var table;

function preload() {
  //j5 functie die tabel laadt vanuit csv
  table = loadTable("CSV/LiveMonthLiveActionShorted.csv", "csv", "header");
  document.getElementById("Filters").style.visibility= "hidden";
  document.getElementById("Order").style.visibility= "hidden";


  console.log(table.getColumn("name"));

  }

  function setup() {

    var library = table_to_library(table);
    console.log(library);
    var sortedLibrary = sortings(library, "Stake", "asc");
    console.log(sortedLibrary);
    displayLibrary(sortedLibrary);

  }

function build_HTML_table (table, tableID, parentID, classID) {
  // create an HTML table with w3.css class with the table table
  // table should be a p5.Table object
  // tableID is the selector ID you want to assign to the table
  // parentID is the element ID under which you want to locate the table
  // classID is the class to add to the <table>
  
 
  console.log("Aantal kolommen =" +table.getColumnCount() + "Aantal rijen =" +table.getRowCount());
  console.log(table);
  
  // setup the table header HTML string
  var hh ="<tr>"; // header html
  for (var c = 0; c < table.getColumnCount(); c++) {
    hh +="<th>" +  table.columns[c] +"</th>";
  }
  hh +="</tr>"
  
  // setup the table row HTML string
  var rh =""; // row html
  
  for (var r = 0; r < table.getRowCount(); r++){
    rh +="<tr>";
    for (var c = 0; c < table.getColumnCount(); c++){
      
       // add the content of each cell
       rh +="<td>" +  table.get(r,c) + "</td>"; 
       
    }
    rh +="</tr>";
  }
  //console.log("cell (0,1) = " + table.get(0, 1));
  //console.log("cell (0,0) = " + table.get(0, 0));
  
  var t = createElement("table", hh+rh);
  
//   t.addClass(classID); // add the  table class from w3.csss
//   t.id(tableID); // sets the id for this <table>
//   t.parent(parentID);
}

function sortings(sortArray, column, order) {
    if (order == "desc") {
        sortArray = sortArray.sort((a,b) => +a[column] < +b[column] ? 1 : -1);
    } else if (order == "asc"){
        sortArray = sortArray.sort((a,b) => +a[column] > +b[column] ? 1 : -1);
    } else {
        sortArray = "sorteren doet niet";
    }
    return sortArray;
}

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

    var t = createElement("table", hh+rh);
}

function shower(what) {
    if (what = 0){
        document.getElementById("Filters").style.visibility = "visible";
    } else if (what = 1){
        document.getElementById("Filters").style.visibility = "visible";
    } else if (what = 2){
        document.getElementById("Order").style.visibility = "visible";
    }
    print(what)
}
