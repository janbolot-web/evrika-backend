import Router from "express";
import * as UserController from "../controllers/UserController.js";
import * as CourseController from "../controllers/CourseController.js";
import roleMiddleware from "../middleware/roleMiddleware.js";
import checkAuth from "../middleware/authMiddleware.js";

const router = new Router();

router.post("/auth/register", UserController.register);
router.post("/auth/login", UserController.login);
router.get("/auth/me", checkAuth, UserController.getMe);
router.get("/getUsers", roleMiddleware(["ADMIN"]), UserController.getUsers);
router.get("/getUserById/:id", UserController.getUserById);
router.delete(
  "/removeUser/:id",
  roleMiddleware(["ADMIN"]),
  UserController.deleteUser
);

router.post(
  "/createCourse",
  roleMiddleware(["ADMIN"]),
  CourseController.createCourse
);
router.get("/getAllCourses", CourseController.getAllCourses);
router.get("/getCourse/:id", CourseController.getCourse);
router.get("/getLessons/:id", CourseController.getLessons);
router.get("/getLesson/:id", CourseController.getLesson);
router.get("/getModules/:id", CourseController.getModules);
router.get("/getModule/:id", CourseController.getModule);
router.delete("/deleteCourse/:id", roleMiddleware(["ADMIN"]), CourseController.deleteCourse);
router.delete("/deleteModule/:id", roleMiddleware(["ADMIN"]), CourseController.deleteModule);
router.delete("/removeUserModule/:id",  CourseController.removeUserModule);
router.patch("/createModule/:id", roleMiddleware(["ADMIN"]), CourseController.createModule);
router.patch("/addCourseToUser",  CourseController.addCourseToUser);

export default router;