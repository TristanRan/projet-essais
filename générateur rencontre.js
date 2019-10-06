let rand100 = () => { return Math.floor(Math.random() * (101 - 1) + 1) };
let d6 = () => { return Math.floor(Math.random() * (7 - 1) + 1) };
let d4 = () => { return Math.floor(Math.random() * (5 - 1) +1 ) };
let select = (array) => { return array[Math.floor(Math.random() * array.length)] };
  
//Régler difficulté.
   // Entrer "facile", "normal" ou "difficile" pour régler difficulté. Tout autre valeur = choix aléatoire.

let choixDifficulté = ''
function setDifficulté() {
  let choice = rand100()

  if (choice <= 30) {
    return 'facile';
  }
  if (choice >= 31 && choice <= 75) {
    return 'normal';
  }
  if (choice >= 76) {
    return 'difficile';
  }
}

let _difficulté
choixDifficulté === 'facile' || choixDifficulté === 'normal' || choixDifficulté === "difficile" ?  _difficulté = choixDifficulté : _difficulté  = setDifficulté()

//Choisir Région
 // Entrer "facile", "normal" ou "difficile" pour régler difficulté. Tout autre valeur = choix aléatoire

 let choixRégion = '';
 function setRégion () {
   let régionListe = ['désert', 'montagne', 'plaine', 'forêt'];
   return select(régionListe)
}

let _région 
choixRégion === 'plaine' || choixRégion === 'montagne' || choixRégion === 'forêt' || choixRégion === 'désert' ? _région = choixRégion : _région = setRégion();


//Régler lieu selon la région

// Etablir le lieux selon la région

function setLieu (choix) {

  let forêtList = ['forêt des escarpés', 'bosquet des cerfs', 'bois des cévennes']
  let desertList = ['oasis de Malak al Tamuri', 'dunes des Mamelouks', 'chemins des martyrs']
  let montList = ['mont de fer', `monts d'étains`, 'mont de cuivre']
  let plaineList = ['plaine de l\'exilé', 'vallée des milles rochers', 'pré aux dames']

  switch (choix) {
    case 'forêt':
      return select(forêtList)
      break;
    case 'désert':
      return select(desertList)
      break;
    case 'plaine':
      return select(plaineList)
      break;
    case 'montagne':
      return select(montList)
      break;
    default:
        return 'veuillez entrer une région valide (forêt, désert, plaine ou montagne)'
        break;
  }
}
lieu = setLieu(_région)


//Etablir rencontre monstre selon région et difficulté

let monstreDesert = {
  niveau1:{
    nom:'kobold des sables',
    nombre: 0
  },
  niveau2: {
    nom:'scorpions',
    nombre: 0
  },  
  niveau3:{
    nom:'golem de jade',
    nombre: 0
  },
  niveau4:{
    nom:'djinns',
    nombre: 0
  },
}
let monstreForêt = {
  niveau1:{
    nom:'esprit des bois',
    nombre: 0
  },
  niveau2: {
    nom:'dryade',
    nombre: 0
  },  
  niveau3:{
    nom:'garde sylvestre',
    nombre: 0
  },
  niveau4:{
    nom:'homme-arbre',
    nombre: 0
  },
}
let monstrePlaine = {
  niveau1:{
    nom:'gnoll',
    nombre: 0
  },
  niveau2: {
    nom:'hobgobelin',
    nombre: 0
  },  
  niveau3:{
    nom:'centaure',
    nombre: 0
  },
  niveau4:{
    nom:'cyclope',
    nombre: 0
  },
}
let monstreMontagne = {
  niveau1:{
    nom:'gobelin',
    nombre: 0
  },
  niveau2: {
    nom:'orc',
    nombre: 0
  },  
  niveau3:{
    nom:'troll',
    nombre: 0
  },
  niveau4:{
    nom:'beholder',
    nombre: 0
  },
}
let monstreArray = {}

// choisi la liste de monstre à tirer selon région
function calculMonstreList (){
  switch (_région){
    case 'désert':
      return monstreArray = monstreDesert
      break;
    case 'forêt':
      return monstreArray = monstreForêt
      break;
    case 'plaine':
      return monstreArray = monstrePlaine;
      break;
    case 'montagne':
      return monstreArray = monstreMontagne;
      break;
  }
}
// tir au sort monstre selon difficulté
function calculMonstre (){
  switch (_difficulté){
    case 'facile':
     return monstreArray.niveau1.nombre = d6()
      monstreArray.niveau2.nombre = d4()
      break;
    case 'normal':
      monstreArray.niveau1.nombre = d6() * 2
      monstreArray.niveau2.nombre = d4() + 1
      monstreArray.niveau3.nombre = Math.floor(d4() / 2)  
      break;
    case 'difficile':
      monstreArray.niveau1.nombre = d6() * 3
      monstreArray.niveau2.nombre = d6() * 2
      monstreArray.niveau3.nombre = d4() + 1
      monstreArray.niveau4.nombre = Math.floor(Math.random() * (3 - 1) +1 )
      break;
    } ; 
} 

//compile les deux fonctions
setMonstre = () => {
 calculMonstreList();
 calculMonstre()
}
setMonstre()

//Log la rencontre
console.log('Difficulté: ' + _difficulté + '\nRégion: ' + _région + '\nLieu: ' + lieu + '\n\nVous êtes attaqué par: \n'  )

 // trie les monstres à 0 effectif, ne log que ceux qui ont un effectif > 0

function logMonstre () {
  for (let objet in monstreArray){
    if (monstreArray[objet].nombre > 0)
     console.log(`${monstreArray[objet].nom}: ${monstreArray[objet].nombre}`)
    }
}
logMonstre()



 