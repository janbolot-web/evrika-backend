import Router from "express";
import * as UserController from "../controllers/UserController.js";
import * as CourseController from "../controllers/CourseController.js";
import roleMiddleware from "../middleware/roleMiddleware.js";
import checkAuth from "../middleware/authMiddleware.js";

const router = new Router();

router.post("/auth/register", UserController.register);
router.post("/auth/login", UserController.login);
router.get("/auth/me", checkAuth, UserController.getMe);

router.post(
  "/createCourse",
  roleMiddleware(["ADMIN"]),
  CourseController.createCourse
);
router.get("/getAllCourses", CourseController.getAllCourses);
router.get("/getCourse/:id", CourseController.getCourse);
router.get("/getLessons/:id", CourseController.getLessons);
router.get("/getLesson/:id", CourseController.getLesson);
router.delete("/deleteCourse/:id", CourseController.deleteCourse);

export default router;
