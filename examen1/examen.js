const fs = require("fs"); 

//EX1
function llegirData (file) {

    try {
        data = fs.readFileSync(file, "utf-8");
    }catch(error){
        console.error(`Error: ${error}`);
        data = [];
    }finally {
        return JSON.parse(data);
    }
}
productes = llegirData("productes.json");
//console.table(productes);

//EX2
function mostrarProducte(producte) {
    for (let propietat in producte){
        if (typeof producte[propietat] === "object"){
            for (let subPropietat in producte[propietat]){
                console.log(subPropietat)
            }
        }
    }
}
mostrarProducte(productes[1]);

//EX3
function mostrarProductes(productes){
    for (let i = 0; i < productes.length; i++) {
        console.log("Nom: "+ productes[i].nom);
        console.log("marca: "+ productes[i].marca);
        console.log("categoria: "+ productes[i].categoria);
        console.log("preu: "+ productes[i].preu);
        console.log("Nom: "+ productes[i].nom);
        console.log("Nom: "+ productes[i].nom);
        console.log("Nom: "+ productes[i].nom);
        console.log("Nom: "+ productes[i].nom);
        console.log("Nom: "+ productes[i].nom);
    }
}

//mostrarProductes(productes)