const jwt = require("jsonwebtoken");
const SECRET_KEY =
  "2e2d87e33b8bed73b86837f73d15adba28a1bbba6e42281244c9ab861bcac0a220c05a0d5eb9f5f08715dad2bfbf64e7be724c48e44d94bda67e705628fb5d91e189c13b2359ce78abca3b3f0d28992533ff3537678448e226a486d45d804bec59c88004797a4f692625b37a0705132f09dcb61117ef22628994a70bf8039e42";

const verifyToken = (req, res, next) => {
  const token = req.headers["authorization"];
  if (!token)
    return res.status(403).send("A token is required for authentication");

  try {
    // TODO: Verify and decode the JWT token using the jwt.verify() method.
    // Store the result in a constant named 'decodedToken'.
    // You'll need to use the 'token' and 'SECRET_KEY' variables as arguments for this method.
    req.user = decodedToken;
  } catch (err) {
    return res.status(401).send("Invalid Token");
  }
  return next();
};

module.exports = { verifyToken };
