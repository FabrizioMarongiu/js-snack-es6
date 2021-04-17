$(document).ready(function(){
// jsnack 1
// Creare un array di oggetti
// Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
// Stampare a schermo la bici con peso minore


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

// let teams = [

//     {
//         name : 'Cagliari',
//         punti : 0,
//         falli : 0
//     },
//     {
//         name : 'Catania',
//         punti : 0,
//         falli : 0
//     },
//     {
//         name : 'Pistoia',
//         punti : 0,
//         falli : 0
//     },
//     {
//         name : 'Palermo',
//         punti : 0,
//         falli : 0
//     }
// ];

// // ASSEGNO UN NUMERO CASUALE ALLA CHIAVE PUNTI E FALLI
// for ( let i = 0; i < teams.length; i++){


//     teams[i].punti = NumeroRandom (1, 10);
//     teams[i].falli = NumeroRandom (1, 10);

// }

// console.table(teams);

// let newTeam = [];


// for ( let i = 0; i < teams.length; i++){
    
//     const{name, falli} = teams[i];

//     newTeam.push({
//         newNomi: name,
//         newFalli: falli
//     });


// }
// console.table(newTeam);




 

// // FUNZIONE PER CEREARE DEI NUMERI RANDOM

// function NumeroRandom(min, max){

//    var number = Math.floor(Math.random() * max - min + 1 ) + min ;

//     return number;
// }






// jsnack 3
// Si scriva una funzione che accetti tre argomenti, un array e due numeri (a più piccolo di b).
// La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra i due numeri
// inseriti dall'utente (è possibile usare, ad esempio, for/foreach/filter


// const nomi = [ 'Pietro', 'Andrea', 'Giovanna', 'Claudia', 'Frank', 'Melissa'];

// let min = parseInt(prompt('Inserisci un numero compreso tra 0 e ' + (nomi.length -1 )));

// while (isNaN(min) || min > nomi.length){

//     min = parseInt(prompt('Inserisci un numero compreso tra 0 e ' + (nomi.length -1 )));

// } ;

// let max = parseInt(prompt('Inserisci un numero compreso tra ' + min + ' e ' +(nomi.length -1 )));

// while( isNaN(max) || (max < min) || (max > nomi.length) ){

//     max = parseInt(prompt('Inserisci un numero compreso tra ' + min + ' e ' + (nomi.length -1 )));

// };

// console.log('Min ' + min + 'Max' + max);


// const scelta = nomi.filter((element, index) => {
//     return min >= index && max <= index ;
// });

// console.log(scelta);






// jsnack 4
// Dato un'array con dei capi d'abbigliamento - oggetti che contengono informazioni su nome modello, tipologia e colore - si aggiunga a ciascun elemento una ulteriore proprietà che indichi il costo del prodotto.
// Per inserire il costo del singolo prodotto si scriva una funzione che generi un numero random da 10 a 50 (potete sfruttare il map per aggiungere la nuova proprietà)


let armadio = [
    { 
        nome : 'pantaloni',
        modello : 'italy',
        tipologia : 'skinny',
        colore : 'black'
    },
    { 
        nome : 'tShirt',
        modello : 'vintage',
        tipologia : 'fashion',
        colore : 'multicolor'
    },
    { 
        nome : 'blazer',
        modello : 'underground',
        tipologia : 'british',
        colore : 'grey'
    },
    { 
        nome : 'shirt',
        modello : 'France',
        tipologia : 'wedding',
        colore : 'blue'
    }
];

console.table(armadio);


let addPrice =[];



addPrice = armadio.map((element) => {

    let prezzo = NumeroRandom(10, 50);
     addPrice =
        {
            ...element,
            price: prezzo
        }
    

    return addPrice


});


console.table(addPrice);




// FUNZIONE PER CEREARE DEI NUMERI RANDOM

function NumeroRandom(min, max){

    var number = Math.floor(Math.random() * max - min + 1 ) + min ;

    return number;
}




    // END DOCUMENT
});