import { CourseDto } from "../dtos/course.dto.js";
import authorModel from "../models/author-model.js";
import courseModel from "../models/course-model.js";
import lessonModel from "../models/lesson-model.js";

export const createCourse = async (req, res) => {
  try {
    const {
      title,
      duration,
      description,
      price,
      previewImgUrl,
      previewVideoUrl,
      authorName,
      authorProfession,
      authors,
      lessons,
    } = req.body;
    const authorsData = await authorModel.create(authors);
    const lessonsData = await lessonModel.create(lessons);

    const doc = new courseModel({
      title,
      duration,
      description,
      price,
      previewImgUrl,
      previewVideoUrl,
      authorName,
      authorProfession,
      authors: authorsData,
      lessons: lessonsData,
    });

    let course = await doc.save();
    course = course._doc;
    res.json({ message: "Новый курс успешно создан" });
  } catch (error) {
    console.log(error);
    res.status(404).json({ message: "Не удалось создать новый курс" });
  }
};

export const getAllCourses = async (req, res) => {
  try {
    const courses = await courseModel.find();
    const coursesData = CourseDto(courses);
    res.json(coursesData);
  } catch (error) {
    console.log(error);
    res.status(404).json({ message: "Не удалось получить все курсы" });
  }
};

export const getCourse = async (req, res) => {
  try {
    const courseId = req.params.id;
    const course = await courseModel
      .findById(courseId)
      .populate("authors")
      .populate("lessons");
    // const { ...courseData } = course._doc;
    res.json(course);
  } catch (error) {
    console.log(error);
    res.status(404).json({ message: "Не удалось получить курс" });
  }
};

export const getLessons = async (req, res) => {
  try {
    const courseId = req.params.id;
    const course = await courseModel.findById(courseId).populate("lessons");
    const { lessons, title } = course._doc;
    res.json({ title, lessons });
  } catch (error) {
    console.log(error);
    res.status(404).json({ message: "Не удалось получить видео" });
  }
};

export const getLesson = async (req, res) => {
  try {
    const courseId = req.params.id;
    const course = await lessonModel.findById(courseId);
    res.json(course);
  } catch (error) {
    console.log(error);
    res.status(404).json({ message: "Не удалось получить видео" });
  }
};

export const deleteCourse = async (req, res) => {
  console.log(req.params.id);
  try {
    const id = req.params.id;
    await courseModel.findByIdAndDelete({ _id: id });
    res.json({ message: "Курс успешно удален" });
  } catch (error) {
    console.log(error);
    res.status(404).json({ message: "Не удалось удалить курс" });
  }
};

// export const getAuthors = async (req, res) => {
//     try {
//       const courseId = req.query.id;
//       const course = await courseModel.findById(courseId);
//       const { lessons, title } = course;
//       console.log(lessons,title);
//     } catch (error) {
//       console.log(error);
//       res.status(404).json({ message: "Не удалось получить видео" });
//     }
//   };
