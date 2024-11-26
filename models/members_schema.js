const mongoose = require('mongoose');

const MemberSchema = new mongoose.Schema(
  {
    mobile: {
      type: Number,
      required: [true, "A mobile no of a memeber must be there"],
    },
    email: {
      type: String,
      required: [true, "Email id must be mentioned"]
    },
    occupation: {
        type: String, 
        required: [true, "A member must have an occupation"]
    },
    createPassword: {
      type: String,
      required: [true, "Pasword is must"]
    },

});

module.exports = mongoose.model('Member', MemberSchema);
