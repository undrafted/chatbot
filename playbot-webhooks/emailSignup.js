'use strict';
const Mongo = require('mongodb').MongoClient;
//const uri = <MONGO DB URI HERE>;

module.exports = function(ctx, cb){
  let mailId = ctx.data.replyData;
  let isWon = ctx.data.won? true : false;
  if(mailId){
    Mongo.connect(uri, function(error, db){
      db.collection('customers')
        .update({
          email: mailId
        }, {
          email: mailId,
          contestWon: isWon
        }, {
          upsert: true
        }, (error, result) => {
          if(!error){
            db.close();
            cb(null, {});
          }
        });

    });
  } else {
    cb(null, {});
  }
}
