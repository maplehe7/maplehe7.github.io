// For each variable, select the HTML element needed
const settingsForm = document.getElementById('settings-form');
const word= document.getElementById('word');
const text= document.getElementById('text');
const scoreEl= document.getElementById('score-container');
const timeEl= document.getElementById('time-container');
const endgameEl= document.getElementById('end-game-container');
const highscore= document.getElementById('highscore');
const finalScore= document.getElementById('finalscore');
let highscorevar = localStorage.getItem("highscorevar")

if (!(typeof highscorevar !== 'undefined' && highscorevar !== null)){
  console.log("Setting high score to 0");
  highscorevar = "0"
}

if(highscorevar.toString() == "function toString() { [native code] }"){
  console.log("Equals function");
  highscorevar = "0"
}

// Create a variable with an array of words for the game
let verbs = [


    "bamboozles", "boogies", "bops", "baffles", "blunders", "barks", "binges", "blubbers", "blitzs", "buffoons",
    "cackles", "clucks", "crashes", "croons", "doodles", "dangles", "dazzles", "dribbles", "doodles", "flaps",
    "fumbles", "fizzes", "giggles", "guffaws", "hops", "honks", "howls", "juggles", "jolts", "jiggles",
    "japes", "juggles", "jitters", "jitterbugs", "knees", "kicks", "knocks", "kooks", "laughs", "leaps",
    "lolls", "lurches", "mumbles", "munches", "mimics", "nibbles", "nosh", "paddles", "pecks", "pounces",
    "prances", "plops", "plunks", "pranks", "puffs", "quacks", "quivers", "rattles", "rebounds", "roars",
    "rummages", "ripples", "shimmies", "shudders", "skids", "skates", "skewers", "squeaks", "swoops", "tangos",
    "tickles", "twirls", "twiddles", "vibrates", "wobbles", "wriggles", "wails", "yawns", "zoos", "zaps",
    "bops", "bogs", "buzzes", "cavorts", "chortles", "clatters", "cavorts", "cringes", "dizzies", "dozes",
    "dazzles", "flaps", "flicks", "freaks", "frolics", "giggles", "grumbles", "grins", "hops", "hovers",
    "hurls", "jigs", "jostles", "jokes", "juggles", "kibbles", "klutzs", "lurches", "lollygags", "mushes",
    "nuzzles", "peeks", "plops", "prattles", "puffs", "pouts", "quacks", "quakes", "quibbles", "rattles",
    "rolls", "scampers", "shivers", "sizzles", "snoozes", "sputters", "spazzes", "splatters", "sprawls", "twitches",
    "trots", "twists", "yodels", "yelps", "zooms", "zigzags", "zips", "zeals", "zephyrs", "zests",
    "flutters", "frolics", "guffaws", "hacks", "moseys", "munches", "puddles", "scuttles", "slips", "sloops",
    "snickers", "swings", "tugs", "twiddles", "whirrs", "waddles", "wobbles", "yammers", "yawps", "yanks",
    "breathes", "bursts", "boasts", "blows", "brandishes", "chews", "chirps", "clamps", "climbs", "climbs",
    "darts", "dives", "drifts", "drums", "fiddles", "flinches", "gleams", "grumbles", "hitches", "hustles",
    "jogs", "jingles", "knocks", "leaps", "moans", "mutters", "plunges", "pouts", "paddles", "pecks",
    "peeps", "pranks", "prowls", "puffs", "rumbles", "shushes", "snorts", "snuggles", "spits", "staggers",
    "stomps", "thumps", "tickles", "tricks", "tugs", "tumbles", "wobbles", "wrestles", "yelps", "zooms",
    "zags", "yelps", "wobbles", "skews", "crashes", "glides", "jolts", "shuffles", "trills", "whines",
    "wriggles", "yawns", "zaps", "yammers", "dribbles", "bounces", "splashes", "plunks", "cuddles", "buzzes",
    "rattles", "snuffles", "gobbles", "zests", "whizzes", "whims", "flinches", "strums", "slithers", "mashes",
    "bops", "beeps", "fizzes", "mumbles", "prances", "hurdles", "doodles", "hobbles", "spurts", "quibbles"
  
  
  
];
let words = [
  "apple", "banana", "cherry", "date", "elderberry", "fig", "grape", "honeydew",
  "iceberg", "jackfruit", "kiwi", "lemon", "mango", "nectarine", "orange", "papaya",
  "quince", "raspberry", "strawberry", "tangerine", "ugli", "victoria", "watermelon",
  "xigua", "yellow", "zucchini", "animal", "bear", "cat", "dog", "elephant", "fox",
  "goat", "horse", "iguana", "jaguar", "kangaroo", "lion", "monkey", "newt", "octopus",
  "penguin", "quail", "rabbit", "snake", "tiger", "unicorn", "vulture", "whale",
  "xenops", "yak", "zebra", "ant", "bee", "cockroach", "dragonfly", "earwig", "flea",
  "grasshopper", "hornet", "insect", "jellyfish", "katydid", "ladybug", "moth", "nymph",
  "octopus", "praying", "queen", "roach", "scorpion", "termite", "urchin", "viper",
  "wasp", "xerces", "yellowjacket", "zebrafish", "azure", "blue", "cyan", "denim",
  "emerald", "fuchsia", "gold", "honeydew", "indigo", "jade", "khaki", "lavender",
  "magenta", "navy", "orange", "pink", "quartz", "red", "sapphire", "turquoise",
  "ultramarine", "violet", "white", "xanadu", "yellow", "zaffre"
];
let hardWords = ["Pneumonoultramicroscopicsilicovolcanoconiosis", // 45 letters
"Floccinaucinihilipilification", // 29 letters
"Antidisestablishmentarianism", // 28 letters
"Honorificabilitudinitatibus", // 27 letters
"Supercalifragilisticexpialidocious", // 34 letters
"Pseudopseudohypoparathyroidism", // 30 letters
"Dichlorodiphenyltrichloroethane", // 31 letters
"Incomprehensibilities", // 21 letters
"Hippopotomonstrosesquippedaliophobia", // 36 letters
"Spectrophotofluorometrically", // 28 letters
"Pseudomyxomatoperitoneum", // 23 letters
"Psychoneuroimmunology", // 23 letters
"Hepaticocholangiogastrostomy", // 28 letters
"Pneumoencephalographically", // 26 letters
"Radioimmunoelectrophoresis", // 25 letters
"Psychophysicotherapeutics", // 25 letters
"Chlorofluoromethane", // 20 letters
"Chlortetracycline", // 17 letters
"Pararosaniline", // 13 letters
"Aminomethane" // 12 letters
]

// Initialize a score and time variable
let score = -1;
let time = 10;

// Initialized randomWord variable
let randomWord;

// Focuses on the input box
text.focus();

// getRandomWord() Function: returns random word from array when called
function getRandomWord() {
  if (difficulty == "hard"){
    return hardWords[Math.floor(Math.random() * hardWords.length)];
  }
  else{
    return words[Math.floor(Math.random() * words.length)];
  }
  
}

function getRandomVerb() {
  return verbs[Math.floor(Math.random() * verbs.length)];
  
}

// Settings select
let difficulty = "easy";

settingsForm.addEventListener('change', e => {
  difficulty = e.target.value;
});

// FUNCTIONS

// Create a function that displays a random word to the webpage. Use the 'randomWord' variable to store to word.
function addWordToDOM() {
  randomWord1 = getRandomWord();
  randomWord = "The" + " " + randomWord1 + " " + getRandomVerb() + "."
  document.getElementById('word').textContent = randomWord;
}

// Create a function that increments the score and displays it to the webpage.
function updateScore() {
  score++;
  scoreEl.textContent = "Score: "+score
}

// Create a function to display the score and game over screen.
function gameOver() {
  endgameEl.style.display = "block"
  finalScore.textContent= "Final Score: "+ score
  console.log("b4 if");
  if (score > Number(highscorevar)){
    console.log("in if");
    highscorevar = score
    highscoreString = highscorevar.toString()
    localStorage.setItem("highscorevar", highscoreString)
    highscore.textContent = "High Score: "+ highscorevar
  }
  else{

    highscore.textContent = "High Score: "+ highscorevar
  }
}

// Create a function that decrements the time and displays it to the webpage.
function updateTime() {
  time--;
  timeEl.textContent = `Time: ${time}s`;

  if(time <= 0) {
    clearInterval(timeInterval);
    gameOver();
   
  }
}

// Create a 'timeInterval' variable that updates the time every 1 second.
let timeInterval = setInterval(updateTime, 1000);

// Call a function to display the first word to the webpage.
addWordToDOM()
updateScore()

// EVENT LISTENERS

// This event listener listens for an input in the text box and when triggered, passes in the event as a variable 'e' and stores the user's inputed text in a variable 'insertedText'.
text.addEventListener("input", (e) => {
  const insertedText = e.target.value;
  if (insertedText == randomWord || e.inputType === 'insertText' && e.data === '`'){
    if (score == 100){
      alert("Congrats! You made it to 100!")
    }
    addWordToDOM()
    updateScore()
    e.target.value = ""

    if(difficulty === 'hard') {
      time += 15;

    } else if(difficulty === 'medium') {
      time += 8;
    } else {
      time += 10;
    }

    updateTime()
  }
});
