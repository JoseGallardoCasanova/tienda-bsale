const path = require('path')
const connection = require('../config/db')

const productApi = (app) => {


  app.get("/tienda", (req, res) => {
    res.sendfile(path.join(__dirname + "/public/tienda/index.html"));
  });

  //Metodo usado para el root de la pagina
  app.get("/", (req, res) => {
    res.send("Bienvenido a Bsale");
  });

  //Metodo para traer todos los productos
  app.get("/bsale/products", (req, res) => {
    const sql = "SELECT * FROM product";
    connection.query(sql, (err, results) => {
      if (err) throw err;
      if (results.length > 0) {
        res.set('Access-Control-Allow-Origin', '*');
        res.json(results);
      } else {
        res.send("No se encontraron resultados");
      }
    });
  });

  //Metodo para traer productos por categoria
  app.get("/bsale/category/:id", (req, res) => {
    const {
      id
    } = req.params;
    const sql = `SELECT * FROM product WHERE category = ${id} `;
    connection.query(sql, (err, results) => {
      if (err) throw err;
      res.set('Access-Control-Allow-Origin', '*');
      if (results.length > 0) {
        res.json(results);
      } else {
        res.send("No se encontraron resultados");
      }
    });
  });

  //Buscar por coincidencia de nombre
  app.get("/bsale/search/:name", (req, res) => {
    const {
      name
    } = req.params;
    
    const sql = `SELECT * FROM product WHERE name LIKE '%${name}%'`;
    connection.query(sql, (err, results) => {
      if (err) throw err;
      res.set('Access-Control-Allow-Origin', '*');
      if (results.length > 0) {
        res.json(results);
      } else {
        res.send("No se encontraron resultados");
      }
    });
  })

};

module.exports = {
  productApi
};