const express = require('express');
const router = express.Router();

router.route('/:userId').get((req,res)=>{
  console.log(req.user)
  res.send(`Get users with id ${req.params.userId}`);
}).put((req,res)=>{
  res.send(`Update users with id ${req.params.userId}`);
}).delete((req,res)=>{
  res.send(`Delete users with id ${req.params.userId}`);
})
// router.get('/:userId', (req,res)=>{
//   res.send(`Get users with id ${req.params.userId}`);
// })
// router.put('/:userId', (req,res)=>{
//   res.send(`Update users with id ${req.params.userId}`);
// })
// router.delete('/:userId', (req,res)=>{
//   res.send(`Delete users with id ${req.params.userId}`);
// })

const users = [{name: "Kyle"}, {name: "Sally"}]

router.param("userId", (req,res,next,id)=>{
  console.log(id);
  req.user = users[id];
  next();
})


// module.exports = router;