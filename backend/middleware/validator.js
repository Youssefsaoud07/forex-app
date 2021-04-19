const { check, validationResult } = require("express-validator");

exports.registerRules = () => [
  check(`name`, `This field is required`).notEmpty(),
  check(`email`, `This email is not valid`).isEmail(),
  check(`email`, `This field is required`).notEmpty(),
  check(`phoneNumber`, `This is not a valid number`).isLength({ min: 4 }),
  check(`password`, `This is not a valid password`).isLength({ min: 5 }),
];

exports.validator = (req, res, next) => {
  const errors = validationResult(req);

  errors.isEmpty() ? next() : res.status(401).json({ errors: errors.array() });
};