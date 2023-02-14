const {Router} = require('express');

const Model = require('../models/userModel')

const router = Router();

router.post('/add', (req, res) => {
    console.log(req.body);

    new Model(req.body).save()

    .then((result) => {
        res.json(result)
    }).catch((err) => {
        console.log(err);
        res.status(500).json(err)
    });
});


router.get('/getall', (req, res) => {
    Model.find({})
    .then((result) => {
        res.json(result);
    }).catch((err) => {
        console.log(err);
        res.status(500).json(err);
    });
})


router.get('/getbyemail/:useremail', (req, res) => {
    Model.find({email : req.params.useremail})
    .then((result) => {
        req.json(result);
    }).catch((err) => {
        console.log(err)
        res.status(500).json(err);
    });
})


router.post('/authenticate', (req, res) => {
    Model.findOne(req.body)
    .then((result) => {
        if (result){
            res.status(200).json(result);
        }
        else{
            res.status(401).json({status : 'failed'})
        }
    }).catch((err) => {
        console.log(err);
        res.status(500).json(err);
    });
})

router.delete('/delete/:userid', (req, res) => {
    Model.findByIdAndDelete(req.params.userid)
    .then((result) => {
        res.json(result);
    }).catch((err) => {
        console.log(err)
        res.status(500).json(err);
    });
});

router.get('/getbyid/:userid', (req, res) => {
    Model.findById(req.params.userid)
    .then((result) => {
        res.json(result);
    }).catch((err) => {
        console.log(err)
        res.status(500).json(err);
    });
})


module.exports = router;



