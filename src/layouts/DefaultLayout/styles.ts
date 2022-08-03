import styled from 'styled-components'

export const LayoutContainer = styled.div`
  max-width: 70rem;
  min-height: 100%;
  margin-left: auto;
  margin-right: auto;
  padding: 2.5rem;
  background: ${(props) => props.theme['gray-800']};
  border-radius: 8px;
  /* qual a utilidade? */
  display: flex;
  flex-direction: column;
`
