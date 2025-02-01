let userscore = 0;
      let compscore = 0;

      const choices = document.querySelectorAll(".choice");
      const userScore = document.querySelector("#userscore");
      const compScore = document.querySelector("#compscore");
      const msg = document.querySelector("#msg");

      const genCompChoice = () => {
        const options = ["rock", "paper", "scissor"];
        // rock, paper, scissor
        const random = Math.floor(Math.random() * 3);
        return options[random];
      };

      const winner = (userWin, userchoice, compchoice) => {
        if (userWin === true) {
          userscore++;
          userScore.innerText = userscore;
          msg.innerText =
            "You Win :) Your " + userchoice + " beats " + compchoice;
          msg.style.backgroundColor = "green";
        } else {
          compscore++;
          compScore.innerText = compscore;
          msg.innerText =
            "You lost :( " + compchoice + " beats your " + userchoice;
          msg.style.backgroundColor = "red";
        }
      };

      const playgame = (userchoice) => {
        //generating comp choice
        const compchoice = genCompChoice();

        if (userchoice === compchoice) {
          msg.innerText = "The game was Draw. Play again.";
          msg.style.backgroundColor = "#081b31";
        } else {
          let userWin = false;
          if (userchoice === "rock") {
            // paper, scissors
            userWin = compchoice === "paper" ? false : true;
          } else if (userchoice === "paper") {
            //rock, scissors
            userWin = compchoice === "scissors" ? false : true;
          } else {
            //rock, paper
            userWin = compchoice === "rock" ? false : true;
          }
          winner(userWin, userchoice, compchoice);
        }
      };

      choices.forEach((choice) => {
        choice.addEventListener("click", () => {
          const userchoice = choice.getAttribute("id");
          playgame(userchoice);
        });
      });