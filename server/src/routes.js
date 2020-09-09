const express = require("express");
const { CompilerController } = require("./controllers/CompilerController");

const routes = express.Router();

const compilerController = new CompilerController();

routes.post("/compiler", compilerController.create);

module.exports.routes = routes;
