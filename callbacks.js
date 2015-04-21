# functions used in the egghead.io callbacks lesson

var welcomeMsg = function() {
    console.log("Welcome to the Great Underground Empire!");
}

var start = function(callback) {
    callback();
}

var look = function(dir) {
    if(dir === 'west') { console.log("There is a small mailbox here."); }
    if(dir === 'east') { console.log("You are standing next a white house."); }
}

var walk = function(dir) {
    if(dir === 'west') { console.log("It is very dark, you are likely to be eaten by a grue!"); }
    if(dir === 'south') { console.log("You are standing on the edge of a deep chasm."); }
}
