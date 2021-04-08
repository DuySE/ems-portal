const express = require('express'),
  router = express.Router(),
  connection = require('../models/connection');

router.get('/employees', function (req, res) {
  const sql = 'SELECT * FROM employees';
  connection.query(sql, function (err, data, fields) {
    if (err) throw err;
    res.json({
      status: 200,
      data,
      message: 'Employee list retrieved successfully',
    })
  })
});

router.patch('/:username/leaves', function (req, res) {
  const sql = 'UPDATE leaves SET status = ? WHERE username = ?';
  let values = [
    req.body.status,
    req.params.username,
  ];
  connection.query(sql, [values], function (err, data, fields) {
    if (err) throw err;
    res.json({
      status: 200,
      message: 'Leaves submitted successfully',
    })
  })
});

router.patch('/:username/reports', function (req, res) {
  const sql = 'UPDATE reports SET comment = ? WHERE username = ?';
  let values = [
    req.body.content,
    req.params.username,
  ];
  connection.query(sql, [values], function (err, data, fields) {
    if (err) throw err;
    res.json({
      status: 200,
      message: 'Reports submitted successfully',
    })
  })
});

module.exports = router;
