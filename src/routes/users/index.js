const express = require('express');
const UserData = require('../../models/user');
const router = express.Router();


router.get('/allUsers', async (req, res) => {
    const result = await UserData.find()
    console.log(result)
    res.send(result)
})



router.post('/users', async (req, res) => {
    const user = req.body
    console.log(user)
    try {

        const instance = new UserData(req.body);

        const savedInstance = await instance.save();
        // console.log('Data saved successfully:', savedInstance);
        res.send(savedInstance,)
    } catch
    (error) {
        // Handle any errors that occurred during the save operation
        console.error('Error saving data:', error.message);
    }

})





module.exports = router