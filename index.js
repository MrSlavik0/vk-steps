let fetch = require('node-fetch');
var readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
    });

var date = new Date();
var month = date.getUTCMonth() + 1;
var day = date.getUTCDate();
var year = date.getUTCFullYear();
if(month < 10) {
    month = "0" + month;
}
if(day < 10) {
    day = "0" + day;
}
let newDate = year + "-" + month + "-" + day;

class steps {
    constructor() {
        readline.question(`Get a token at \n https://oauth.vk.com/authorize?client_id=7539087&scope=1048578&redirect_uri=https://oauth.vk.com/blank.html&display=page&response_type=token&revoke=1 \n and enter it here: \n \n \n `, (token) => {
            console.log('ok');
            fetch(`https://api.vk.com/method/vkRun.setSteps?steps=999999&distance=999999&date=${newDate}&v=5.130&access_token=${token}`).then(e => e.json()).then(res => {
                console.log(res);
                process.exit();
            })
        });
    }
}
