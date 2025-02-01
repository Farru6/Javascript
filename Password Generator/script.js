let password = document.querySelector("#passwordfield");
      const button = document.querySelector(".btn");
      const button_1 = document.querySelector(".Button");
      const para = document.querySelector(".msg");
      let button_2 = document.querySelector("#Pass");
      let field = "";
      let message = "Generating your password...";

      class Password {
        constructor() {
          console.log("Welcome to password generator");
        }
        generatePassword(len) {
          let pass = " ";
          console.log("entered");
          let upChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
          let chars = "abcdefghijklmnopqrstuvwxyz";
          let numbers = "1234567890";
          let special = "!@#$_?&*";
          if (len < 4) {
            console.log("Your password should be atleast 4 characters long");
          } else {
            let i = 0;
            while (i < len) {
              pass += upChars[Math.floor(Math.random() * upChars.length)];
              pass += chars[Math.floor(Math.random() * chars.length)];
              pass += numbers[Math.floor(Math.random() * numbers.length)];
              pass += special[Math.floor(Math.random() * special.length)];
              i += 3;
            }
            //   console.log("exit");
            return pass;
          }
        }

        buttonClicked = (msg) => {
          return new Promise((resolve, reject) => {
            setTimeout(() => {
              para.innerText = msg;
              para.style.color = "black";
              // field = p.generatePassword(6);
              // console.log(field);
              resolve("success");
            }, 10000);
          });
        };
      }

      let p = new Password();

      const reset = () => {
        para.style.color = "white";
        para.innerText = "Click again to generate password";
        button_1.classList.add("hide");
        password.innerText = "New Password";
        button.classList.remove("hide");
        button_2.classList.add("hide");
      };

      function copyPassword() {
        const pwd = field;
        //checks if field is empty
        if (pwd === "") {
          alert("Field is empty");
        } else {
          navigator.clipboard
            .writeText(pwd)
            .then(() => {
              alert("Password copied to clipboard");
            })
            .catch((err) => {
              console.log("Failed to copy: ", err);
            });
        }
      }

      button.addEventListener("click", () => {
        (async function getpass() {
          para.innerText = message;
          field = p.generatePassword(8);
          await p.buttonClicked("Here is your password :)");
          password.innerText = field;
          if (password.innerText != "") {
            button_2.classList.remove("hide");
            button.classList.add("hide");
            button_1.classList.remove("hide");
            button_2.addEventListener("click", copyPassword);
          } else {
            button_2.classList.add("hide");
          }
        })();
      });

      button_1.addEventListener("click", reset);