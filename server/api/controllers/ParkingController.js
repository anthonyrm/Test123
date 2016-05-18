/**
 * CatsController
 *
 * @description :: Server-side logic for managing cats
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
    getInfo: function (req, res) {
    Parking.query('CALL GET_PARKING_BY_ID(' + req.query.id + ')', function(err, results) {
      if (err) return res.serverError(err);
      return res.json(results[0]);
    });
  },
	
};

