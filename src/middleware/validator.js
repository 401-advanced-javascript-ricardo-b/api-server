"use strict";

module.exports = (req, res, next)=>{

  const name = req.query.name;

  !name ? next('name required') : next();

  // if(!name){
  //   next('name required');
  // }else{
  //   next();
  // }
}
