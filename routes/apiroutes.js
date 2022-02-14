const router = require('express').Router();
const store = require('../db/store')
router.get('/notes', (req,res) => {
 store.getNotes()
 .then((notes) => {
     return res.json(notes)
 })
})

router.post('/notes', (req,res) => {
    var note = req.body
    console.log(note)
    store.write(note)
    .then((notes) => {
        return res.json(notes)
    })
   })

   router.delete('/notes', (req,res) => {
       var note = req.body 
       console.log(note)
       store.delete(note)
       .then((notes) => {
           return res.json(notes)
       })
   })
module.exports = router;