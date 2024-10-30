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

//EX2
function mostrarProducte(producte) {
    for (let propietat in producte){
        if (typeof producte[propietat] === "object"){
            for (let subPropietat in producte[propietat]){
                console.log(subPropietat + ":" + producte[propietat][subPropietat]);
            }
        }
        else{
            console.log(propietat + ":" + producte[propietat]);
        }
    }
}


//EX3
function mostrarProductes(productes){
    for (let i = 0; i < productes.length; i++) {
        console.log("\n PRODUCTE" + i);
        producte = productes[i];
        for (let propietat in producte){
            if (typeof producte[propietat] === "object"){
                for (let subPropietat in producte[propietat]){
                    console.log(subPropietat + ":" + producte[propietat][subPropietat]);
                }
            }
            else{
                console.log(propietat + ":" + producte[propietat]);
            }
        }
    }
}

//EX4
function mostrarProducteID(productes, id){
    for (let i = 0; i < productes.length; i++) {
        if (productes[i].id=== id){
            producte = productes[i];
            for (let propietat in producte){
                if (typeof producte[propietat] === "object"){
                    for (let subPropietat in producte[propietat]){
                        console.log(subPropietat + ":" + producte[propietat][subPropietat]);
                    }
                }
                else{
                    console.log(propietat + ":" + producte[propietat]);
                }
            }
        }
    }
}

//EX5

//1
console.log("Exercici1")
console.table(llegirData("productes.json"));
//2
console.log("\nExercici2")
mostrarProducte(productes[1]);
//3
console.log("\nExercici3");
mostrarProductes(productes);
//4
console.log("\nExercici5");
mostrarProducteID(productes, 3);