const express = require('express'),
  router = express.Router(),
  connection = require('../models/connection');

router.post('/login', function (req, res) {
  const sql = `SELECT * FROM employees WHERE username = ? AND password = ?`;
  let values = [
    req.body.username,
    req.body.password,
  ];
  connection.query(sql, [...values], function (err, data) {
    if (err) throw err;
    res.status(200).json({
      data,
      message: data.length ? 'Login successfully' : 'Invalid username or password',
    });
  });
});

router.post('/:username/leaves', function (req, res) {
  const sql = 'INSERT INTO employees (username, type, reason, file, start, end) VALUES(?, ?, ?, ?, ?, ?)';
  let values = [
    req.params.username,
    req.body.type,
    req.body.reason,
    req.body.file,
    req.body.start,
    req.body.end,
  ];
  connection.query(sql, [values], function (err) {
    if (err) throw err;
    res.json({
      status: 200,
      message: 'Leaves submitted successfully',
    })
  })
});

router.get('/:username/leaves', function (req, res) {
  const sql = 'SELECT * FROM leaves WHERE username = ?';
  let values = [
    req.params.username,
  ];
  connection.query(sql, [values], function (err, data) {
    if (err) throw err;
    res.json({
      status: 200,
      message: 'Leaves retrieved successfully',
    })
  })
});

router.post('/:username/reports', function (req, res) {
  const sql = 'INSERT INTO reports (username, content, comment) VALUES(?, ?, ?)';
  let values = [
    req.params.username,
    req.body.content,
    req.body.comment,
  ];
  connection.query(sql, [values], function (err, data) {
    if (err) throw err;
    res.json({
      status: 200,
      message: 'Reports submitted successfully',
    })
  })
});

router.get('/:username/reports', function (req, res) {
  const sql = 'SELECT * FROM reports WHERE username = ?';
  let values = [
    req.params.username,
  ];
  connection.query(sql, [values], function (err, data) {
    if (err) throw err;
    res.json({
      status: 200,
      message: 'Reports retrieved successfully',
    })
  })
});

module.exports = router;
