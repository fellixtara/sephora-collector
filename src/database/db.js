const Database=require('better-sqlite3');
const config=require('../config/default');

module.exports=new Database(config.database.file);
