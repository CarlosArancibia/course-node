const http = require("http");

//Desventaja: No se discrimina las rutas localhost:8090 -> . || localhost:8090/hola-mundo -> .
http
  .createServer((req, res) => {
    // console.log(req);

    // res.setHeader("Content-Disposition", "attachment; filename=data.csv");
    res.writeHead(201, { "content-type": "text/plain" });
    // res.writeHead(200, { "content-type": "application/json" });
    // res.writeHead(200, { "content-type": "application/csv" });

    // const person = {
    //   name: "Carlos",
    //   age: 24,
    // };

    res.write("Hello world!");

    // res.write("id, name\n");
    // res.write("1, Carlos\n");
    // res.write("2, Andrea\n");
    // res.write("3, Mel\n");
    // res.write("4, Valentina\n");
    // res.write("5, Eduardo\n");

    // res.write(JSON.stringify(person));
    res.end();
  })
  .listen(8090);
