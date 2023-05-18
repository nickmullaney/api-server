'use strict';

// Export a middleware function that handles 404 Not Found errors
module.exports = (req, res, next) => {
  // Set the response status to 404
  res.status(404).send({
    error: 404,
    route: req.baseUrl,
    message: 'Not Found',
  });
}
