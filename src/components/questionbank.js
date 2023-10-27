import enemies from "./images/enemies.webp";
import krool from "./images/Kaptain_k_rool_1.webp"
import mainbrace from "./images/Mainbrace_Mayhem_Click-Clack.webp"
import piratePanic from "./images/StartPiratePanic.webp"

let qBank = [
    {
    id: 1,
    question: "What is the first enemy that you see in the game?",
    options: ["A furry rat","A scaly crocodile","An ugly earthworm"],
    answer: "A furry rat",
    image: enemies
    },
    {
      id: 2,
      question: "What is the name of the first level in the game?",
      options: ["Pirate Picnic", "Pirate Panic","Pirate Punch-up"],
      answer: "Pirate Panic",
      image: piratePanic
    },
    {
      id: 3,
      question: "What is the name of the enemy boss who has kidnapped Donkey Kong?",
      options: ["Kaptain K. Rapp", "Korporal K. Reep","Kaptain K. Rool"],
      answer: "Kaptain K. Rool",
      image: krool
    },
    {
      id: 4,
      question: "What is the name of the first rigging level?",
      options: ["Mainbrace Mayhem", "Rigging Riot","Ropey Rubbish"],
      answer: "Mainbrace Mayhem",
      image: mainbrace
    }
    
  ]

  function shuffle(array) {
    let currentIndex = array.length,  randomIndex;
  
    while (currentIndex > 0) {
  
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  

      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
    return array;
  }

  qBank = shuffle(qBank);
  
  export default qBank