import React, {useState} from "react";
import Input from "../Input/Input";

import "./CadastroMaior.scss";

const CadastroMaior = () => {


  return (
    <div className="CadastroMaior">
       <div className="Texto">
            <h1>Faça seu Cadastro</h1>
       </div>
    
      <form onSubmit={salvarMaiorDeDezoito}>
        <Input
          value={nome}
          type="text"
          label="Nome completo"
          placeholder="Digite seu nome completo"
          atualizarState={setNome}
          obrigatorio
        />
  
         <Input
          value={idade}
          type="text"
          label="Idade"
          placeholder="Digite sua idade"
          atualizarState={setIdade}
          obrigatorio
        />
         <Input
          value={cpf}
          type="text"
          label="CPF"
          placeholder="Ex.: 00000000000"
          atualizarState={setCpf}
          obrigatorio
        />
         <Input
          value={cep}
          type="text"
          label="Cep"
          placeholder="Ex.: 00000000"
          atualizarState={setCep}
          obrigatorio
        />
       
         <Input
          value={contato}
          type="text"
          label="Celular"
          placeholder="Ex.: 00000000000"
          atualizarState={setContato}
          obrigatorio
        />
        <Input
          value={email}
          type="email"
          label="Email"
          placeholder="Digite seu email"
          atualizarState={setEmail}
          obrigatorio
        />
        <Input
          value={senha}
          type="password"
          label="Senha"
          placeholder="Digite sua senha"
          atualizarState={setSenha}
          obrigatorio
        />
      <input className="cadastro" type="submit" value={"Cadastrar"} />
      </form>
    </div>
    );
  }

export default CadastroMaior;