/*
function udv (){
    document.write("gombos");
}
//alert("hali");
console.log("hali");
var szoveg = "sss";
document.write(szoveg);
*/
function init(){
    document.getElementById("uzenet").innerHTML="hello";
    if (szin = "red"){
        console.log("piros");
    }else if (szin = "red"){
        console.log("piros");
    }else if (szin = "red"){
        console.log("piros");
    }else if (szin = "red"){
        console.log("piros");
    }else if (szin = "red"){
        console.log("piros");
    }else if (szin = "red"){
        console.log("piros");
    }else if (szin = "red"){
        console.log("piros");
    }else {
        console.log("nem ismerem a szint");
    }
    var gyumolcsok = ["alma","körte","szilva","barack","eper"];
    var gyumolcsokSzin = ["piros","sárga","lila","barack","piros"];
    var gyumolcsokAr = [260,304,400,6633,234];
    var pirosDb = 0;
    var pirosOsszar = 0;
    var sargaDb = 0;
    var vanEzerFeletti = false;
    var osszertek = 0;
    var osszeg = 0;
    var i = 0
//-----------------
    for (let i = 0; i < gyumolcsokSzin.length; i++) {
       if (gyumolcsokSzin[i]==="piros"){
            pirosDb++;
       }
       if (gyumolcsokSzin[i]==="sárga"){
            sargaDb++;
       }
    }
    console.log("piros darab: ",pirosDb)
//----------------------

    for (let i = 0; i < gyumolcsokAr.length; i++) {
        osszertek +=gyumolcsokAr[i]; 
        if (gyumolcsokAr[i]>1000){
            vanEzerFeletti = true;
        }
        osszeg +=gyumolcsokAr[i];
    }
//--------------------
if (pirosDb>sargaDb){
    console.log("több piros van")
}else{
    console.log("több sárga van")
}
//----------------------
console.log("van 1000 feletti ár: ",vanEzerFeletti)
//---------------------
for (let i = 0; i < gyumolcsokSzin.length; i++) {
    if (gyumolcsokSzin[i] === "piros"){
        pirosOsszar += gyumolcsokAr[i];
    }
    
}
console.log("piros osszar: ",pirosOsszar)
//----------------
console.log("Átlag: ",osszeg/gyumolcsokAr.length )
}

window.addEventListener("load",init,false);
