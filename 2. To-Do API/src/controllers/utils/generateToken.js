import jwt from "jsonwebtoken";

const generateToken = (payLoad) => {
  const secreteKey = process.env.JWT_SECRET;
  const options = {
    expiresIn: "1h",
  };

  const token = jwt.sign(payLoad, secreteKey, options);
  return token;
};

export default generateToken;
