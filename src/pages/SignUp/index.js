import React from 'react';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';

import logo from '../../assets/logo.svg';

const schema = Yup.object().shape({
  name: Yup.string().required('O Nome é obrigatorio'),
  email: Yup.string()
    .email('E-mail invalido')
    .required('O e-mail é obrigatorio'),
  password: Yup.string()
    .min(6, 'Minimo 6 caracteres')
    .required('A senha é obrigatoria'),
});

export default function SignIn() {
  function handleSubmit(data) {
    console.log(data);
  }
  return (
    <>
      <img src={logo} alt="Gobarber" />
      <Form schema={schema} onSubmit={handleSubmit}>
        <Input name="name" placeholder="Nome Completo" />
        <Input name="email" type="email" placeholder="Digite e-mail" />
        <Input
          name="password"
          type="password"
          placeholder="Digite sua Senha secreta"
        />
        <button type="submit">Criar Conta</button>
        <Link to="/">Já tenho Login</Link>
      </Form>
    </>
  );
}
