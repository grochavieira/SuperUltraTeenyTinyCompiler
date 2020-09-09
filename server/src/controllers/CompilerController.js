const compiler = require("../services/compiler");

class CompilerController {
  async create(request, response) {
    try {
      console.log(request.body);
      const { code } = request.body;

      let tokens = compiler.tokenizer(code);
      let ast = compiler.parser(tokens);
      let newAst = compiler.transformer(ast);
      let outputCode = compiler.codeGenerator(newAst);

      response.send({
        tokens,
        ast,
        newAst,
        outputCode,
      });
    } catch (e) {
      response.send("Não foi possível compilar o código!");
    }
  }
}

module.exports.CompilerController = CompilerController;
