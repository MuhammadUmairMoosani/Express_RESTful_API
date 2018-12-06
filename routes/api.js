const express = require('express');
const router = express.Router();

router.get('/get_dummy_data',function(req,res) {
    res.send({data:"Get api work successfully"})
});

router.post('/post_dummy_data',function(req,res) {
    res.send({data:"This data come from post api: " + req.body.data})
});

router.put('/put_dummy_data:id',function(req,res) {
    res.send({data:"Successfully updated this user: " + req.params.id})
})

router.delete('/delete_dummy_data:id',function(req,res) {
    res.send({data:"Successfully Deleted this user: " + req.params.id})
})

module.exports = router;