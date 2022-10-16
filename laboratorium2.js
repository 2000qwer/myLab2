const _ = require('lodash');

let tab = [1,2,3,4,5,6,2]



const a = (tab) => _.mean(tab) 


console.log(a(tab))


const b = (tab) => _.min(tab) 

const c = (tab) => _.max(tab) 