const imageStyles = ({ theme: { colors } }) => `
  display: flex;
  flex: 1 auto;
    justify-content: center;
    align-items: center;
    overflow: hidden
  img {
    flex-shrink: 0;
    min-width: 100%;
    min-height: 100%;
    max-width: 100%;
  }
`

export default imageStyles
