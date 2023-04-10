const {response} = require('express');
const Usuario = require('../models/usuario')

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

const createUser = async (req, res) => {
    const body = req.body;
    const usuario = new Usuario(body);

    await usuario.save()
    res.json({
        ok: true,
        usuario,
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