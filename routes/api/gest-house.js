const express = require("express");
const router = express.Router();




// Load User model
const GuestHouse = require("../../models/guest-house");

// @route POST api/users/register
// @desc Register user
// @access Public
router.get('/findAll', (req, res) => {

    // const x = new GuestHouse({
    //     name: "lac 2",
    //     region: "paris",
    //     rating: 3,
    //     description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type",
    //     disponibility: true,
    //     image: "https://q-cf.bstatic.com/images/hotel/max1024x768/236/236461514.jpg",
    // });
    // x.save().then(data => {
    //     return res.json(data);
    // })
    GuestHouse.find().then(data => {
        return res.json(data);
    })
})

router.post('/add', (req, res) => {

    const x = new GuestHouse({
        ...req.body,
        rating: 3,
        disponibility: true,
    });
    x.save().then(data => {
        return res.json(data);
    })

})

router.delete('/delete/:id', (req, res) => {
    id = req.params.id
    GuestHouse.deleteOne({ _id: id }, (data) => {
        return res.json(data);
    })


})

module.exports = router;
