const App = require("../models/requests_schema.js");


exports.findAll= (req, res) => {
    App.find()
    .then(data => {
        res.send(data)
    })
    .catch(err => {
        res.status(500).send({message: err.message || "Some error occured while fetching the requests"})
    });
};

exports.cancelRequest = (req, res) => {
    App.findOneAndDelete({mobile: req.body.mobile})
    .then((data) => {
        res.status(200).json({message: "Request Deleted Successfully!", status: "Success"});
    })
    .catch((err) => {
        res.status(500).json({message: err.message || "Some error occurred while deleting the request"});
    })
}

exports.updateRequest= (req, res) => {
    const updatedRequest = req.body;
    App.findOneAndUpdate({mobile: req.body.mobile}, updatedRequest, {
        new: true,
        runValidators: true
    })
    .then((data) => {
        res.status(200).json({message: "Request Updated Successfully!", status: "Success"});
    })
    .catch((err) => {
        res.status(500).json({message: err.message || "Some error occurred while updating the password"});
    })
}


exports.createRequest = (req, res) => {

    const request = new App( {
        mobile: req.body.mobile,
        code: req.body.code,
        email: req.body.email,
        address: req.body.address,
        msg: req.body.msg,
        type: req.body.type,
        amt: req.body.amt
    })
    request.save()
    .then((data) => {
        res.json({message:"Request made Successfully", status:200})
    })
    .catch((err) => {
        res.json({message:err.message || "some error occured while requesting"});
    })
}
