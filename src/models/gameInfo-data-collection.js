'use strict';

const model = require('./gameInfo');

class GameDataCollection{

  constructor(){
    this.model = model;
  }

  get(_id){
    return _id ? this.model.findOne({_id}) : this.model.find({});
  }

  create(record){
    let newRecord = new this.model(record);
    return newRecord.save();
  }

  update(_id, record){
    return this.model.findByIdAndUpdate(_id, record, {new: true})
  }

  delete(_id){
    return this.model.findByIdAndDelete(_id);
  }
}

module.exports = GameDataCollection;