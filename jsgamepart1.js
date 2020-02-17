//all universal declarations at the top
let vGame = prompt("Would you like to play a game?");
//First condition goes through yes scenario
if (vGame.toLowerCase() === "yes") {
  //Naming all declarations within this scenario
  let charName = prompt("Name your character");
  let charHP = 40;
  let grantHP = 10;
  let wins = 0;
  //
  while (grantHP > 0) {
    console.log(`${charName}'s Health: ${charHP}`);
    console.log(`The Almighty Grant's Health: ${grantHP}`);
    console.log(
      `${charName}'s Health: ${(charHP -= Math.floor(Math.random() * 2 + 1))}`
    );
    console.log(
      `The Almighty Grant's Health: ${(grantHP -= Math.floor(
        Math.random() * 2 + 1
      ))}`
    );
    //
    if (wins >= 3) {
      console.log(`"${charName} beat The Almighty Grant!"`);
      break;
    } else if (charHP <= 0) {
      console.log("The Almighty Grant wins again!");
      break;
    } else if (grantHP <= 0) {
      wins++;
      console.log(`${charName} wins!`);
      grantHP = 10;
    }
  }
  //Second condition for no scenario
} else if (vGame.toLowerCase() === "no") {
  console.log("Come back when you're ready to play!");
}
