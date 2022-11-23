import jwt from "jsonwebtoken";

export default function (roles) {
  return function (req, res, next) {
    if (req.method === "OPTIONS") {
      next();
    }
    console.log(req.headers.authorization);
    try {
      const token = req.headers.authorization;
      if (!token) {
        return res.status(403).json({ message: "Пользователь не авторизован" });
      }
      const { roles: userRoles } = jwt.verify(token, "secret1234");
      let hasRole = false;
      userRoles.forEach((role) => {
        if (roles.includes(role)) {
          hasRole = true;
        }
      });
      if (!hasRole) {
        return res.status(403).json({ message: "У вас нет доступа" });
      }
      next();
    } catch (e) {
      console.log(e);
    }
  };
}
