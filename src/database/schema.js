module.exports=function(db){

db.exec(`

CREATE TABLE IF NOT EXISTS products(

product_id TEXT PRIMARY KEY,
status TEXT,
updated_at TEXT

);

`);

}
