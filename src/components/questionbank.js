let qBank = [
    {
    id: 1,
    question: "What is the first enemy that you see in the game?",
    options: ["A furry rat","A scaly crocodile","An ugly earthworm"],
    answer: "A furry rat",
    },
    {
      id: 2,
      question: "What is the name of the first level in the game?",
      options: ["Pirate Picnic", "Pirate Panic","Pirate Punch-up"],
      answer: "Pirate Panic",
    },
    {
      id: 3,
      question: "What is the name of the enemy boss who has kidnapped Donkey Kong?",
      options: ["Kaptain K. Rapp", "Korporal K. Reep","Kaptain K. Rool"],
      answer: "Kaptain K. Rool",
    },
    {
      id: 4,
      question: "What is the name of the first rigging level?",
      options: ["Mainbrace Mayhem", "Rigging Riot","Ropey Rubbish"],
      answer: "Mainbrace Mayhem",
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