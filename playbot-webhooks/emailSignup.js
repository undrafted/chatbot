'use strict';
const Mongo = require('mongodb').MongoClient;
//const uri = <MONGO DB URI HERE>;

module.exports = function(ctx, cb){
  let mailId = ctx.data.replyData;
  if(mailId){
    Mongo.connect(uri, function(error, db){
      db.collection('customers')
        .update({
          email: mailId
        }, {
          email: mailId
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
