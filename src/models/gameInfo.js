'use strict';

const mongoose = require('mongoose');

//make schema
const gameInfoSchema = mongoose.Schema({
  name: {type: String, required: true},
  year: {type: Number, required: true},
  type: {type: String, uppercase: true, enum: ['ACTION', 'ADVENTURE', 'STRATEGY', 'SPORTS', 'PUZZLE']}
});

const gameInfoModel = mongoose.model('game', gameInfoSchema);

module.exports = gameInfoModel;

// class GameInfo {
//   constructor(){
//     this.id = 0;
//     this.db = [];
//   }

//   get(id){
//     if(id){
//       return this.db.find(record => record.id ===id);
//     }else{
//       return this.db;
//     }
//   }

//   create(obj){
//     obj.id = ++this.id;
//     this.db.push(obj);
//     return obj;
//   }

//   update(id, obj){
//     if(!id){return 'does not exist'}
//       //update an object
//       this.db = this.db.map(record =>{
//         if(record.id !== id)return;
//         obj.keys.forEach(key =>{
//           record[key] = obj[key];
//         })
//         return record;
//       })
//       return this.db.find(record => record.id ===id);

//       const dbObj = this.db.find(record => record.id === parseInt(id));
//       dbObj = {...dbObj, ...obj};
//       return dbObj;
//   }

//   delete(id){
//     if(!id){
//       return null
//     }else{
//       //delete the object
//       return null
//     }
//   }
// }

// module.exports = GameInfo;