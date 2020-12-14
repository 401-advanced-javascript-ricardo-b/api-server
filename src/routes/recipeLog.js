'use strict';

const express = require('express');
const router = express.Router();

const recipeModel = require('../models/recipeLog');
const Recipe = require('../models/recipe-data-collection');
const recipe = new Recipe(recipeModel);

const validator = require('../middleware/validator');

router.get('/recipeLog', getAllRecipe);
router.get('/recipeLog/:id', validator, getOneRecipe);
router.post('/recipeLog', createRecipe);
router.put('/recipeLog:id', validator, updateRecipe);
router.delete('/recipeLog:id', validator, deleteRecipe);

async function getAllRecipe(req, res){
  res.status(200).json(await recipe.get());
}

async function getOneRecipe(req, res){
  res.status(200).json(await recipe.get(req.params.id));
}

async function createRecipe(req, res){
  res.status(200).json(await recipe.get(req.body));
}

async function updateRecipe(req, res){
  res.status(200).json(await recipe.get(req.params.id, req.body));
}

async function deleteRecipe(req, res){
  res.status(200).json(await recipe.get(req.params.id));
}

module.exports = router;