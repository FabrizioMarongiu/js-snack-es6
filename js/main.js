// jsnack 1
// Creare un array di oggetti
// Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
// Stampare a schermo la bici con peso minore

$(document).ready(function(){

    // const bike1 ={ 
    //     bike : 'Red',
    //     peso : 7
    // }
    // const bike2 ={ 
    //     bike : 'Blue',
    //     peso : 2
    // }
    // const bike3 ={ 
    //     bike : 'Green',
    //     peso : 3
    // }
    // const bike4 ={ 
    //     bike : 'Purple',
    //     peso : 10
    // }
    // const bikeShop = [
    //     bike1,
    //     bike2,
    //     bike3,
    //     bike4
    // ];

    // let pesoMinore = 0;



    // for ( let i = 0; i < bikeShop.length; i++ ){

        
    //     const{peso} = bikeShop[i];
    //     if( peso < bikeShop[pesoMinore].peso){
    //             pesoMinore = i;
    //          }
    // }





    // console.log(`Il peso minore è quello della bici ${bikeShop[pesoMinore].bike}, il suo peso è: ${bikeShop[pesoMinore].peso}`);




    // Snack 2
// Creare un array di oggetti di squadre di calcio. Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
// Nome sarà l'unica proprietà da compilare, le altre saranno tutte settate a 0.
// Generare numeri random al posto degli 0 nelle proprietà:
// Punti fatti e falli subiti
// Infine usando la destrutturazione creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.

let teams = [

    {
        name : 'Cagliari',
        punti : 0,
        falli : 0
    },
    {
        name : 'Catania',
        punti : 0,
        falli : 0
    },
    {
        name : 'Pistoia',
        punti : 0,
        falli : 0
    },
    {
        name : 'Palermo',
        punti : 0,
        falli : 0
    }
];

// ASSEGNO UN NUMERO CASUALE ALLA CHIAVE PUNTI E FALLI
for ( let i = 0; i < teams.length; i++){


    teams[i].punti = NumeroRandom (1, 10);
    teams[i].falli = NumeroRandom (1, 10);

}

console.table(teams);

let newTeam = [];


for ( let i = 0; i < teams.length; i++){
    
    const{name, falli} = teams[i];

    newTeam.push({
        newNomi: name,
        newFalli: falli
    });


}
console.table(newTeam);




 

// FUNZIONE PER CEREARE DEI NUMERI RANDOM

function NumeroRandom(min, max){

    var number = Math.floor(Math.random() * max) + min;

    return number;
}






















    // END DOCUMENT
});