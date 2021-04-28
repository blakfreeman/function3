// EXO
// Créer un tableau [codingSchoolX] vide.
// Créer une fonction qui permet d'ajouter quelqu'un au tableau
// Créer une fonction qui permet de retirer quelqu'un au tableau
// Avec les instructions ci-dessous reproduisez les entrées / sorties de la classe

// Exercice : C'est le bordel

//  1. Declarez un tableau du nom de classeCodingl8
//  2. Maintenant que vous ne vous etes pas fait avoir sur l'orthographe du nom du tableau il est 8h43 Cactus 
//   arrive en classe
//  3. 8h44 Mihai rentre, allume son PC et commence a mettre a jour ses notes
//  4. 8h45 Ilyas et Mohammed rejoignent la classe
//  5. 8h51 Yassin et Farhad voyent Nicolas passer devant la porte, et decident de le rejoindre
//  6. 8h55 Tania et Oussama rentrent en classe en faisant un maximum de bruit
//  7. 8h56 Alexis rentre en classe puis redescend prendre sa tasse de café
//  8. 8h59 Issam et Anthony rentre en classe saluant tout le monde
//  9. 9h00 Andy rentre tranquille et observe tout le monde
//  10. 9h03 Loic et Kevin rentrent et observent Mohammed qui a l'air d'etre tranquilleeee
//  11. 9h04 Junior rentre en classe avec sa tasse de café
//  12. 9h05 Charles et William rentrent en classe tous contents de n'etre que 5 minutes en retard, Cactus leur dit 
//   qu'ils sont en retard et puis it sort
//  13. 9h10 Gauthier rentre avec sa petite tasse de café et son pc, tout content et souriant
//  14. 9h20 Les coachs commencent a donner cours
//  15. 9h30 Beytullah rentre en faisant le minimum de bruit possible mais toute la classe la regarde par total incompréhension





function codingSchool18() {
let codingSchoolX =  [];
let Cactus = "Cactus";
let Mihai = "Mihai";
let Ilyas ="Ilyas";
let Mohammed = "Mohammed";
let Yassin ="Yassin";
let Farhad ="Farhad";
let Tania ="Tania";
let Oussama= "Ousama";
let Alexie = "Alexie";
let Issam ="Issam";
let Anthony="Anthony";
let Andy = "Andy";
let Loic= "Loic";
let kevin = "Kevin";
let junior = "junior";
let Charles = "charles"
let will = "will";
let Gauthier = "Gauthier"
let Beytullah = "Beytullah";
// 
   function addUser(x) {
    codingSchoolX.push(x)
    }

    function addUserMulti(user,user2) {
        codingSchoolX.push(user,user2)
        }
    function removeUser(y) {
        codingSchoolX.splice(codingSchoolX.indexOf(y))
    }
    addUser(Cactus);
    alert(Cactus + "  Arrive en  a prems 8h45");
    addUser(Mihai);
    alert(Mihai + " 8h44 Mihai rentre, allume son PC et commence a mettre a jour ses notes");
    addUserMulti(Ilyas,Mohammed);
    alert("8h45 Ilyas et Mohammed rejoignent la classe");
    alert("8h51 Yassin et Farhad voyent Nicolas passer devant la porte, et decident de le rejoindre");
    addUserMulti(Tania,Oussama);
alert("8h55 Tania et Oussama rentrent en classe en faisant un maximum de bruit");
addUser(Alexie);
removeUser(Alexie);
alert("8h56 Alexis rentre en classe puis redescend prendre sa tasse de café");
addUserMulti(Issam,Anthony);
alert("8h59 Issam et Anthony rentre en classe saluant tout le monde");
addUser(Andy);
alert("9h00 Andy rentre tranquille et observe tout le monde");
addUserMulti(kevin,Loic);
alert(" 9h03 Loic et Kevin rentrent et observent Mohammed qui a l'air d'etre tranquilleeee");
addUser(junior);
alert("9h04 Junior rentre en classe avec sa tasse de café");
addUserMulti(Charles,will);
removeUser(Charles,will);
alert("9h05 Charles et William rentrent en classe tous contents de n'etre que 5 minutes en retard, Cactus leur dit  qu'ils sont en retard et puis it sort");
addUser(Gauthier);
alert("9h10 Gauthier rentre avec sa petite tasse de café et son pc, tout content et souriant");
alert(" 9h20 Les coachs commencent a donner cours");
addUser(Beytullah)
alert('9h30 Beytullah rentre en faisant le minimum de bruit possible mais toute la classe la regarde par total incompréhension');
console.log(codingSchoolX);
}

codingSchool18();

