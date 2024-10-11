// For each variable, select the HTML element needed
// import firebase from "firebase/compat/app";
// import "firebase/firestore";
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-app.js";
import { getFirestore,addDoc, collection, setDoc, doc, getDoc, getDocs } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-firestore.js";
const firebaseConfig = {
  apiKey: "AIzaSyDEW3s_S7DvnHRYgeFsYaJZDPROElaqoZE",
  authDomain: "login-3ca39.firebaseapp.com",
  projectId: "login-3ca39",
  storageBucket: "login-3ca39.appspot.com",
  messagingSenderId: "1070814002897",
  appId: "1:1070814002897:web:d34cacd433fd4def288ff0",
  measurementId: "G-8X8JBK0VFS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

const settingsForm = document.getElementById('settings-form');
const word= document.getElementById('word');
const text= document.getElementById('text');
const scoreEl= document.getElementById('score-container');
const timeEl= document.getElementById('time-container');
const endgameEl= document.getElementById('end-game-container');
const highscore= document.getElementById('highscore');
const finalScore= document.getElementById('finalscore');
const difficultyOption = document.getElementById("difficulty")
var highscorevar = 0
let difficulty = "easy";
await hi()

console.log(settingsForm);

console.log(sessionStorage.getItem("email"))

// TODO: Replace the following with your app's Firebase project configuration
// See: https://support.google.com/firebase/answer/7015592


async function setScore(score){
try {
  const docRef = await setDoc(doc(db, "scores",sessionStorage.getItem("email") ), {
    score : score,
  });

  console.log("Document written ");
} catch (e) {
  console.error("Error adding document: ", );
}
}



async function hi(){
  console.log("hi")
const docRef = doc(db, "scores", sessionStorage.getItem("email"));
console.log(docRef)
difficulty = sessionStorage.getItem("difficulty");

if (!(typeof difficulty !== 'undefined' && difficulty !== null)){
  console.log("Setting high score to 0");
  difficulty = "easy"
}
console.log(difficulty);


if (difficulty == "easy"){
  difficultyOption.options.selectedIndex = 0
}
else if (difficulty == "medium"){
  difficultyOption.options.selectedIndex = 1
}
else{
  difficultyOption.options.selectedIndex = 2
}

const docSnap = await getDoc(docRef);
if (docSnap.exists()) {
  console.log("got doc")
  var test =  docSnap.data().score;
  highscorevar = test
  return test
} else {
  // docSnap.data() will be undefined in this case
  console.log("No such document!");
  await setDoc(docRef, {score: 0})
}
highscorevar = 0



return 0
}

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
var adj = ["aback","abaft","abandoned","abashed","aberrant","abhorrent","abiding","abject","ablaze","able","abnormal","aboard","aboriginal","abortive","abounding","abrasive","abrupt","absent","absorbed","absorbing","abstracted","absurd","abundant","abusive","acceptable","accessible","accidental","accurate","acid","acidic","acoustic","acrid","actually","ad","hoc","adamant","adaptable","addicted","adhesive","adjoining","adorable","adventurous","afraid","aggressive","agonizing","agreeable","ahead","ajar","alcoholic","alert","alike","alive","alleged","alluring","aloof","amazing","ambiguous","ambitious","amuck","amused","amusing","ancient","angry","animated","annoyed","annoying","anxious","apathetic","aquatic","aromatic","arrogant","ashamed","aspiring","assorted","astonishing","attractive","auspicious","automatic","available","average","awake","aware","awesome","awful","axiomatic","bad","barbarous","bashful","bawdy","beautiful","befitting","belligerent","beneficial","bent","berserk","best","better","bewildered","big","billowy","bite-sized","bitter","bizarre","black","black-and-white","bloody","blue","blue-eyed","blushing","boiling","boorish","bored","boring","bouncy","boundless","brainy","brash","brave","brawny","breakable","breezy","brief","bright","bright","broad","broken","brown","bumpy","burly","bustling","busy","cagey","calculating","callous","calm","capable","capricious","careful","careless","caring","cautious","ceaseless","certain","changeable","charming","cheap","cheerful","chemical","chief","childlike","chilly","chivalrous","chubby","chunky","clammy","classy","clean","clear","clever","cloistered","cloudy","closed","clumsy","cluttered","coherent","cold","colorful","colossal","combative","comfortable","common","complete","complex","concerned","condemned","confused","conscious","cooing","cool","cooperative","coordinated","courageous","cowardly","crabby","craven","crazy","creepy","crooked","crowded","cruel","cuddly","cultured","cumbersome","curious","curly","curved","curvy","cut","cute","cute","cynical","daffy","daily","damaged","damaging","damp","dangerous","dapper","dark","dashing","dazzling","dead","deadpan","deafening","dear","debonair","decisive","decorous","deep","deeply","defeated","defective","defiant","delicate","delicious","delightful","demonic","delirious","dependent","depressed","deranged","descriptive","deserted","detailed","determined","devilish","didactic","different","difficult","diligent","direful","dirty","disagreeable","disastrous","discreet","disgusted","disgusting","disillusioned","dispensable","distinct","disturbed","divergent","dizzy","domineering","doubtful","drab","draconian","dramatic","dreary","drunk","dry","dull","dusty","dynamic","dysfunctional","eager","early","earsplitting","earthy","easy","eatable","economic","educated","efficacious","efficient","eight","elastic","elated","elderly","electric","elegant","elfin","elite","embarrassed","eminent","empty","enchanted","enchanting","encouraging","endurable","energetic","enormous","entertaining","enthusiastic","envious","equable","equal","erect","erratic","ethereal","evanescent","evasive","even excellent excited","exciting exclusive","exotic","expensive","extra-large extra-small exuberant","exultant","fabulous","faded","faint fair","faithful","fallacious","false familiar famous","fanatical","fancy","fantastic","far"," far-flung"," fascinated","fast","fat faulty","fearful fearless","feeble feigned","female fertile","festive","few fierce","filthy","fine","finicky","first"," five"," fixed"," flagrant","flaky","flashy","flat","flawless","flimsy"," flippant","flowery","fluffy","fluttering"," foamy","foolish","foregoing","forgetful","fortunate","four frail","fragile","frantic","free"," freezing"," frequent"," fresh"," fretful","friendly","frightened frightening full fumbling functional","funny","furry furtive","future futuristic","fuzzy ","gabby","gainful","gamy","gaping","garrulous","gaudy","general gentle","giant","giddy","gifted","gigantic","glamorous","gleaming","glib","glistening glorious","glossy","godly","good","goofy","gorgeous","graceful","grandiose","grateful gratis","gray greasy great","greedy","green grey grieving","groovy","grotesque","grouchy","grubby gruesome","grumpy","guarded","guiltless","gullible gusty","guttural H habitual","half","hallowed","halting","handsome","handsomely","handy","hanging","hapless","happy","hard","hard-to-find","harmonious","harsh","hateful","heady","healthy","heartbreaking","heavenly heavy hellish","helpful","helpless","hesitant","hideous high","highfalutin","high-pitched","hilarious","hissing","historical","holistic","hollow","homeless","homely","honorable","horrible","hospitable","hot huge","hulking","humdrum","humorous","hungry","hurried","hurt","hushed","husky","hypnotic","hysterical","icky","icy","idiotic","ignorant","ill","illegal","ill-fated","ill-informed","illustrious","imaginary","immense","imminent","impartial","imperfect","impolite","important","imported","impossible","incandescent","incompetent","inconclusive","industrious","incredible","inexpensive","infamous","innate","innocent","inquisitive","insidious","instinctive","intelligent","interesting","internal","invincible","irate","irritating","itchy","jaded","jagged","jazzy","jealous","jittery","jobless","jolly","joyous","judicious","juicy","jumbled","jumpy","juvenile","kaput","keen","kind","kindhearted","kindly","knotty","knowing","knowledgeable","known","labored","lackadaisical","lacking","lame","lamentable","languid","large","last","late","laughable","lavish","lazy","lean","learned","left","legal","lethal","level","lewd","light","like","likeable","limping","literate","little","lively","lively","living","lonely","long","longing","long-term","loose","lopsided","loud","loutish","lovely","loving","low","lowly","lucky","ludicrous","lumpy","lush","luxuriant","lying","lyrical","macabre","macho","maddening","madly","magenta","magical","magnificent","majestic","makeshift","male","malicious","mammoth","maniacal","many","marked","massive","married","marvelous","material","materialistic","mature","mean","measly","meaty","medical","meek","mellow","melodic","melted","merciful","mere","messy","mighty","military","milky","mindless","miniature","minor","miscreant","misty","mixed","moaning","modern","moldy","momentous","motionless","mountainous","muddled","mundane","murky","mushy","mute","mysterious","naive","nappy","narrow","nasty","natural","naughty","nauseating","near","neat","nebulous","necessary","needless","needy","neighborly","nervous","new","next","nice","nifty","nimble","nine","nippy","noiseless","noisy","nonchalant","nondescript","nonstop","normal","nostalgic","nosy","noxious","null","numberless","numerous","nutritious","nutty","oafish","obedient","obeisant","obese","obnoxious","obscene","obsequious","observant","obsolete","obtainable","oceanic","odd","offbeat","old","old-fashioned","omniscient","one","onerous","open","opposite","optimal","orange","ordinary","organic","ossified","outgoing","outrageous","outstanding","oval","overconfident","overjoyed","overrated","overt","overwrought","painful","painstaking","pale","paltry","panicky","panoramic","parallel","parched","parsimonious","past","pastoral","pathetic","peaceful","penitent","perfect","periodic","permissible","perpetual","petite","petite","phobic","physical","picayune","pink","piquant","placid","plain","plant","plastic","plausible","pleasant","plucky","pointless","poised","polite","political","poor","possessive","possible","powerful","precious","premium","present","pretty","previous","pricey","prickly","private","probable","productive","profuse","protective","proud","psychedelic","psychotic","public","puffy","pumped","puny","purple","purring","pushy","puzzled","puzzling","quack","quaint","quarrelsome","questionable","quick","quickest","quiet","quirky","quixotic","quizzical","rabid","racial","ragged","rainy","rambunctious","rampant","rapid","rare","raspy","ratty","ready","real","rebel","receptive","recondite","red","redundant","reflective","regular","relieved","remarkable","reminiscent","repulsive","resolute","resonant","responsible","rhetorical","rich","right","righteous","rightful","rigid","ripe","ritzy","roasted","robust","romantic","roomy","rotten","rough","round","royal","ruddy","rude","rural","rustic","ruthless","sable","sad","safe","salty","same","sassy","satisfying","savory","scandalous","scarce","scared","scary","scattered","scientific","scintillating","scrawny","screeching","second","second-hand","secret","secretive","sedate","seemly","selective","selfish","separate","serious","shaggy","shaky","shallow","sharp","shiny","shivering","shocking","short","shrill","shut","shy","sick","silent","silent","silky","silly","simple","simplistic","sincere","six","skillful","skinny","sleepy","slim","slimy","slippery","sloppy","slow","small","smart","smelly","smiling","smoggy","smooth","sneaky","snobbish","snotty","soft","soggy","solid","somber","sophisticated","sordid","sore","sore","sour","sparkling","special","spectacular","spicy","spiffy","spiky","spiritual","spiteful","splendid","spooky","spotless","spotted","spotty","spurious","squalid","square","squealing","squeamish","staking","stale","standing","statuesque","steadfast","steady","steep","stereotyped","sticky","stiff","stimulating","stingy","stormy","straight","strange","striped","strong","stupendous","stupid","sturdy","subdued","subsequent","substantial","successful","succinct","sudden","sulky","super","superb","superficial","supreme","swanky","sweet","sweltering","swift","symptomatic","synonymous","taboo","tacit","tacky","talented","tall","tame","tan","tangible","tangy","tart","tasteful","tasteless","tasty","tawdry","tearful","tedious","teeny","teeny-tiny","telling","temporary","ten","tender tense","tense","tenuous","terrible","terrific","tested","testy","thankful","therapeutic","thick","thin","thinkable","third","thirsty","thoughtful","thoughtless","threatening","three","thundering","tidy","tight","tightfisted","tiny","tired","tiresome","toothsome","torpid","tough","towering","tranquil","trashy","tremendous","tricky","trite","troubled","truculent","true","truthful","two","typical","ubiquitous","ugliest","ugly","ultra","unable","unaccountable","unadvised","unarmed","unbecoming","unbiased","uncovered","understood","undesirable","unequal","unequaled","uneven","unhealthy","uninterested","unique","unkempt","unknown","unnatural","unruly","unsightly","unsuitable","untidy","unused","unusual","unwieldy","unwritten","upbeat","uppity","upset","uptight","used","useful","useless","utopian","utter","uttermost","vacuous","vagabond","vague","valuable","various","vast","vengeful","venomous","verdant","versed","victorious","vigorous","violent","violet","vivacious","voiceless","volatile","voracious","vulgar","wacky","waggish","waiting","","wakeful","wandering","wanting","warlike","warm","wary","wasteful","watery","weak","wealthy","weary","well-groomed","well-made","well-off","well-to-do","wet","whimsical","whispering","white","whole","wholesale","wicked","wide","wide-eyed","wiggly","wild","willing","windy","wiry","wise","wistful","witty","woebegone","womanly","wonderful","wooden","woozy","workable","worried","worthless","wrathful","wretched","wrong","wry","xenophobic","yellow","yielding","young","youthful","yummy","zany","zealous","zesty","zippy","zonked"];
let adv = ["finally", "additionally", "interestingly", "recently", "importantly", "similarly", "surprisingly", "specifically", "conversely", "consequently", "collectively", "currently", "accordingly", "notably", "subsequently", "previously", "unfortunately", "remarkably", "unexpectedly", "lastly", "strikingly", "secondly", "alternatively", "intriguingly", "generally", "firstly", "italy", "consistently", "initially", "significantly", "traditionally", "ultimately", "histologically", "particularly", "typically", "clinically", "mechanistically", "historically", "simultaneously", "paradoxically", "postoperatively", "concomitantly", "correspondingly", "globally", "presently", "especially", "functionally", "usually", "concurrently", "ideally", "thirdly", "apparently", "immunohistochemically", "microscopically", "clearly", "july", "eventually", "crucially", "fortunately", "occasionally", "increasingly", "histopathologically", "critically", "rarely", "namely", "totally", "normally", "briefly", "theoretically", "frequently", "morphologically", "intraoperatively", "presumably", "actually", "curiously", "experimentally", "obviously", "ultrastructurally", "preoperatively", "conclusively", "classically", "cumulatively", "retrospectively", "commonly", "evidently", "inversely", "behaviorally", "conventionally", "noticeably", "possibly", "statistically", "contrarily", "grossly", "hopefully", "reciprocally", "potentially", "structurally", "essentially", "probably", "radiographically", "separately", "macroscopically", "individually", "physiologically", "biochemically", "lately", "nationally", "approximately", "quantitatively", "radiologically", "uniquely", "incidentally", "comparatively", "concordantly", "qualitatively", "basically", "broadly", "early", "sicily", "pathologically", "internationally", "conceivably", "phylogenetically", "conceptually", "contrastingly", "independently", "intuitively", "analogously", "annually", "equally", "primarily", "arguably", "certainly", "ironically", "originally", "undoubtedly", "mostly", "phenotypically", "family", "secondarily", "specially", "expectedly", "genetically", "prospectively", "encouragingly", "fourthly", "mathematically", "naturally", "worryingly", "unsurprisingly", "anatomically", "characteristically", "differently", "likely", "locally", "reportedly", "technically", "alternately", "respectively", "coincidentally", "counterintuitively", "immediately", "predictably", "unusually", "longitudinally"]
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
"Aminomethane", // 12 letters
"Skibidi" // 7 letters
]

// Initialize a score and time variable
let score = -1;
let time = 10;

// Initialized randomWord variable
let randomWord;

// Focuses on the input box
// text.focus();

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
function getRandomAdverb() {
  return adv[Math.floor(Math.random() * adv.length)];
  
}
function getRandomAdjective() {
  return adj[Math.floor(Math.random() * adj.length)];
  
}

// Settings select



settingsForm.addEventListener('change', e => {
  difficulty = e.target.value;
  sessionStorage.setItem("difficulty",difficulty)
  location.reload()
  
});

// FUNCTIONS

// Create a function that displays a random word to the webpage. Use the 'randomWord' variable to store to word.
function addWordToDOM() {
  let randomWord1 = getRandomWord();
  randomWord = "The" + " " + randomWord1 + " " + getRandomVerb() + ", " + getRandomAdverb() + " " + getRandomAdjective() + "."
  document.getElementById('word').textContent = randomWord;
}

// Create a function that increments the score and displays it to the webpage.
function updateScore() {
  if(difficulty == "hard"){
    score += 8
  }
  else if(difficulty == "medium"){
    score += 5
  }
  else{
    score += 2
  }


  score++;
  scoreEl.textContent = "Score: "+score
}



// Create a function to display the score and game over screen.
function gameOver() {
  endgameEl.style.display = "block"
  finalScore.textContent= "Final Score: "+ (score+1)

  if (score > Number(highscorevar)){
  
    highscorevar = score
    setScore(highscorevar)

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
      time = 5;

    } else if(difficulty === 'medium') {
      time += 8;
    } else {
      time += 10;
    }

    updateTime()
  }
});
async function getScoreboard(){
  const querySnapshot = await getDocs(collection(db, "scores"));
querySnapshot.forEach((doc) => {
  // doc.data() is never undefined for query doc snapshots
  console.log(doc.id, " => ", doc.data());
});
}