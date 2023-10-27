import enemies from "./images/enemies.webp";
import krool from "./images/Kaptain_k_rool_1.webp";
import mainbrace from "./images/Mainbrace_Mayhem_Click-Clack.webp";
import piratePanic from "./images/StartPiratePanic.webp";
import balloon from "./images/DKC2_Baloons.webp";
import bananna from "./images/Banana_Bunch_DKC_artwork.webp";
import dixie from "./images/DixieDKC2.webp";
import klubba from "./images/Klubba.webp";
import rambi from "./images/Rambi.webp";
import island from "./images/island.webp"

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
    },
    {
      id: 5,
      question: "What is an extra lives balloon coloured red worth?",
      options: ["2 Lives", "1 Life","5 Lives"],
      answer: "1 Life",
      image: balloon
    },
    {
      id: 6,
      question: "How many banana bunches would you have to collect to get an extra life?",
      options: ["5", "10", "20"],
      answer: "10",
      image: bananna
    },
    {
      id: 7,
      question: "What is the name of Diddy's pony-tailed girlfriend?",
      options: ["Diddette", "Trixie", "Dixie"],
      answer: "Dixie",
      image: dixie
    },
    {
      id: 8,
      question: "What is the name of the big muscle-bound crocodile who guards the toll bridge?",
      options: ["Klaggy", "Klunga", "Klubba"],
      answer: "Klubba",
      image: klubba
    },
    {
      id: 9,
      question: "What is your rhino buddy's name?",
      options: ["Bambam", "Rambi", "Rambus"],
      answer: "Rambi",
      image: rambi
    },
    {
      id: 10,
      question: "What is the name of the Kremling island that you are on?",
      options: ["Crocodile Dump", "Crocodile Isle", "Crocodile Country"],
      answer: "Crocodile Isle",
      image: island
    },
    
  ];

  function shuffle(array) {
    let currentIndex = array.length,  randomIndex;
  
    while (currentIndex > 0) {
  
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      [array[currentIndex].id, array[randomIndex].id] = [
        array[randomIndex].id, array[currentIndex].id];

      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
    return array;
  }

  qBank = shuffle(qBank);
  
  export default qBank