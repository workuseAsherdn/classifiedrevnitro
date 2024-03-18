module.exports = (err, req, res, next) => {
  err.statusCode = err.statusCode || 500;

  if (process.env.NODE_ENV == "development") {
    res.status(err.statusCode).json({
      sucess: false,
      message: err.message,
      stack: err.stack,
      err: err,
    });
  }

  if (process.env.NODE_ENV == "production") {
    let message = err.message;
    let error = new Error(message);

    if (err.name == "ValidationError") {
      message = Object.values(err.errors).map((value) => value.message);
      error = new Error(message);
      err.statusCode = 400;
    }

    if (err.name == "CastError") {
      error = `Resource not Found :${err.path}`;
      error = new Error(message);
      err.statusCode = 400;
    }

    if (err.code == 11000) {
      let message = `Duplicate ${Object.keys(err.keyValue)} error`;
      error = new Error(message);
      err.statusCode = 400;
    }

    if (err.name == "JSONWebTokenError") {
      let message = `JSON Web Token is invalid. Try again`;
      error = new Error(message);
      err.statusCode = 400;
    }

    if (err.name == "TokenExpiredError") {
      let message = `JSON Web Token is Expired. Try again`;
      error = new Error(message);
    }
    res.status(err.statusCode).json({
      sucess: false,
      message: error.message || "Internal server Error",
    });
  }
};
