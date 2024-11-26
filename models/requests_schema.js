const mongoose = require('mongoose');

const RequestSchema = new mongoose.Schema({

    email: {
      type: String,
      required:  [true, "A request must have an email"]
    },
    amt: {
        type: Number,
        required: [true, "Amount is required"]
    },
    mobile: {
        type: Number,
        required: [true, "A mobile number must be present"],
  
    },

    type: {
      type: String,
      required: true,
    },
    msg: {
      type: String,
    },
    code : {
        type: String
    }

});

module.exports = mongoose.model('Request', RequestSchema);
