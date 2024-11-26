const App = require("../models/members_schema.js");

exports.register = (req, res) => {

    const member = new App( {
        mobile: req.body.mobile,
        email: req.body.email,
        occupation: req.body.occupation,
        createPassword: req.body.createPassword
    })

    member.save()
    .then((data) => {
        res.status(200).json({message:"User registered Successfully as Member", status:"Success"})
    })
    .catch((err) => {
        res.json({message:err.message || "some error occured while registering the user as member"});
    })
}


exports.findAll = (req, res) => {
    App.find()
    .then((data) => {
        res.status(200).json(data);
    })
    .catch((err) => {
        res.status(500).json({ message: err.message || "Some error occured while fetching members" });
    })
}


exports.updatePassword = (req, res) => {
    
    App.findOneAndUpdate({mobile: req.body.mobile}, {createPassword: req.body.password}, {
        new: true,
        runValidators: true
    })
    .then((data) => {
        res.status(200).json({message: "User Password Updated Successfully!", status: "Success"});
    })
    .catch((err) => {
        res.status(500).json({message: err.message || "Some error occurred while updating the password"});
    })
}


exports.cancelMember = (req, res) => {
    App.findOneAndDelete({mobile: req.body.mobile})
    .then((data) => {
        res.status(200).json({message: "Member Deleted Successfully!", status: "Success"});
    })
    .catch((err) => {
        res.status(500).json({message: err.message || "Some error occurred while deleting the member"});
    })
}