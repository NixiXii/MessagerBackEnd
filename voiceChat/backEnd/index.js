import express from "express"

const app = express();
const PORT = 3000;

app.use(express.json());

app.get("/", (req, res) => {
  res.json({ message: "Server is working!" });
});

app.get("/greet", (req, res) => {
  res.json({ message: "Hello everyone" });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});


