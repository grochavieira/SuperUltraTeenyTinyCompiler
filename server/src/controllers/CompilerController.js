const compiler = require("../services/compiler");

class CompilerController {
  async show(request, response) {
    console.log("VALOR DO BODY", request.body);
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
  }
}

module.exports.CompilerController = CompilerController;
