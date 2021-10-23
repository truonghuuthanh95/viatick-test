import db from "../models/index";
const { Op } = require("sequelize");

const MembershipTypes = db.sequelize.models.membershipTypes;

export const getMembershipTypes = async () => {
  try {
    let membershipTypes = await MembershipTypes.findAll();
    return membershipTypes;
  } catch (error) {
    throw error;
  }
};

export const getMembershipTypesWithStatus = async (isActive) => {
  try {
    let membershipTypes = await MembershipTypes.findAll({
      where: {
        isActive: { [Op.is]: isActive },
      },
    });
    return membershipTypes;
  } catch (error) {
    throw error;
  }
};
