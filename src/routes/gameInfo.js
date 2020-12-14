'use strict';

const express = require('express');
const router = express.Router();

const gameModel = require('../models/gameInfo');
const GameInfo = require('../models/gameInfo-data-collection'); 
const gameInfo = new GameInfo(gameModel);

const validator = require('../middleware/validator');

router.get('/gameInfo', getAllGameInfo);
router.get('/gameInfo/:id', validator, getOneGameInfo);
router.post('/gameInfo', createGameInfo);
router.put('/gameInfo:id', validator, updateGameInfo);
router.delete('/gameInfo:id', validator, deleteGameInfo);

async function getAllGameInfo(req, res){
  res.status(200).json(await gameInfo.get());
}

async function getOneGameInfo(req, res){
  res.status(200).json(await gameInfo.get(req.params.id));
}

async function createGameInfo(req, res){
  res.status(200).json(await gameInfo.get(req.body));
}

async function updateGameInfo(req, res){
  res.status(200).json(await gameInfo.get(req.params.id, req.body));
}

async function deleteGameInfo(req, res){
  res.status(200).json(await gameInfo.get(req.params.id));
}

module.exports = router;