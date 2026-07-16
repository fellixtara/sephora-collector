const {createLogger,format,transports}=require('winston');

module.exports=createLogger({
 level:'info',
 format:format.combine(
   format.timestamp(),
   format.printf(i=>`[${i.timestamp}] ${i.level.toUpperCase()} ${i.message}`)
 ),
 transports:[
   new transports.Console(),
   new transports.File({filename:'logs/app.log'})
 ]
});
