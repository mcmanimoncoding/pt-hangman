// create word list as array
var wordArr = ["random", "word", "examples"];

var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h',
          'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
          't', 'u', 'v', 'w', 'x', 'y', 'z'];
    


//choose a random word from wordArr

var randomWord = wordArr[Math.floor(Math.random() * wordArr.length)];

//global 

var a;
var count = 10;
var answerArray = [];
var lives = 10;
var guesses = [];


var buttons = function(){
    myButtons = $("buttons");
    letters = $("<div>");

    for (var i = 0; i < alphabet.length; i++){
        letters.id = "alphabet";
        list = $("<p>");
        list.addClass("letter");
        list.innerHTML = alphabet[i];
        $("#letter").attr("data-letter", alphabet[i]);
        check();
        myButtons.appendTo(letters);
        letters.appendTo(list);
        console.log(alphabet[i]);
    }
}
buttons();
// // OnClick Function
// check = function () {
//     list.onclick = function () {
//       var guess = (this.innerHTML);
//       this.setAttribute("class", "active");
//       this.onclick = null;
//       for (var i = 0; i < randomWord.length; i++) {
//         if (randomWord[i] === guess) {
//           answerArray[i].innerHTML = a;
//           counter += 1;
//         } 
//       }
//     //   var j = (randomWord.indexOf(guess));
//     //   if (j === -1) {
//     //     lives -= 1;
//         // comments();
//         // animate();
//     //   } else {
//         // comments();
//       }
//     }
  

// // create '-' to represent letters in chosen randomWord

// function startUp() {
//     for (var i = 0; i < randomWord.length; i++) {
//         answerArray[i] = "-";
//     }

//     //putting them in a string
//     a = answerArray.join(" ");
//     document.getElementById("answer").innerHTML = a;

//     buttons();
//     letter();
// };

// function letter() {
//     // var letter = document.getElementById("letter").value;
//     // onkeyup.letter(){
//     var letter = $(".letter").on("click", function(){
//         console.log(this.attr("data-letter"));

//     });
//     if (letter.length > 0) {
//         for (var i = 0; i < randomWord.length; i++) {
//             if (randomWord[i] === letter) {
//                 answerArray[i] = letter;
//             }
//         }
//         count--;
//         document.getElementById("counter").innerHTML = "No. of Clicks: " + count;
//         document.getElementById("answer").innerHTML = answerArray.join(" ");
//     }
//     // else{

//     // }
//     if (count<5){
//         document.getElementById("stat").innerHTML = "Why haven't you gotten it yet"
       
//     }
//     if (count>=9){
//         startUp();
//     }
//     checkWin();
// }

// document.onkeyup = function(event){


    
// }
//     // letter();



// function checkWin() {
//     if (answerArray.indexOf('-') === -1) {
//       alert('You Won!');
//     } else if (count === 0) {
//       alert('You Lost!');
//     }
//   }

