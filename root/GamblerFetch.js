//functie om de csv naar tekst en daarna naar tabel te schrijven
async function csvToTable()
{
    const response = await fetch("CSV/LiveMonthLiveAction.csv");
    const data = await response.text();
    console.log(data);

    const table = data.split("\n").slice(1);
    //eerste rij met de van deze array is de waardes waar de data over gaat
    var firstRow = dataRows[0];
    //eerste rij splitsen op komma om elke waarde apart te krijgen
    const dataColumns = firstRow.split(",");
    
    //
    table.forEach(row => {
        const columns = row.split(",");
        

        console.log(columns);
    })

    console.log(rows);
} 
// var table;

// function csvToTable() {
//   //j5 functie die tabel laadt vanuit csv
//   table = loadTable("root\CSV\LiveMonthLiveAction.csv", "csv", "header");

//   print(table.getColumn('name'));

//   }



// dit script was om iets anders te testen in principe hoef je hier niet op te letten

