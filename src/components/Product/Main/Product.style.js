const divStyles = ({ theme: { colors } }) => `
  border: 1px solid ${colors.borders};
  margin: 0 10px 20px;
  height: 300px;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  flex-basis: calc(20% - 20px);
  max-width: calc(20% - 20px);
`

const contentStyles = ({ theme: { colors } }) => `
  border-top: 1px solid ${colors.borders};
  padding: 10px 20px;
`

export { divStyles as default, contentStyles }
