function shout(string) {
  return string.toUpperCase();
}
"Hello!".toUpperCase();

function whisper(string) {
  return string.toLowerCase();
}
"Hello!".toLowerCase();

function logShout(string) {
  console.log(string.toUpperCase());
}

"Hello!".toUpperCase();

function logWhisper(string) {
  console.log(string.toLowerCase());
}

"Hello!".toLowerCase();



  function sayHiToHeadphonedRoommate(string) {
    if (string.toUpperCase() === string) {
      return "YES INDEED!";
    } else if (string === "Let's have dinner together!") {
      return "I would love to!";
    } else {
      return "I can't hear you!";
    }
  }
const string = "Hello!";

console.log(string);
console.log(string.toUpperCase());

string === string.toUpperCase();
