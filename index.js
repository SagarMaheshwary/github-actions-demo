const app = require("express")();

app.get("/", (req, res) => {
  res.json({
    message: "Hello World From Another Branch!",
  });
});

app.listen(3000, () => console.log(`Server started on Port: "3000"`));
