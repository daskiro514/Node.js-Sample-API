const express = require('express')
const router = express.Router()

router.get('/', async (req, res) => {

  res.json({
    success: true,
    text: 'This is for Test Api',
  })
})

router.get('/all', async (req, res) => {

  res.json({
    success: true,
    text: 'This is for Test Api "All"'
  })
})

module.exports = router