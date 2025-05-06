const logger = require("../utils/index");

module.exports = (req, res, next) => {
  logger.logger.info(
    `IP Adresi: ${req.ip} - PATH: ${req.path} - BODY: ${JSON.stringify(
      req.body
    )} - PARAMS: ${JSON.stringify(req.params)} - ACCESS TIME: ${Date.now()}`
  );
  next();
};
