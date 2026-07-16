module.exports={

browser:{
    headless:false,
    timeout:90000,
    cdp:'http://127.0.0.1:9222'
},

database:{
    file:'data/sephora.db'
},

network:{
    concurrency:4,
    retries:5
}

};
