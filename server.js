const express = require("express");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());

app.get("/", (req, res) => {
  const response = {
    email: "hannahjesuloluwa@gmail.com",
    current_datetime: new Date().toISOString(),
    github_url: "https://github.com/Oluwatise-Ajayi/HNG_Stage_Projects",
  };
  res.json(response);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
