'use strict';

// Export an error handling middleware function
module.exports = (error, req, res, next) => {
  // Check if the error is a string or an Error object
  const errorMessage = typeof(error) === 'string' ? error : error.message;
  
  // Set the response status to 500 (Internal Server Error) and send an error response
  res.status(500).send({
    error: 500,
    route: req.path,
    query: req.query,
    path: req.params,
    body: req.body,
    message: `Server Error: ${errorMessage}`,
  });
};
