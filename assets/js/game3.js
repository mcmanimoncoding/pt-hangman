$(document).ready(function () {

    console.log("Javascript Loaded");
    // create word list as array
    var wordArr = ["random", "word", "examples"];

    const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h',
        'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
        't', 'u', 'v', 'w', 'x', 'y', 'z'
    ];
    var instructions = "<h2>Guess the Mystery Word</h2>"
    var wins = 0;
    var losses = 0;
    var guesses = 9;
    var guess = [];
    var a;
    var count = 10;
    var answerArray = [];
    var lives = 5;
    var letters = [];

    //choose a random word from wordArr

    var randomWord = wordArr[Math.floor(Math.random() * wordArr.length)];

    console.log(randomWord);

    $("win-display").html();

    var winsDisplay = document.getElementById("win-display");
    var livesDisplay = document.getElementById("lives-display");

    var myButtons = $("#button");
    var buttons = function () {

        for (var i = 0; i < alphabet.length; i++) {
            var letters = $("<button>");
            letters.attr("id", "letter");
            letters.attr("class", "btn btn-outline-primary btn-lg")
            letters.text(alphabet[i]);
            $("#buttons").append(letters);


        };
        // userGuess = $("")

        // var answer =

        // $("body").on(keyup, "#doc", function() {
        //     var userGuess = $("#doc");
        //     console.log(userGuess);
        // });


    };

    function hiddenAnswer() {
        for (var i = 0; i < randomWord.length; i++) {
            answerArray[i] = "-";
            //putting them in a string

            a = answerArray.join(" ");
            document.getElementById("answer").innerHTML = a;

        };
    };

    // function check(){
    //     myButtons.onclick = function(){
    //         var input = (this.innerHTML);
    //         this.setAttribute("class", "active");
    //         this.onlcick= null;
    //         for (var i = 0; i < randomWord.length; i++) {
    //             if (randomWord[i] === guess) {
    //               guess[i].innerHTML = input;
    //               counter += 1;
    //             } 

    //     }
    // }

    function letter() {

        $("button").on("click", function() {

        var letter = $("#letter").innerHTML;
            // console.log(letter);
            for (var i = 0; i < randomWord.length; i++) {
                if (randomWord[i] === letter) {
                    answerArray[i] = letter;
                };
            }
            count--;

            
            // document.getElementById("guesses-diplay") = ("No. of Clicks: " + count);
            // document.getElementById("answer").innerHTML = answerArray.join(" ");
        });
    };


    function display() {
        $("#instructions").html(instructions);
        $("#win-display").append(wins);
        $("#lives-display").append(lives);
        $("#guesses-display").append(guesses);
        console.log("display");

    };


    buttons();
    display();
    hiddenAnswer();
    $("letter").onclick = letter();



    // word array

    // letter array

    // global variables

    // create startup function that creates your answer array and sets values in the string = "-"
    // push them to a string id:"answer"
    // call the creation of buttons()


    // create buttons by pushing each index of const alphabet into an element
    // loop through the alphabet and assign an id tag
    //
})