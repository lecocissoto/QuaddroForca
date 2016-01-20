var express = require('express');
var router = express.Router();
var Words = require('../models/word');

/* GET home page. */
// curl "http://localhost:3000/"
router.get('/', function(req, res, next) {
  Words.findRandom().limit(1).select({ "palavra": 1}).exec(function(err, words){
    if(err){
      res.status(200).json({ message: 'Erro ao buscar a palavra' });
    }else{
      res.render("index", {palavras: words});
    }
  });
});

//curl -X POST "http://localhost:3000/add/" -d"palavra=Flamingo&categoria=animais"
router.post('/add/', function(req, res, next){
  var newWord = new Words(req.body);
  newWord.save(function(erro, item){
    if(erro){
      res.status(200).json({message: "Deu erro ao inserir", error:true});
    }else{
      res.status(201).json({message: "Palavra inserida com sucesso", erro: false});
    }
  })
})

module.exports = router;
