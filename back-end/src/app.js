import express, { json, urlencoded } from "express";
import dotenv from "dotenv";
import morgan from "morgan";
import cors from "cors";
import helmet from "helmet";
import passport from "passport";
const GoogleStrategy = require("passport-google-oauth20").Strategy;

import { googleClientID, googleClientSecret } from "./utils/key";

import userRoute from "./routes/user.route";
import membershipTypeRoute from "./routes/membershipType.route";
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

/**
 * MIDDELWARE
 */
app.use(json());
app.use(urlencoded({ extended: true }));
app.use(morgan("combined"));
app.use(helmet());
/** CROSS ORIGIN */
app.use(cors());

/*  Google AUTH  */

passport.serializeUser(function (user, cb) {
  cb(null, user);
});

passport.deserializeUser(function (obj, cb) {
  cb(null, obj);
});
passport.use(
  new GoogleStrategy(
    {
      clientID: googleClientID,
      clientSecret: googleClientSecret,
      callbackURL: "http://localhost:5000/auth/google/callback",
    },
    async (accessToken, refreshToken, profile, done) => {
      console.log(accessToken, refreshToken, profile);
      return done(null, profile);
    }
  )
);

/**
 * ROUTES
 */

app.get(
  "/auth/google",
  passport.authenticate("google", {
    scope: ["profile", "email"],
  })
);

app.get(
  "/auth/google/callback",
  passport.authenticate("google"),
  function (req, res) {
    // Successful authentication, redirect success.
    res.send({ statusCode: 200, message: "success", result: req });
  }
);

app.use("/user", userRoute);
app.use("/memberShipType", membershipTypeRoute);

/**
 * ERROR
 */
app.use(function (err, req, res, next) {
  console.error(err.stack);
  res.status(500).send(err);
});

/**
 * NOT FOUND
 */
app.use((req, res, next) => {
  res.status(404).send("Sorry can't find that!");
});
/**
 * START APP
 */
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
