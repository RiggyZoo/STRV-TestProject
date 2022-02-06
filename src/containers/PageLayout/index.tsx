import React, { FC } from 'react'
import {
  Container,
  Content,
  LeftContent,
  PageHeader,
  CloseButton,
  SvgElement,
} from './styles'
import CloseIcon from '../../assets/icons/icon-close.svg'
import LeftContentSvg from '../../assets/icons/E..svg'

interface PageLayoutProps {
  isModal?: boolean
  onClose?: () => void
}
const PageLayout: FC<PageLayoutProps> = ({ children, isModal, onClose }) => {
  return (
    <Container>
      <PageHeader>
        <LeftContent src={LeftContentSvg} />
        {isModal ? (
          <CloseButton onClick={onClose}>
            <SvgElement src={CloseIcon} alt="icon" />
            Close
          </CloseButton>
        ) : (
          <div>dropdown</div>
        )}
      </PageHeader>
      <Content>{children}</Content>
    </Container>
  )
}

export default PageLayout
