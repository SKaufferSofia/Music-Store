import { NextFunction, Request, Response } from "express";
import { ClientError } from "../utils/errors";
import { UserRepository } from "../repositories/user.repository";

const checkAdminRole = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const userId = req.body.userId;

  if (!userId) {
    return next(new ClientError("User ID is required"));
  }

  try {
    const user = await UserRepository.findOne({ where: { id: userId } });

    if (!user) {
      return next(new ClientError("User not found"));
    }

    if (user.role !== "admin") {
      return next(new ClientError("Admin access required", 403));
    }

    next();
  } catch (error) {
    next(new ClientError("Internal Server Error", 500));
  }
};

export default checkAdminRole;
