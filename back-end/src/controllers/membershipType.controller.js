import {
  getMembershipTypes,
  getMembershipTypesIsActive,
} from "../services/memberType.service";

export const get = async (req, res, next) => {
  try {
    let { isActive } = req.query;
    let membershipTypes;

    if (isActive) {
      membershipTypes = await getMembershipTypesIsActive();
    } else {
      membershipTypes = await getMembershipTypes();
    }

    res.send({ statusCode: 200, message: "success", results: membershipTypes });
  } catch (error) {
    next(error);
  }
};
