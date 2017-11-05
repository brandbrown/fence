'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var CustomerSchema = new Schema({
  name: {
    type: String,
    required: 'Kindly enter the name of the customer'
  },
  Created_date: {
    type: Date,
    default: Date.now
  },
  orderStatus: {
    type: [{
      type: String,
      enum: ['negotiation', 'inprogress', 'completed']
    }],
    default: ['negotiation']
  }
});

module.exports = mongoose.model('Customers', CustomerSchema);