import React, { cloneElement } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Container = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 5px 10px;
  color: rgba(0, 0, 0, 0.54);
  border: none;
  font-family: Roboto, sans-serif;
  font-size: 16px;
  background-color: white;
  cursor: pointer;
  transition: color 200ms linear;
  &:hover {
    color: rgba(0, 0, 0, 0.8);
  }
`;

const Signin = ({ onClick, icon, text }) => {
  return (
    <Container onClick={onClick}>
      {icon && cloneElement(icon)}
      <span>{text}</span>
    </Container>
  );
};

Signin.propTypes = {
  onClick: PropTypes.func.isRequired,
  icon: PropTypes.element,
  text: PropTypes.string.isRequired,
};

export default Signin;
