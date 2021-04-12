const mongoose = require('mongoose');

const PersonSchema = new mongoose.Schema({
    person: {
      type: String,
      required: true,
      validate: [
        {
          validator: async function (value) {
            const count = await this.model('person')
            .countDocuments({ name: value });
  
            return !count;
          },
          message: props => `${props.value} exists. Please try a Different Name.`
        }
      ]
    }
  }, {
    timestamps: true
  });
  
  PersonSchema.methods.getPeople = async function () {
    return await mongoose.model('People').find({
      person: this._id
    });
  }
  
  module.exports = mongoose.model('Person', PersonSchema);