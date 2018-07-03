import styled from 'styled-components';

export const Button = styled.button`
  padding: 5px 25px;
  background-image: linear-gradient(116deg, #08aeea 0%, #2af598 100%);
  color: white;
  font-weight: bold;
  text-transform: uppercase;
  border: none;
  font-family: sans-serif;
  filter: hue-rotate(0deg);
  transition: filter 300ms linear;
  cursor: pointer;
  &:focus,
  &:hover {
    filter: hue-rotate(45deg);
  }
`;