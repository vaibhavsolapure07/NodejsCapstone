
module.exports = (app) => {

    const ServiceApp = require("../controllers/service_controller.js");

    const MemberApp = require("../controllers/member_controller.js");

    const RequestApp = require("../controllers/request_controller.js");
   
    app.get("/services", ServiceApp.findAll);
     
    app.get("/service/:type", ServiceApp.findByType);


    app.post("/member", MemberApp.register);

    app.get("/showmembers", MemberApp.findAll);

    app.put("/updatepassword", MemberApp.updatePassword);

    app.delete("/cancelmember", MemberApp.cancelMember);

    app.get("/showrequests", RequestApp.findAll);

    app.delete("/deleterequest", RequestApp.cancelRequest);


    app.post("/addrequest", RequestApp.createRequest);

    app.put("/updaterequest", RequestApp.updateRequest);

    app.post("/service/:type/form", ServiceApp.createRequestByServiceType);

    app.post("/service/:type/calculate", ServiceApp.calculateEmi);

    app.all('*', (req, res, next) => {
         const err = new Error(`Can't find ${req.originalUrl} on this server`);
         err.status = 'fail',
         err.statusCode = 404;
         next(err);
    })

    app.use((err, req, res, next) => {
        err.statusCode = err.statusCode || 500;
        err.status = err.status || "error";
        res.status(err.statusCode).json({
            status: err.status,
            // statusCode:err.statusCode,
            message:err.message
        })
    })

};





