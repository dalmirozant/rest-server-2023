const {Router} = require('express');
const { getUsers, updateUser, createUser, deleteUser } = require('../controllers/user.controller');

const router = Router();


router.get('/', getUsers);
  
router.put('/:id', updateUser);
  
router.post('/', createUser);
  
router.delete('/', deleteUser);

module.exports = router;