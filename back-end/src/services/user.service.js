import db from "../models/index";
const { Op } = require("sequelize");

const User = db.sequelize.models.users;

export const createUser = async (user) => {
  try {
    let userCreated = await User.create(user);
    return userCreated;
  } catch (error) {
    throw error;
  }
};

export const getUserById = async (id) => {
  try {
    let user = await User.findByPk(id);
    return user;
  } catch (error) {
    throw error;
  }
};

export const updateUser = async (user) => {
  try {
    let userUpdated = await User.update(user);
    return userUpdated;
  } catch (error) {
    throw error;
  }
};

export const deleteUser = async (id) => {
  try {
    let user = await User.findByPk(id);
    user.status = false;
    user.save();
    return user;
  } catch (error) {
    throw error;
  }
};

export const getUsers = async () => {
  try {
    let user = await User.findAll();
    return user;
  } catch (error) {
    throw error;
  }
};

export const getUsersWithPagination = async (limit, offset) => {
  try {
    let users = await User.findAndCountAll({
      limit: limit,
      offset: offset,
    });
    return users;
  } catch (error) {
    throw error;
  }
};

export const searchUser = async (value) => {
  try {
    let users = await User.findAll({
      where: {
        [Op.or]: [
          { firstName: { [Op.like]: `%${value}%` } },
          { lastName: { [Op.like]: `%${value}%` } },
          { companyName: { [Op.like]: `%${value}%` } },
        ],
      },
    });
    return users;
  } catch (error) {
    throw error;
  }
};

export const getUserByEmailAndPassword = async (email, password) => {
  try {
    let user = await User.findOne({
      where: {
        email: { [Op.eq]: email },
        password: { [Op.eq]: password },
      },
    });
    return user;
  } catch (error) {
    throw error;
  }
};

export const getUserByEmail = async (email) => {
  try {
    let user = await User.findOne({
      where: {
        email: { [Op.eq]: email },
      },
    });
    return user;
  } catch (error) {
    throw error;
  }
};
