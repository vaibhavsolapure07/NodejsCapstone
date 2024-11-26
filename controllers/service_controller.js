const App = require("../models/services_schema.js");

exports.findAll = (req, res) => {
    App.find()
    .then((data) => {
        res.status(200).json(data);
    })
    .catch((err) => {
        res.status(500).json({ message: err.message || "Some error occured while fetching services" });
    })
}


exports.findByType = (req, res) => {
    App.find({type: req.params.type})
    .then((data) => {
        if(data.length == 0) {
            res.json({message: "No services found for this type: " + req.params.type});
            return;
        }
        res.status(200).json(data);
    })
    .catch((err) => {
        res.json({message: err.message || "Some error occured to fetch the service with this type"});
    })
}

const Request = require("../models/requests_schema.js")

exports.createRequestByServiceType = (req, res) => {

    const servicetype = req.params.type;

    const request = new Request( {
        mobile: req.body.mobile,
        code: req.body.code,
        email: req.body.email,
        address: req.body.address,
        msg: req.body.msg,
        type: servicetype,
        amt: req.body.amt
    })
    request.save()
    .then((data) => {
        res.json({message:"Request made with service type: " + servicetype, status:200})
    })
    .catch((err) => {
        res.json({message:err.message || "some error occured while requesting with service type as " + servicetype});
    })
    
}


exports.calculateEmi = (req, res) => {

    try {
        const servicetype = req.param.type;
        let chargepercent = 5;
        if(servicetype == "Home Loan") {
            chargepercent = 3;
        } else if (servicetype == "MI Loan"){
            chargepercent = 7;
        }
    
        const amt = req.body.amt;
        const tenure = req.body.tenure;
    
        const emi = (amt / tenure)+ chargepercent * 0.01 * (amt/tenure) ; 
    
        res.status(200).json({message: "Total emi per month: " + emi, status: "success"});
    }
    catch(err) {
        console.log(err.stack);
        res.json({message: err.message || "some error occured while calculating emi"});
    }
}
