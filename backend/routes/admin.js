const express = require("express");
const mongoose = require('mongoose');
const auth = require('../middleware/auth')
const user =require('../models/User');

const router = express.Router();

router.get('/',async (req, res) => { 
    try {
        const Users = await user.find();
                
        res.status(200).json(Users);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
});

router.delete('/:id',auth,async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No user with id: ${id}`);

    await user.findByIdAndRemove(id);

    res.json({ message: "user deleted successfully." });
});
module.exports= router;