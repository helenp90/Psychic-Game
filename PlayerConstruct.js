var inquirer = require("inquirer");

function Player(name, position, offense, defense) {
    this.name = name;
    this.position = position;
    this.offense = offense;
    this.defense = defense;


    this.goodGame = function () {
        console.log(Player.offense + 1)
    };

    this.badGame = function () {
        console.log(Player.offense - 1)
    };
}

Player.prototype.printStats = function () {
    console.log("Name: " + this.name + "\nPosition: " + this.position +
        "\nOffense: " + this.offense + "\nDefense: " + this.language);
    console.log("---------------");
};

var count = 0;

//Where we'll store the starters
var PlayersArray = [];

var buildPlayerList = function () {
    if (count < 8) {
        console.log("You added a player!");
        inquire.prompt([{
                name: "name",
                message: "What is your name?"
            }, {
                name: "position",
                message: "Are you a starter or a benchwarmer?"
            }, {
                name: "Offense",
                message: "How offensive are you between 1 and 10?"
            }, {
                name: "Defense",
                message: "How defensive are you between 1 and 10?"
            }

        ]).then(function(answers){
            var newPlayer = new Player(
                answers.name,
                answers.position,
                answers.offense,
                answers.defense);
                
                startingPlayersArray.push(newPlayer);
                
                count++;

                buildPlayerList();
        });
    }
    else {
        for(var x =0; x < PlayersArray.length; x++) {
            PlayersArray[x].printStats();
        }
    }
};
buildPlayerList();

//Game

var dice1= 0;

function rollDice1 (dice1) {
    Math.floor(Math.random() * 20);
  }

  var dice2 = 0;

  function rollDice1 (dice2) {
    Math.floor(Math.random() * 20);
  }

  
