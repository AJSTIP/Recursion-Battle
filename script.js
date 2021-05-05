alert("Welcome to the Recursion Battle Click Ok and then the Begin Button to start!");
//#region
// var myArray = myText.split("");
// var loopTimer;

// function frameLooper() {
//     if (myArray.length > 0) {
//         document.getElementById("ingameText").innerHTML += myArray.shift();
//     } else {
//         clearTimeout(loopTimer);
//         return false;
//     }
//     loopTimer = setTimeout('frameLooper()', 65);
// }
// frameLooper();
var myText = "Greetings.  Are you ready to fight?";
var text = document.getElementById("ingameText");
TypeText({ text: myText, HTMLELM: text, speed: [50, 10] });

//#endregion

//#region
var enemies = [
  {
    Name: " Angry Peasent",
    " Enemy Type": " Commoner",
    " Special Ability": " None",
    " Hitpoints": 90.0,
    " Power": 10.0,
    " Dodge": 0.0,
    " Block": 1.0,
  },
  {
    Name: " Goblin",
    " Enemy Type": " Mystical",
    " Special Ability": " Goblin Formula",
    " Hitpoints": 125.0,
    " Power": 10.0,
    " Dodge": 2.0,
    " Block": 1.0,
  },
  {
    Name: " Knight",
    " Enemy Type": " Royal Army",
    " Special Ability": " None",
    " Hitpoints": 200.0,
    " Power": 10.0,
    " Dodge": 1.0,
    " Block": 3.0,
  },
  {
    Name: " Royal Army Commander",
    " Enemy Type": " Royal Army",
    " Special Ability": "None",
    " Hitpoints": 300.0,
    " Power": 10.0,
    " Dodge": 3.0,
    " Block": 4.0,
  },
  {
    Name: " Giant",
    " Enemy Type": " Final Boss",
    " Special Ability": " None",
    " Hitpoints": 500.0,
    " Power": 16.0,
    " Dodge": 4.0,
    " Block": 5.0,
  },
];

var heroes = [
  {
    Name: " Mage",
    " Enemy Type": " Soldier",
    " Special Ability": " White Magic",
    " Hitpoints": 250.0,
    " Power": 10.0,
    " Dodge": 4.0,
    " Block": 5.0,
  },
  {
    Name: " Brute",
    " Enemy Type": " Soldier",
    " Special Ability": " None",
    " Hitpoints": 300.0,
    " Power": 10.0,
    " Dodge": 5.0,
    " Block": 4.0,
  },
];
var pickedHero = Object.entries(heroes[Math.round(Math.random())]);
var pickedEnemy = Object.entries(enemies[Math.round(Math.random() * 4)]);
console.log(pickedHero + " // " + pickedEnemy);

//#endregion

//#region
function battleStart() {
  document.getElementById("gameBtn").disabled = true;
  const randomH = Math.floor(Math.random() * heroes.length);
  console.log(randomH, heroes[randomH]);
  const randomE = Math.floor(Math.random() * enemies.length);
  console.log(randomE, enemies[randomE]);

  var text = document.getElementById("ingameText");
  console.log(LineBlinker);
  LineBlink(false, text);
  console.log(LineBlinker);
  LineBlink(true, text);
  DeleteText({ HTMLELM: text, amount: 50, speed: [0, 0], att: "" });
  TypeText({
    text:
      "Hero: " +
      [...pickedHero].join("<br></br>") +
      "<br></br>" +
      '<hr style="border:1px solid white; margin:0px; width:600px"></hr>' +
      "<br></br>" +
      "Enemy: " +
      [...pickedEnemy].join("<br></br>"),
    HTMLELM: text,
    speed: [40, 10],
  });
  console.log(LineBlinker);
  // DeleteText({ HTMLELM: text, amount: 1, speed: [0, 0] });

  // document.getElementById("ingameText").innerHTML = "Hero: " +
  //     pickedHero + "<br></br>" + "Enemy: " + pickedEnemy;

  document.getElementById("gameBtn").style.visibility = "hidden";
  document.getElementById("continueGameBtn").style.visibility = "visible";
}

var heroMultiplier = 0.0;
var enemyMultiplier = 0.0;
var totalEnemyDamage = 0.0;
var totalHeroDamage = 0.0;
var remainingHeroHealth = pickedHero[3][1] - totalEnemyDamage;
var remainingEnemyHealth = pickedEnemy[3][1] - totalHeroDamage;

function rollDice() {
  var heroMultiplier = Math.floor(Math.random() * 10) + 1;
  console.log("Hero Rolled a: " + heroMultiplier);

  var enemyMultiplier = Math.floor(Math.random() * 10) + 1;
  console.log("Enemy Rolled a: " + enemyMultiplier);

  totalHeroDamage = heroMultiplier * 10;
  console.log("Hero does " + totalHeroDamage + " Damage");

  totalEnemyDamage = enemyMultiplier * 10;
  console.log("Enemy does " + totalEnemyDamage + " Damage");

  var text = document.getElementById("ingameText");
  // console.log(LineBlinker);
  LineBlink(false, text);
  // console.log(LineBlinker);
  DeleteText({ HTMLELM: text, amount: 500, speed: [0, 0], att: "" });
  TypeText({
    text:
      "Hero Rolled a: " +
      heroMultiplier +
      "<br></br>" +
      "The Hero Does " +
      totalHeroDamage +
      " Damage" +
      "<br></br>" +
      "<br></br>" +
      "Enemy Rolled a: " +
      enemyMultiplier +
      "<br></br>" +
      "The Enemy Does " +
      totalEnemyDamage +
      " Damage" +
      "<br></br>" +
      '<hr style="border:1px solid white; margin:0px; width:600px"></hr>' +
      "<br></br>" +
      pickedHero[0][1] +
      " has " +
      remainingHeroHealth +
      " Health..." +
      "<br></br>" +
      pickedEnemy[0][1] +
      " has " +
      remainingEnemyHealth +
      " Health...",
    HTMLELM: text,
    speed: [75, 10],
  });
  console.log(orig);

  // document.getElementById("ingameText").innerHTML = "Hero Rolled a: " + heroMultiplier + "<br></br>" + "The Hero Does " + totalHeroDamage + " Damage" + "<br></br>" + "<br></br>" + "Enemy Rolled a: " + enemyMultiplier + "<br></br>" + "The Enemy Does " + totalEnemyDamage + " Damage" + "<br></br>" + '<hr style="border:1px solid limegreen; margin:0px; width:600px"></hr>' + "<br></br>" + pickedHero[0][1] + " has " + remainingHeroHealth + " Health..." + "<br></br>" + pickedEnemy[0][1] + " has " + remainingEnemyHealth + " Health...";
}

function continueBattle() {
  document.getElementById("continueGameBtn").disabled = true;
  console.log("Hero has " + remainingHeroHealth + " health left.");
  console.log("Enemy has " + remainingEnemyHealth + " health left.");

  function remainingHealth() {
    if (remainingEnemyHealth > 0 && remainingHeroHealth > 0) {
      console.log((remainingEnemyHealth -= totalHeroDamage));
      console.log((remainingHeroHealth -= totalEnemyDamage));
      if (remainingHeroHealth < 0) remainingHeroHealth = 0;
      if (remainingEnemyHealth < 0) remainingEnemyHealth = 0;
    } else if (remainingHeroHealth == 0) {
      var text = document.getElementById("ingameText");
      // console.log(LineBlinker);
      LineBlink(false, text);
      // console.log(LineBlinker);
      DeleteText({ HTMLELM: text, amount: 500, speed: [0, 0], att: "" });
      TypeText({
        text:
          '<h1 class="endGame">Game Over, you\'ve lost.</h1>' +
          '<button style="border: 1px solid white; height: 100px; width: 200px;"  onclick="location.reload();">Restart Game</button>',
        HTMLELM: text,
        speed: [75, 10],
        att: "",
      });
      console.log(orig);
      // document.getElementById("ingameText").innerHTML = '<h1 class="endGame">Game Over, you\'ve lost.</h1>' + '<button style="border: 1px solid limegreen; height: 100px; width: 200px;"  onclick="location.reload();">Restart Game</button>';
    } else if (remainingEnemyHealth == 0) {
      var text = document.getElementById("ingameText");
      // console.log(LineBlinker);
      LineBlink(false, text);
      // console.log(LineBlinker);
      DeleteText({ HTMLELM: text, amount: 500, speed: [0, 0], att: "" });
      TypeText({
        text:
          '<h1 class="endGame">You\'ve won the battle, great job warrior.</h1>' +
          '<button style="border: 1px solid white; height: 100px; width: 200px;" onclick="location.reload();">Restart Game</button>',
        HTMLELM: text,
        speed: [75, 10],
        att: "",
        delay: 2000,
      });
      // document.getElementById("ingameText").innerHTML = '<h1 class="endGame">You\'ve won the battle, great job warrior.</h1>' + '<button style="border: 1px solid limegreen; height: 100px; width: 200px;" onclick="location.reload();">Restart Game</button>';
    }
  }
  remainingHealth();

  document.getElementById("continueGameBtn").disabled = false;
}

//#endregion
