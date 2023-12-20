const express = require("express");
const path = require("path");
const multer = require("multer");
const logger = require("morgan");

const router = express.Router();

const upload = multer({ dest: "./public/uploads" });
const app = express();

//Built-in middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/static", express.static(path.join(__dirname, "public")));

//Application-level middleware
const loggerMiddleware = (req, res, next) => {
  console.log(`${new Date()}--- Request [${req.method}] [${req.url}]`);
  next();
};

app.use(loggerMiddleware);
//Third party middleware*************
// app.use(logger("dev"));
app.use(logger("combined"));

//Router-level middleware
app.use("/api/users", router);

const fakeAuth = (req, res, next) => {
  const authStatus = true;
  if (authStatus) {
    console.log("user authStatus: ", authStatus);
    next();
  } else {
    res.status(401);
    throw new Error("User  not Authorized");
  }
};
router.use(fakeAuth);
const getUser = (req, res) => {
  res.json({ message: "get all users" });
};
const createUser = (req, res) => {
  console.log("This is a request body received from client: ", req.body);
  res.json({ message: "user created" });
};
router.route("/").get(getUser).post(createUser);

//Error-handling middleware
const errorHandler = (err, req, res, next) => {
  const statusCode = res.statusCode ? res.statusCode : 500;
  res.status(statusCode);

  switch (statusCode) {
    case 401:
      res.json({
        title: "Unauthorized",
        message: err.message,
      });
      break;

    case 404:
      res.json({
        title: "Not Found",
        message: err.message,
      });
      break;
    case 404:
      res.json({
        title: "Server Error",
        message: err.message,
      });
      break;

    default:
      break;
  }
};

app.post(
  "/upload",
  upload.single("image"),
  (req, res, next) => {
    console.log(req.file, req.body);
    res.send(req.file);
  },
  (err, req, res, next) => {
    res.status(400).send({ err: err.message });
  }
);
app.all("*", (req, res) => {
  res.status(404);
  throw new Error("Route not found");
});
app.use(errorHandler);

// app.get("/", (req, res) => {
//   res.json("Hello World!");
// });

app.listen(5000, () => {
  console.log("server running on port 5000");
});
