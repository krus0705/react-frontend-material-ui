const sql = require("../config/db");

// constructor
const User = function(user) {
  this.name = user.name;
  this.date = user.date;
  this.shipTo = user.shipTo;
  this.payment = req.body.payment,
  this.saleAmount = req.body.saleAmount
};

User.create = (newUser, result) => {
  console.log(newUser)
  let query = `SELECT * FROM recent_orders WHERE name LIKE '%${newUser.name}%'`;
  sql.query(query, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    if (res) {
      console.log('email is already')
    } else {
      sql.query("INSERT INTO recent_orders SET ?", newUser, (err, res) => {
        if (err) {
          console.log("error: ", err);
          result(err, null);
          return;
        }
    
        result(null, { name: res.name, ...newUser });
      });

      console.log("users: ", res);
      result(null, res);
    }
  });
};

User.findById = (name, result) => {
  sql.query(`SELECT * FROM recent_orders WHERE name = ${name}`, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    if (res.length) {
      console.log("found User: ", res[0]);
      result(null, res[0]);
      return;
    }

    // not found User with the id
    result({ kind: "not_found" }, null);
  });
};

User.getAll = (email, result) => {
  let query = "SELECT * FROM recent_orders";

  if (email) {
    query += ` WHERE title LIKE '%${name}%'`;
  } else {
    sql.query(query, (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }
  
      console.log("users: ", res);
      result(null, res);
    });
  }
};

User.getAllPublished = result => {
  sql.query("SELECT * FROM users WHERE published=true", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log("users: ", res);
    result(null, res);
  });
};

User.updateById = (id, User, result) => {
  sql.query(
    "UPDATE users SET title = ?, description = ?, published = ? WHERE id = ?",
    [User.title, User.description, User.published, id],
    (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }

      if (res.affectedRows == 0) {
        // not found User with the id
        result({ kind: "not_found" }, null);
        return;
      }

      console.log("updated User: ", { id: id, ...User });
      result(null, { id: id, ...User });
    }
  );
};

User.remove = (email, result) => {
  sql.query("DELETE FROM users WHERE email = ?", email, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    if (res.affectedRows == 0) {
      // not found User with the id
      result({ kind: "not_found" }, null);
      return;
    }

    console.log("deleted User with id: ", email);
    result(null, res);
  });
};

User.removeAll = result => {
  sql.query("DELETE FROM Users", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log(`deleted ${res.affectedRows} Users`);
    result(null, res);
  });
};

module.exports = User;
