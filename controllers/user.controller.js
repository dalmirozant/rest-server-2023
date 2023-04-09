const {response} = require('express');



const getUsers = (req, res = response) => {
   const {id,page=10} = req.query;
    res.json({
        ok: true,
        msg:'Corriendo API Controller',
        id,
        page,
    });
  }

const updateUser = (req, res) => {
    const {id} = req.params;
    res.json({
        ok: true,
        msg:'put API',
        id,
    });
  }

const createUser = (req, res) => {
    const body = req.body;
    res.json({
        ok: true,
        msg:'post API',
        body,
    });
  }

const deleteUser = (req, res) => {
    res.json({
        ok: true,
        msg:'delete API'
    });
  }

  module.exports = {
    getUsers,
    updateUser,
    createUser,
    deleteUser,
  }