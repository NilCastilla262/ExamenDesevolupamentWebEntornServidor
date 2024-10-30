const fs = require("fs"); 

//EX1
function llegirData (file) {

    try {
        data = fs.readFileSync(file, "utf-8");
    }catch(error){
        console.error(`Error: ${error}`);
        data = [];
    }finally {
        return data;
    }
}
data = llegirData("productes.json");
//console.log(data);

//EX2
function mostrarProducte(producte) {
    console.log(producte);
}
console.log(data[1])
//console.log(mostrarProducte(data[1]));