import express from "express";
import morgan from "morgan";
import { engine } from "express-handlebars";
import { fileURLToPath } from "url";
import path from "path";

const app = express();
const port = 3000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log("Directory Path:", __dirname);

app.use(morgan("combined"));

app.engine(".hbs", engine({ extname: ".hbs" }));
app.set("view engine", ".hbs");
app.set("views", path.join(__dirname, "resources/views"));

app.get("/", (req, res) => {
  res.render("home");
});

app.get("/news", (req, res) => {
  res.render("news");
});

app.listen(port, () =>
  console.log(`listening on port http://localhost:${port}`),
);
