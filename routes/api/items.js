const express = require('express');
const router = express.Router();
var cors = require('cors')
//Item Model
const Item = require('../../models/Item')
router.use(cors())
//@route GET api/items
router.get('/',(req,res)=>{
    Item.find().sort({date:-1}).then(items=>res.json(items))
});


//@route POST api/items
router.post('/',(req,res)=>{
    const newItem = new Item({
        name:req.body.name
    });
    newItem.save().then(()=>res.status(200).json({success:true}))
    .catch(err=>res.status(404).json({success:false}));
});
//@route Show api/items
router.get('/:id',(req,res)=>{
    Item.findById(req.params.id).then(item=>res.json(item));
});

//@route DELETE api/items
router.post('/delete/:id',(req,res)=>{
    Item.findById(req.params.id).then(item=>item.remove(item).then(()=>res.status(200).json({success:true}))
        .catch(err=>res.status(404).json({success:false}))
    );
});

module.exports = router;
