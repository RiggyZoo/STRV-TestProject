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
import { Dropdown } from '../../components/Dropdown'
import { useCurrentUser } from '../../contexts/CurrentUser'
import { removeAll } from '../../utils/token'

interface PageLayoutProps {
  isModal?: boolean
  onClose?: () => void
}
const PageLayout: FC<PageLayoutProps> = ({ children, isModal, onClose }) => {
  const { userData, setUserData, setAuthed } = useCurrentUser()

  const onLogout = () => {
    removeAll()
    setUserData(undefined)
    setAuthed(false)
  }
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
          <Dropdown
            onLogout={onLogout}
            firstName={userData?.firstName}
            lastName={userData?.lastName}
          />
        )}
      </PageHeader>
      <Content>{children}</Content>
    </Container>
  )
}

export default PageLayout
