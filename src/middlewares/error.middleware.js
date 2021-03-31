const express = require("express");
const { logger } = require("../utils/logger");

const errorMiddleware = (error, req, res, next) => {
  try {
    const status = error.status || 500;
    const message = error.message || "Something went wrong";

    logger.error(`StatusCode : ${status}, Message : ${message}`);
    res.status(status).json({ message });
  } catch (error) {
    next(error);
  }
};

module.exports = errorMiddleware;
