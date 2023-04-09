const {response} = require('express');



const getUsers = (req, res = response) => {
    res.json({
        ok: true,
        msg:'Corriendo API Controller'
    });
  }

const updateUser = (req, res) => {
    res.json({
        ok: true,
        msg:'put API'
    });
  }

const createUser = (req, res) => {
    res.json({
        ok: true,
        msg:'post API'
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