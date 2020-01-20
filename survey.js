const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


let profile = "";
rl.question("What's your name? ", (answer) => {
  rl.question("What's an activity you like doing?", (answer) => {
    rl.question("What do you listen to while doing that?", (answer) => {
      rl.question("Which meal is your favourite (eg: dinner, brunch, etc.)", (answer) => {
        rl.question("What's your favourite thing to eat for that meal?", (answer) => {
          rl.question("Which sport is your absolute favourite?", (answer) => {
  
            profile += `my favourite sport is ${answer}`;
            console.log(profile);
            rl.close();
          });
          profile += `i like to eat ${answer}, `;
        });
        profile += `My favourite meal is ${answer}, `;
      });
      profile += `i listen to ${answer} while doing that, `;
    });
    profile += `i like to ${answer}, `;
  });
  profile += `My name is ${answer}, `;
});
