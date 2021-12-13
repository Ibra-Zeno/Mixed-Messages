// an example sentence: a major operation will go wrong
//  a stone will land on your head during peacetime
//  a trustworthy ally will stab you in the back during a shit
// a destructive noun will destructive verb sentence while normal verb at normal time/space

//Create word arrays
let des_noun = ["honey", "a newspaper", "a fridge", "an opinion", "an audience", "a student", "a passion", 
                "a football", "a celebration", "an alcohol", "a rock", "a poison", "a revolution", "a piano",
                "a knife", "a ying", "a dotty", "a wife", "a girlfriend", "a contract", "an error"];
// des_nous.length = 21;

// ...will...


let des_verb = ["tear", "lacerate", "ravage", "decimate","subvert", "extort", "sabotage", "jeapordize", "decapitate", "bludgeon", "gut", "slaughter", "invigorate", "enhance", "boost", "aid", "rip", "hack", "pummel", "slash", "award", "champion", "disturb", "desire", "endanger", "threaten", "divide"];
// des_verb.length = 27

//... you, while you are ...
let norm_verb = ["sitting down", "chilling", "relaxing", "stressing", "running", "working", "wrestling", "arguing", "reading", "writing", "talking on the phone", "drinking", "smoking", "dying", "scrolling social media", "browsing", "cycling", "skiing", "watching a movie", "kissing", "sleeping", "laying down", "hugging a friend", "billing"];
// norm_verb.length = 24
//...at... [time/place]
let time_place = ["sunrise", "sunset", "dusk", "dawn", "midday", "Christmas dinner", "Eid prayer", "home", "work", "Diwali", "mum's house", "a restuarant", "3:00am", "the Summer Solstice", "the Winter Solstice", "an Equinox", "the club", "a cafe", "a market", "New Years'", "the Earth's edge", "the Gulf of Arabia", "a seminar"]
// time_place.length = 23; 
let arr_of_arr = [des_noun, des_verb, norm_verb, time_place];
let rand_arr = [des_noun[Math.floor(Math.random()*des_noun.length)],des_verb[Math.floor(Math.random()*des_verb.length)], norm_verb[Math.floor(Math.random()*norm_verb.length)], time_place[Math.floor(Math.random()*time_place.length)] ];
//console.log(rand_arr);

console.log(`${rand_arr[0]} will ${rand_arr[1]} you while you are ${rand_arr[2]} at ${rand_arr[3]}`);

