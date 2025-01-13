import express from "express";

const router = express.Router();

let posts = [
  { id: 1, title: "Title One" },
  { id: 2, title: "Title Two" },
  { id: 3, title: "Title Three" },
  { id: 4, title: "Title Four" },
  { id: 5, title: "Title Five" },
];
//Get all posts
router.get("/", (req, res) => {
  const limit = parseInt(req.query.limit);

  if (!isNaN(limit) && limit > 0) {
    return res.json(posts.slice(0, limit));
  }
  // res.json(posts);
  res.status(200).json(post);
});

//Get single post
router.get("/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const post = posts.find((post) => post.id === id);

  if (!post) {
    return res
      .status(404)
      .json({ message: `A post with the id of ${id} wasnt found` });
  }
  res.status(200).json(post);

  //   res.json(posts.filter((post) => post.id === id));
});

// // app.get("/", (req, res) => {
// //   //   res.send("<h1>Hello world!</h1>");
// //   //   res.send({ message: "Hello world!" });
// //   res.sendFile(path.join(__dirname, "public", "index.html"));
// // });

// // app.get("/about", (req, res) => {
// //   res.sendFile(path.join(__dirname, "public", "about.html"));
// // });

// let posts = [
//   { id: 1, title: "Title One" },
//   { id: 2, title: "Title Two" },
//   { id: 3, title: "Title Three" },
//   { id: 4, title: "Title Four" },
//   { id: 5, title: "Title Five" },
// ];
// //Get all posts
// app.get("/api/posts", (req, res) => {
//   const limit = parseInt(req.query.limit);

//   if (!isNaN(limit) && limit > 0) {
//     return res.json(posts.slice(0, limit));
//   }
//   // res.json(posts);
//   res.status(200).json(post);
// });

// //Get single post
// app.get("/api/posts/:id", (req, res) => {
//   const id = parseInt(req.params.id);
//   const post = posts.find((post) => post.id === id);

//   if (!post) {
//     return res
//       .status(404)
//       .json({ message: `A post with the id of ${id} wasnt found` });
//   }
//   res.status(200).json(post);

//   //   res.json(posts.filter((post) => post.id === id));
// });

//Create new post
router.post("/", (req, res) => {
  console.log(req.body);
  res.status(201).json(posts);
});

export default router;
