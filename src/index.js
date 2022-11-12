const app = require("./app");

const PORT = process.env.PORT || 9000;

function server() {
  app.get("/", (req, resp) => {
    resp.send({ message: "SERVER ON" });
  });

  app.listen(PORT, () => {
    console.log(`RUN SERVER IN PORT: ${PORT}`);
  });
}

server();
