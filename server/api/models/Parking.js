/**
 * Parking.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    Id: {type: 'int'},
    Name: {type: 'string'},
    Description: {type: 'string'},
    Latitude: {type: 'string'},
    Length: {type: 'string'}
  }
};

