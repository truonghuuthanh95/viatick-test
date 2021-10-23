import {
  createUser,
  deleteUser,
  getUserByEmailAndPassword,
  getUserById,
  getUsers,
  getUsersWithPagination,
  searchUser,
  updateUser,
  getUserByEmail,
} from "../services/user.service";
import { v4 as uuidv4 } from "uuid";

export const getAll = async (req, res, next) => {
  try {
    let users = await getUsers();
    res.send({ statusCode: 200, message: "success", results: users });
  } catch (error) {
    next(error);
  }
};

export const get = async (req, res, next) => {
  try {
    let { limit, offset } = req.query;
    limit = limit || 100;
    offset = offset || 0;
    console.log(limit, offset);
    let users = await getUsersWithPagination(limit, offset);
    res.send({ statusCode: 200, message: "success", results: users });
  } catch (error) {
    next(error);
  }
};

export const signUp = async (req, res, next) => {
  try {
    let userSignUp = req.body;
    const user = await getUserByEmail(userSignUp.email);
    if (user) {
      res.send({ statusCode: 400, message: "email existed", results: null });
    } else {
      userSignUp.id = uuidv4();
      userSignUp.startDate = new Date();
      userSignUp.endDate = new Date();

      let userCreated = await createUser(userSignUp);
      res.send({ statusCode: 201, message: "created", results: userCreated });
    }
    res.send(req.body);
  } catch (error) {
    next(error);
  }
};

export const del = async (req, res, next) => {
  try {
    let { id } = req.query;

    let user = await getUserById(id);

    if (user) {
      user.status = false;
      let userUpdated = await updateUser(user);
      res.send({ statusCode: 200, message: "success", results: userUpdated });
    } else {
      res.send({ statusCode: 404, message: "not found", results: null });
    }
  } catch (error) {
    next(error);
  }
};

export const update = async (req, res, next) => {
  try {
    let userRequiredUpdate = req.body;

    let user = await getUserById(userRequiredUpdate.id);
    if (user) {
      user.status = false;
      user = await updateUser(user);
      res.send({ statusCode: 200, message: "success", results: user });
    } else {
      res.send({ statusCode: 404, message: "not found", results: user });
    }
  } catch (error) {
    next(error);
  }
};

export const search = async (req, res, next) => {
  try {
    let { value } = req.query;
    const users = await searchUser(value);
    if (users.length > 0) {
      res.send({ statusCode: 200, message: "success", results: users });
    } else {
      res.send({ statusCode: 404, message: "notfound", results: users });
    }
  } catch (error) {
    next(error);
  }
};

export const getById = async (req, res, next) => {
  try {
    let { id } = req.query;
    const user = await getUserById(id);
    if (user) {
      res.send({ statusCode: 200, message: "success", result: user });
    } else {
      res.send({ statusCode: 404, message: "not found", result: user });
    }
  } catch (error) {
    next(error);
  }
};

export const SignIn = async (req, res, next) => {
  try {
    let { email, password } = req.body;
    const user = await getUserByEmailAndPassword(email, password);
    if (user) {
      res.send({ statusCode: 200, message: "success", result: user });
    } else {
      res.send({ statusCode: 404, message: "not found", result: user });
    }
  } catch (error) {
    next(error);
  }
};
