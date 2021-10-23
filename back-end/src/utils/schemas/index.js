const ajvInstance = require("./ajv-instance");

export const signUpSchema = ajvInstance.compile({
  type: "object",
  properties: {
    email: { type: "string", format: "email" },
    firstName: { type: "string", minLength: 3 },
    lastName: { type: "string", minLength: 3 },
    password: { type: "string", minLength: 8 },
    membershipType: { type: "string", minLength: 3 },
    companyName: { type: "string", minLength: 3 },
    designation: { type: "string", minLength: 3 },
  },
  required: [
    "firstName",
    "email",
    "lastName",
    "password",
    "membershipType",
    "companyName",
  ],
});

export const loginSchema = ajvInstance.compile({
  type: "object",
  properties: {
    email: { type: "string", format: "email" },
    password: { type: "string", minLength: 3 },
  },
  required: ["password", "email"],
});
