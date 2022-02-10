import styled, { css } from 'styled-components'

export const Container = styled.div<{ mode: 'grid' | 'list' }>`
  ${({ mode }) =>
    mode === 'grid'
      ? css`
          display: grid;
          grid-template-rows: 1fr;
          grid-column-gap: 15px;
          grid-row-gap: 1rem;

          grid-template-columns: repeat(auto-fit, minmax(23rem, 1fr));
        `
      : css`
          display: flex;
          flex-direction: column;
          gap: 1rem;
        `}
`
