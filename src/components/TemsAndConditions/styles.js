import styled from 'styled-components'

export const Div = styled.div`
    display: flex;
    flex-direction: row;
    text-align: center;
    margin: 5px;
    justify-content: center;
`
export const Button = styled.button`
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border-radius: 3px;
  color: white;
  border: 1px solid white;
  &:hover {
    border: 2px solid mediumslateblue;
    .button {
      display: none;
    }
  }
`
