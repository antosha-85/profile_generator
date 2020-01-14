const readline = require('readline');
const thankYou = function () {
console.log(`Thank you for your valuable feedback: ${answer}`);
};
    

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


// 
// 
// 
// 
// 


rl.question('What\'s an activity you like doing?', (answer) => {
    let answer1 = '';
    answer1 += `my favorite activity is ${answer} `;
    rl.question('What\'s your name? Nicknames are also acceptable :)', (answer) => {
        answer1 += answer;
        rl.question('What do you listen to while doing that?', (answer) => {
                answer1 += answer;
                rl.question('What do you listen to while doing that?', (answer) => {
                    answer1 += answer;
                    rl.question('Which meal is your favourite (eg: dinner, brunch, etc.)', (answer) => {
                        answer1 += answer;
                        rl.question('Which sport is your absolute favourite?', (answer) => {
                            answer1 += answer;
                                rl.question('What is your superpower? In a few words, tell us what you are amazing at!', (answer) => {
                                    answer1 += answer;
                                    console.log(`Thank you for your valuable feedback: ${answer1}`);
                                    rl.close();
                                })
                            })
                        })
                    })
                })
            })
        })