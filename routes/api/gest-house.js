const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const keys = require("../../config/keys");
const passport = require("passport");

// Load input validation
const validateRegisterInput = require("../../validation/register");
const validateLoginInput = require("../../validation/login");

// Load User model
const GuestHouse = require("../../models/guest-house");

// @route POST api/users/register
// @desc Register user
// @access Public
router.get('/findAll', (req, res) => {

    GuestHouse.find().then(data => {
        return res.json(data);
    })
})



module.exports = router;
