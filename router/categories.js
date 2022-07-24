
const { default: axios } = require('axios');
var express = require('express')
var router = express.Router()

var backend = process.env.BACKEND_URI

router.get("/categories", (req, res) => {
    axios(backend + "/api/categories")
    .then(function (response) {

        var final_data = []
        response.data.data.forEach((e, index) => {
            var add = {};
            add["name"] = e.name;
            add["count"] = e.name.length;
            add["vowels"] = e.name.replace(/[aiueo]/gi, "");
            final_data.push(add);
        });

        res.render('crud/index', {
            data: final_data
        });
    }).catch(function (error) {
        console.log(error)
    });
});

router.post("/categories", (req, res) => {
    axios.post(backend + "/api/categories", {
        name: req.body.name
    })
    .then(function (response) {
        res.json({status: "success add data"})
    })
    .catch(function (error) {
        res.status(500).json({status: "error"})
    })
})

module.exports = router
