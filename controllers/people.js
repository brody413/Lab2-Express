const Person = require('../models/person');

exports.index = async (request, response, next) => {
    try {
      const person = await person.find();
      
      response.status(200)
      .json(people);
    } catch (error) {
      next(error);
    }
  };

  exports.create = async (request, response, next) => {
    try {
      const { name } = request.body;
      const person = await Person.create({
        name
      });
  
      response.status(200)
      .json({
        message: "Person was created",
        status: "SUCCESS",
        person
      });
    } catch (error) {
      next(error);
    }
  };

  