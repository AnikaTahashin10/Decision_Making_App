const points = [
  "You may rely on it",
  "Most likely",
  "You know what, m not sure either",
  "Yes you should!",
  "Better not to tell you now",
  "Take some rest",
  "Think again and then ask me",
  "My reply is no",
  "Focus on the positive",
  "Listen to you heart",
  "Go take a nap",
];
document.getElementById("response").innerHTML=points;

function myFunction(){
  points.sort(function(a,b){return 0.5 - Math.random()});
  document.getElementById("response").innerHTML=points[0];
  document.getElementById("response").style.fontSize="18px";
  setTimeout(timeup, 4000);

  function timeup(){
      document.getElementById("response").innerHTML="Ask again!";
      document.getElementById("response").style.fontSize ="40px";
      document.getElementById("clear").value="";
  }
}