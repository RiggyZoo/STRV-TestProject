import styled from 'styled-components'

export const DatePickerWrapper = styled.div<{ disabled: boolean | undefined }>`
  pointer-events: ${({ disabled }) => (disabled ? 'none' : 'all')};
`
