'use strict';

const fs = require('fs');

let rawdata = fs.readFileSync('balances/KEK.json');
let holders = JSON.parse(rawdata);
for(var i = 0; i < holders.length; i++)
{
    var wallets = holders[i].wallet;
    var amounts = holders[i].balance;
    console.log(wallets);
    console.log(amounts);
}