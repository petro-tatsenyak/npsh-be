const validate = (schema, type) => async (req, res, next) => {
  try {
    await schema.validateAsync(req[type]);

    return next();
  } catch (error) {
    return res.status(400).send({ message: error.message });
  }
};

module.exports = {
  validate,
};
