const jwt = require("jsonwebtoken");

const validationService = {
  checkToken(req, res, next) {
    try {
      const authHeader = req.headers.authorization;
      if (!authHeader) {
        return res.status(401).json({ error: "Authorization header missing" });
      }

      const token = authHeader.split(" ")[1];
      if (!token) {
        return res.status(401).json({ error: "Token missing" });
      }

      const user = jwt.verify(token, process.env.JWT_SECRET);
      console.log("token validé !", user);
      next();
    } catch (error) {
      console.log(error);
      res.status(401).json({ error: "Invalid token" });
    }
  },
};

module.exports = validationService;