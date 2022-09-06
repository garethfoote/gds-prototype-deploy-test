const express = require('express')
const router = express.Router()

// Add your routes here - above the module.exports line
// Run this code when a form is submitted to 'juggling-balls-answer'
router.post('/juggling-balls-answer', function (req, res) {

    // Make a variable and give it the value from 'how-many-balls'
    var howManyBalls = req.session.data['how-many-balls']
    console.log(howManyBalls);
    // Check whether the variable matches a condition
    if (parseInt(howManyBalls) >= 3){
      // Send user to next page
      res.redirect('/juggling-tricks')
    } else {
      // Send user to ineligible page
      res.redirect('/ineligible')
    }
  
  })

module.exports = router
