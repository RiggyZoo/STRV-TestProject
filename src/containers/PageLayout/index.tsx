import React, { FC } from 'react'
import {
  Container,
  Content,
  LeftContent,
  PageHeader,
  CloseButton,
  SvgElement,
  BackButton,
} from './styles'
import CloseIcon from '../../assets/icons/icon-close.svg'
import LeftContentSvg from '../../assets/icons/E..svg'
import { Dropdown } from '../../components/Dropdown'
import { useCurrentUser } from '../../contexts/CurrentUser'
import { removeAll } from '../../utils/token'
import { useMediaQuery } from '../../hooks/useMediaQuery'
import BackIcon from '../../assets/icons/icon-back.svg'
import { useHistory } from 'react-router-dom'

interface PageLayoutProps {
  isModal?: boolean
  onClose?: () => void
  isDetail?: boolean
}
const PageLayout: FC<PageLayoutProps> = ({
  children,
  isDetail,
  isModal,
  onClose,
}) => {
  const { userData, setAuthed } = useCurrentUser()
  const isBreakPoint = useMediaQuery(768)
  const history = useHistory()

  const onLogout = () => {
    removeAll()
    setAuthed(false)
  }

  const goToPrevPage = () => {
    const prevPage = localStorage.getItem('events')
    if (prevPage) {
      history.push(`/events/${prevPage}`)
    } else {
      history.push('/events/all')
    }
  }
  const { DropdownItem } = Dropdown
  return (
    <Container>
      <PageHeader>
        <LeftContent src={LeftContentSvg} />
        {isDetail && isBreakPoint && (
          <BackButton onClick={() => goToPrevPage()}>
            <SvgElement src={BackIcon} />
            Back to events
          </BackButton>
        )}
        {isModal ? (
          <CloseButton onClick={onClose}>
            <SvgElement src={CloseIcon} alt="icon" />
            {isBreakPoint ? 'Close' : null}
          </CloseButton>
        ) : (
          <Dropdown
            firstName={userData?.firstName}
            lastName={userData?.lastName}
          >
            <DropdownItem onClick={onLogout}>Log out</DropdownItem>
          </Dropdown>
        )}
      </PageHeader>
      <Content>{children}</Content>
    </Container>
  )
}

export default PageLayout
