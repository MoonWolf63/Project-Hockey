function choicer(array){
    var copy = array.slice(0);
    return function() {
      if (copy.length < 1) { copy = array.slice(0); }
      var index = Math.floor(Math.random() * copy.length);
      var item = copy[index];
      copy.splice(index, 1);
      return item;
    };
}

function matchstart() {
    console.log("Game has started!");
    let teamfirst = Math.floor(Math.random() * (2-0)) + 0;

    if (teamfirst == 0) {
        console.log("The " + team1 + " have taken the lead winning the first faceoff.")
    } else {
        console.log("The " + team2 + " have taken the lead winning the first faceoff.")
    }
}

function gameactive() {
    if (gametrue == true){
    let hockeygame = Math.floor(Math.random() * (2-0)) + 0;
    if (hockeygame == 0){
        console.log("The " + team1 + " have taken it to the enemies end and begin to shoot");
        let shooter = Math.floor(Math.random() * (10-0)) + 0;
if (shooter > 6){
    let scoreanim = Math.floor(Math.random() * (3-0)) + 0;
    if (scoreanim == 0){
        console.log(team1scoremsg[0]);
    } else if (scoreanim == 1) {
        console.log(team1scoremsg[1]);
    } else if(scoreanim == 2) {
        console.log(team1scoremsg[2]);
    }
    team1score = team1score + 1;
    console.log("The score is now " + team1score + " to " + team2score);
    setTimeout(gameactive, 20000, 'funky');
} else {
    let loseanim = Math.floor(Math.random() * (7-0)) + 0;
    if (loseanim == 0){
        console.log(team1losemsg[0]); 
    } else if (loseanim == 1){
        console.log(team1losemsg[1]);
    } else if (loseanim == 2){
        console.log(team1losemsg[2]);
    } else if (loseanim == 3){
        console.log(team1losemsg[3]);
    } else if (loseanim == 4){
        console.log(team1losemsg[4]);
    } else if (loseanim == 5) {
        console.log(team1losemsg[5]);
    } else if (loseanim == 6) {
        console.log(team1losemsg[6]);
    }

    setTimeout(gameactive, 20000, 'funky');
}
    } else {
        console.log("The " + team2 + " have taken it to the enemies end and begin to shoot");
        let shooter = Math.floor(Math.random() * (10-0)) + 0;
if (shooter > 6){
    let scoreanim = Math.floor(Math.random() * (3-0)) + 0;
    if (scoreanim == 0){
        console.log(team2scoremsg[0]);
    } else if (scoreanim == 1) {
        console.log(team2scoremsg[1]);
    } else if(scoreanim == 2) {
        console.log(team2scoremsg[2]);
    }
    team2score = team2score + 1;
    console.log("The score is now " + team1score + " to " + team2score);
    setTimeout(gameactive, 20000, 'funky');
} else {
    let loseanim = Math.floor(Math.random() * (7-0)) + 0;
    if (loseanim == 0){
        console.log(team2losemsg[0]); 
    } else if (loseanim == 1){
        console.log(team2losemsg[1]);
    } else if (loseanim == 2){
        console.log(team2losemsg[2]);
    } else if (loseanim == 3){
        console.log(team2losemsg[3]);
    } else if (loseanim == 4){
        console.log(team2losemsg[4]);
    } else if (loseanim == 5) {
        console.log(team2losemsg[5]);
    } else if (loseanim == 6) {
        console.log(team2losemsg[6]);
    }
    setTimeout(gameactive, 20000, 'funky');
}
    }
}
}


const teams = choicer(['Wolves','Dragons','Shields','Swords','Tigers','Sharks','Foxes','Bears','Eagles','Oceans','Tropicals','Trains']);

var team1 = teams();
var team2 = teams();
var team2score = 0;
var team1score = 0;
var gametrue = true;
const team1scoremsg=['The ' + team1 + ' have gone behind the net, passed it to another player and scored with a slapshot','The ' + team1 + ' have a breakaway and score','The ' + team1 + ' have shot at the goal and scored with a poke check at the puck'];
const team1losemsg=['The ' + team1 + ' have gone behind the net and get checked by the other team','The ' + team1 + ' have passed it to another player and got checked by the other team and have gotten the puck stolen','The ' + team1 + ' have passed it to another player and missed getting the puck stolen','The ' + team1 + ' have made a shot on the goal and had it caught by the goalie', 'The ' + team1 + ' have made a shot on the goal and hit the crossbar',' The ' + team1 + ' have made a shot on the goal and hit the wall instead','The ' + team1 + ' have made a shot on the goal but instead hit another player in the chest'];
const team2scoremsg=['The ' + team2 + ' have gone behind the net, passed it to another player and scored with a slapshot','The ' + team2 + ' have a breakaway and score','The ' + team2 + ' have shot at the goal and scored with a poke check at the puck'];
const team2losemsg=['The ' + team2 + ' have gone behind the net and get checked by the other team','The ' + team2 + ' have passed it to another player and got checked by the other team and have gotten the puck stolen','The ' + team2 + ' have passed it to another player and missed getting the puck stolen','The ' + team2 + ' have made a shot on the goal and had it caught by the goalie', 'The ' + team2 + ' have made a shot on the goal and hit the crossbar',' The ' + team2 + ' have made a shot on the goal and hit the wall instead','The ' + team2 + ' have made a shot on the goal but instead hit another player in the chest'];


console.log("Upcoming match: The " + team1 + " vs The " + team2 + "!")
matchstart();
 var timer = setTimeout(function() {
    round = round + 1
    if (round > 3) {
        if (team1score > team2score) {
console.log("The " + team1 + " have won the match with a score of " + team1score);
        } else {
            console.log("The " + team2 + " have won the match with a score of " + team2score);
        }
    } else {
        timer.clearTimeout();
    }
}, 600000);
setTimeout(gameactive, 20000, 'funky');