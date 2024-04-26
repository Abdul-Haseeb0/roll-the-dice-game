var images = [
    {
        img : "imgs/dice-01.svg",
        num : "1"
    },
    {
        img : "imgs/dice-02.svg",
        num : "2"
    },
    {
        img : "imgs/dice-03.svg",
        num : "3"
    },
    {
        img : "imgs/dice-04.svg",
        num : "4"
    },
    {
        img : "imgs/dice-05.svg",
        num : "5"
    },
    {
        img : "imgs/dice-06.svg",
        num : "6"
    },
];
   

var dice = document.querySelectorAll("img");
var ans = Math.floor(Math.random() * 11) + 2;
document.querySelector("#answer").textContent = ans;

var turnsLeft = 5;

function roll(){

    dice.forEach(function(die){
        die.classList.add("shake");
    });

    setTimeout(function(){
        dice.forEach(function(die){
            die.classList.remove("shake");
        });
    },
    1000
    );
    var diceOneValue = Math.floor(Math.random()*6);
    var diceTwoValue = Math.floor(Math.random()*6);
        console.log(diceOneValue,diceTwoValue);
        document.querySelector("#die-1").setAttribute("src", images[diceOneValue].img );
        document.querySelector("#die-2").setAttribute("src", images[diceTwoValue].img );
        var rollTotal = (diceOneValue + 1) + (diceTwoValue + 1);
        var totElement = document.querySelector("#total");
        totElement.innerHTML = "Your roll is " + rollTotal;

        if (rollTotal == ans) {
            setTimeout(function() {
                alert("Congratulations! You win!");
                setTimeout(function() {
                    location.reload();
                }, 800); 
            }, 800);
        }

        turnsLeft--;
        document.getElementById('turn-counter').textContent = turnsLeft;

        if (turnsLeft === 0) {
            setTimeout(function() {
                alert("You have no turns left!");
                setTimeout(function() {
                    location.reload();
                }, 800);
            }, 800);
        }
    };


    
