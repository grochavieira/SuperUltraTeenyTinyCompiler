const express = require("express");
const { CompilerController } = require("./controllers/CompilerController");

const routes = express.Router();

const compilerController = new CompilerController();

routes.get("/", compilerController.show);

module.exports.routes = routes;
