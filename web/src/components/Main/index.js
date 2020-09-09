import React, { useState } from "react";

import Card from "../Card/index";
import api from "../../services/api";
import "./styles.css";

const Main = () => {
  const [code, setCode] = useState("");
  const [tokens, setTokens] = useState();
  const [ast, setAst] = useState();
  const [newAst, setNewAst] = useState();
  const [output, setOutput] = useState("");

  async function handleCompiler() {
    console.log(code);
    const { data } = await api.post("/compiler", { code });

    console.log(data);

    setTokens(data.tokens);
    setAst(data.ast);
    setNewAst(data.newAst);
    setOutput(data.outputCode);
  }

  return (
    <>
      <div className="main-container">
        <div className="title">
          <p>
            <span role="img">🔸</span>Super Ultra Teeny Tiny Compiler
            <span role="img">🔸</span>
          </p>
        </div>

        <div className="textarea-block">
          <label htmlFor="code">Código em Lisp:</label>
          <textarea
            value={code}
            onChange={(e) => setCode(e.target.value)}
            rows="4"
            cols="40"
            type="text"
            name="code"
            placeholder={`Exemplo:\n(add 2 2)\n(multiply 3 4)\n(add 2 (subtract 5 99))`}
          />
        </div>

        <div className="button-block">
          <button onClick={() => handleCompiler()}>
            <span>Compilar</span>
          </button>
        </div>
      </div>
      <div className="output-container">
        {output ? <Card title="output" content={output} /> : ""}
        {tokens ? <Card title="tokens" content={tokens} /> : ""}
        {ast ? <Card title="ast" content={ast} /> : ""}
        {newAst ? <Card title="new Ast" content={newAst} /> : ""}
      </div>
    </>
  );
};

export default Main;
