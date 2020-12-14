'use strict'

const mongoose = require('mongoose');

//make schema
const recipeSchema = mongoose.Schema({
  name: {type: String, required: true},
  time: {type: Number, required: true},
  type: {type: String, uppercase: true, enum: ['SOUP', 'SALAD', 'PASTA', 'PIZZA', 'DESERT']}
});

const recipeModel = mongoose.model('recipe', recipeSchema);

module.exports = recipeModel;


// const idCounter = 0;

// class Recipe {
//   constructor(){
//     this.id = 0;
//     this.db = [];
//     // this.name = name;
//     // if(name){this.idCounter = idCounter++};
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
//     if(!id){
//       return null //'does not exist'
//     }else{
//       //update an object
//       return this.db
//     }
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

// class Pasta extends Recipe{

//   constructor(props){
//     super(props)
//   }
// }

// module.exports = recipe;
