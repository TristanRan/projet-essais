const monstre = {

    gobelin: {
        nom: 'gobelin',
        niveau: 1,
        PP: 1,
        lieu: ['montagne'],
        nombre: 0
    },
    brigand:{
        nom: 'brigand',
        niveau: 1,
        PP: 1,
        lieu:['forêt', 'plaine'],
        nombre: 0
    },
    orc:{
        nom: 'orc',
        niveau: 1,
        PP: 2,
        lieu:['plaine', 'montagne'],
        nombre: 0
    },
    araignée:{
        nom:'araignée',
        niveau: 1,
        PP: 1,
        lieu:['forêt', 'montagne'],
        nombre: 0
    },
    centaure:{
        nom: 'centaure',
        niveau: 2,
        PP: 3,
        lieu:['forêt'],
        nombre: 0
    },
    troglodyte:{
        nom: 'troglodyte',
        niveau: 1,
        PP: 1,
        lieu: ['montagne'],
        nombre: 0
    },
    troll:{
        nom: 'troll',
        niveau: 3,
        PP: 5,
        lieu:['montagne'],
        nombre: 0
    },
    géant:{
        nom: 'géant',
        niveau: 5,
        PP: 20,
        lieu:['plaine', 'montagne'],
        nombre: 0
    },
    dragon:{
        nom: 'dragon',
        niveau: 5,
        PP: 30,
        lieu: ['montagne', 'plaine'],
        nombre: 0
    },
   }
  

  //tri monstre selon niveau

const monstreNiveau1 = []
const monstreNiveau2 = []

function triNiveau(array){
    for (let objet in array){
     if (array[objet].niveau) { 
        if (array[objet].niveau === 1){
         monstreNiveau1.push('Nom: ' + array[objet].nom + ' ' + ' Niveau: ' + array[objet].niveau)
        }
        if (array[objet].niveau === 2){
        monstreNiveau2.push(array[objet])
       } 
     }
   }
}

//tri monstre selon lieu

const monstreForêt = []
const monstrePlaine = []
const monstreMontagne = []

function trieLieu(array){
    for (let objet in array){
      if (array[objet].lieu) { 
        if (array[objet].lieu.indexOf('forêt') >= 0){
           monstreForêt.push(` ${array[objet].nom}`)
        } 
        if (array[objet].lieu.indexOf('plaine') >= 0){
            monstrePlaine.push(` ${array[objet].nom}`)
        }     
        if (array[objet].lieu.indexOf('montagne') >= 0){
            monstreMontagne.push(` ${array[objet].nom}`)
        }
    }
    }
}


// générer monstre selon PP

let setPP = 100

const randomProperty = (objet) => {
    const keys = Object.keys(objet)
    return objet[keys[Math.floor(Math.random() * keys.length)]]
    }
const monstreRencontre = monstre

function monstrePool(array) {
    let totalPP = setPP
    let pickUp
    while (totalPP > 0){
     
     pickUp = randomProperty(array)
       if (totalPP >= pickUp.PP) {
         pickUp.nombre += 1
         totalPP = totalPP - pickUp.PP
        }
      }
    for (let val in array) {
        if (array[val].nombre >= 1){
         console.log(`${array[val].nom}: ${array[val].nombre}`)
        }
    }  
}
  
monstrePool(monstreRencontre)




