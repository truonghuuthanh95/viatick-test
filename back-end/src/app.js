import express, { json, urlencoded } from "express";
import dotenv from "dotenv";
import morgan from "morgan";
import cors from "cors";
import helmet from "helmet";
import passport from "passport";
const GoogleStrategy = require("passport-google-oauth20").Strategy;

import { googleClientID, googleClientSecret } from "./utils/key";

import userRoute from "./routes/user.route";
import membershipTypeRoute from './routes/membershipType.route'
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

var userProfile;

passport.serializeUser(function (user, cb) {
  cb(null, user);
});

passport.deserializeUser(function (obj, cb) {
  cb(null, obj);
});
/*  Google AUTH  */
passport.use(
  new GoogleStrategy(
    {
      clientID: googleClientID,
      clientSecret: googleClientSecret,
      callbackURL: "/auth/google/callback",
    },
    async (accessToken, refreshToken, profile, done) => {
      userProfile = profile;
      return done(null, userProfile);
    }
  )
);

app.get("/success", (req, res) => res.send(userProfile));
app.get("/error", (req, res) => res.send("error logging in"));

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
    res.redirect("/success");
  }
);

/**
 * ROUTES
 */

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
