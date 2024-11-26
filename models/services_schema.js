const mongoose = require('mongoose');

const ServiceSchema = new mongoose.Schema({

  type: { 
    type: String,
    required: [true, "Service type must be there"]
  },
  code: { 
    type: String, 
    required: [true, "A code must be there"] 
  },
  description: { 
    type: String 
  },
  imgUrl: { 
    type: String 
  },
  detail: {
    type: [String],
    default: []
  },
});

module.exports = mongoose.model('Service', ServiceSchema);
