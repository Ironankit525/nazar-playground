const express = require('express');
const db = require('../../server/db');

const router = express.Router();

router.get('/:id', async (req, res) => {
  const { rows } = await db.query('SELECT id, name, email FROM users WHERE id = $1', [req.params.id]);
  if (rows.length === 0) return res.status(404).json({ error: 'not found' });
  res.json(rows[0]);
});

module.exports = router;
