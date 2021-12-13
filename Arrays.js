// an example sentence a destructive noun will destructive verb sentence while normal verb at normal time/space

//Create word arrays
let des_noun = ["honey", "a newspaper", "a fridge", "an opinion", "an audience", "a student", "a passion", "a football", "a celebration", "an alcohol", "a rock", "a poison", "a revolution", "a piano","a knife", "a ying", "a dotty", "a wife", "a girlfriend", "a contract", "an error"];
// ...while...
let des_verb = ["tear", "lacerate", "ravage", "decimate","subvert", "extort", "sabotage", "jeapordize", "decapitate", "bludgeon", "gut", "slaughter", "invigorate", "enhance", "boost", "aid", "rip", "hack", "pummel", "slash", "award", "champion", "disturb", "desire", "endanger", "threaten", "divide"];

//... you, while you are ...
let norm_verb = ["sitting down", "chilling", "relaxing", "stressing", "running", "working", "wrestling", "arguing", "reading", "writing", "talking on the phone", "drinking", "smoking", "dying", "scrolling social media", "browsing", "cycling", "skiing", "watching a movie", "kissing", "sleeping", "laying down", "hugging a friend", "billing"];
//...at... [time/place]
let time_place = ["sunrise", "sunset", "dusk", "dawn", "midday", "Christmas dinner", "Eid prayer", "home", "work", "Diwali", "mum's house", "a restuarant", "3:00am", "the Summer Solstice", "the Winter Solstice", "an Equinox", "the club", "a cafe", "a market", "New Years'", "the Earth's edge", "the Gulf of Arabia", "a seminar", "mount Everest"]

let rand_arr = [des_noun[Math.floor(Math.random()*des_noun.length)],des_verb[Math.floor(Math.random()*des_verb.length)], norm_verb[Math.floor(Math.random()*norm_verb.length)], time_place[Math.floor(Math.random()*time_place.length)] ];

console.log(`${rand_arr[0]} will ${rand_arr[1]} you while you are ${rand_arr[2]} at ${rand_arr[3]}`);

