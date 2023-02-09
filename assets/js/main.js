console.log("test");

/* 
function ???     
    Monatsnamen anhand eines Bestimmten Datums ermitteln

        getMonth()

Vergleich 
console.log(monatsName("2001,3,4")); //März
console.log(monatsName("2019,12,24")); //Dezember
console.log(monatsName("1410,07,15")); //Juli

*/




let list = [
    "Januar", // 0
    "Februar",
    "März",
    "April",
    "Mai",
    "Juni",
    "Juli",
    "August",
    "September",
    "Oktober",
    "November",
    "Dezember" // 11
  ];
  
  monatsName(2001,11,3)


  function monatsName (jahr, monat, tag){
    console.log(jahr, monat, tag);
    ergebnis = list[monat-1]
    console.log(ergebnis);
  }