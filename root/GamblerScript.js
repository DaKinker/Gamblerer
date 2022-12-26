
//const CountryBetsEtc = [];
//const Data3Age = []


function readTextFile(file)
{
    var rawFile = new XMLHttpRequest();
    rawFile.open("GET", file, false);
    rawFile.onreadystatechange = function ()
    {
        if (rawFile.readyState === 4)
        {
            if (rawFile.status === 200 || rawFile.status == 0)
            {
                var allText = rawFile.responseText;
            }
            //split hele file op regels om alle rijen in een apart element te krijgen
            const dataRows = allText.split("\n");
            //eerste rij met de van deze array is de waardes waar de data over gaat
            var firstRow = dataRows[0];
            //eerste rij splitsen op komma om elke waarde apart te krijgen
            const dataColumns = firstRow.split(",");
            dataColumns.forEach(element => console.log(element));
            //aantal kolommen tellen aan de hand van lengte van de array 
            var numberColumns = dataColumns.length;
            console.log(numberColumns);
            //split alle data in aparte waardes
            const allData = allText.split(",","\n").slice(0);
            //voor alle data per aantal rijen een kolom maken


/*          deze functie hoort te zorgen dat elk zoveelste element van de eerste kolom in de arrat firstColumn komt, 
            hij pakt elke zoveelste (zoveelste trouwens is het aantal kolommen wat eerder is bepaald) en zet  deze in de firstColumn (dit blijkt nog niet te werken)
            het hoeft eigenlijk niet op deze manier maar het moet op een manier in een tabel komen
            
            kan handig zijn  https://uufishtxl.github.io/js_api_fetch_csv.html
*/
            for (var i = 0; i < allData.length / numberColumns; i++) {
                const firstColumn = []
                //op elke plaats in firstColumn komt een waarde die in de 1e kolom hoort te staan
                firstColumn[i] = allData[i * numberColumns];

                firstColumn.forEach(element => console.log(element));
                // console.log(allData.slice(i * numberColumns, numberColumns + i * numberColumns));
                console.log("fordon");
            }
            console.log("klar");
        } 
    }
    rawFile.send(null);


}