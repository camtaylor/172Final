var router = require('express').Router();
router.route('/')
  .get(function(req, res){
    console.log('Returning categories');
    res.send({ok: true});
    CategorySchema.find({}, function(err, categories) {
      if(err) { res.sendStatus(500); }
      res.json(categories)
    });
  })
  .post(function(req, res) {
    console.log("Creating category");
    res.send({ok: true});
  });

router.route('/:_id')
  .get(function(req, res) {
    console.log("Get a category by id");
    res.send({ok: true});
  })
  .put(function(req, res) {
    console.log("Update a category");
    res.send({ok: true});
  })
  .delete(function(req, res) {
    console.log("Delete a category");
    res.send({ok: true});
  });

module.exports = router;
