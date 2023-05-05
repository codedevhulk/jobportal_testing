import React, { useState } from "react";
import styled from "styled-components";

interface SignInProps {
  onSignIn: (email: string, password: string) => void;
}

const SignInForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;

const SignInButton = styled.button`
  background-color: #0077cc;
  color: #ffffff;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #005fa3;
  }
`;

const SignInInput = styled.input`
  padding: 10px;
  border: 1px solid #cccccc;
  border-radius: 5px;
  width: 100%;
`;

const SignInComponent: React.FC<any> = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignIn = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // onSignIn(email, password);
  };

  return (
    <SignInForm onSubmit={handleSignIn}>
      <SignInInput
        type="email"
        placeholder="Email"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
        required
      />
      <SignInInput
        type="password"
        placeholder="Password"
        value={password}
        onChange={(event) => setPassword(event.target.value)}
        required
      />
      <SignInButton type="submit">Sign In</SignInButton>
    </SignInForm>
  );
};

export default SignInComponent;
