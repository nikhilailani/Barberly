const express  = require('express');
const router = express.Router();
const members = require('../Members');


// Routing to get members
router.get('/', (req, res) => res.json(members));

router.get('/:id', (req, res) => {
  if (members.some((member) => member.id == req.params.id)) {
    res.json(members.filter((member) => member.id == req.params.id))
  } else {
    res.send("<h1>Sorry nothing found!</h1>");
  }
});

module.exports = router;