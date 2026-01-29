import jwt from "jsonwebtoken";

// admin authentication middleware
const authAdmin = async (req, res, next) => {
  try {
    const aToken = req.headers.atoken;
    if (!aToken) {
      return res.json({
        success: false,
        message: "Not Authorised Login Again",
      });
    }
    const token_decode = jwt.verify(aToken, process.env.JWT_SECRET);

    const expected = process.env.ADMIN_EMAIL + process.env.ADMIN_PASSWORD;

    if (token_decode !== expected) {
      return res.json({
        success: false,
        message: "Not Authorised Login Again",
      });
    }

    next();
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};

export default authAdmin;
