const divStyles = ({ theme: { colors } }) => `
  display: flex;
  justify-content: flex-end;
  margin-bottom: 50px;
  ul {
    display: flex;
    list-style: none;
    padding: 0;
    margin: 0;
    li {
      border-bottom: 2px solid transparent;
      &.active {
        pointer-events: none;
        &.next,
        &.prev {
          opacity: 0.5;
        }
      }
      a {
        display: block;
        color: ${colors.dark};
        padding: 4px 10px;
      }
      &.num {
        &.active {
          background-color: ${colors.light};
          border-bottom-color: ${colors.dark};
        }
      }
    }
  }
`

export default divStyles
