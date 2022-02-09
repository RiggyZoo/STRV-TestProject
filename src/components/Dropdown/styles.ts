import styled from 'styled-components'
import { colors } from '../../styles/themes'
import Cursor from '../../assets/icons/Pointer.png'

export const Container = styled.div`
  display: flex;
  position: relative;
  align-items: center;
  cursor: url(${Cursor}), pointer;
`

export const Avatar = styled.div`
  background-color: ${colors.grey};
  border-radius: 100%;
  line-height: 14px;
  font-size: 14px;
  padding: 1rem;
  color: ${colors.greySecondary};
`
export const Name = styled.span`
  color: ${colors.greySecondary};
  line-height: 14px;
  font-size: 14px;
  margin-left: 0.5rem;
`
export const SvgElement = styled.img`
  margin: 0 0.5rem;
`

export const DropdownMenuContainer = styled.ul`
  position: absolute;
  z-index: 1;
  top: 3.5rem;
  list-style: none;
  width: 110%;
  background-color: ${colors.white};
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.198087);
  border-radius: 14px;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  &:before {
    z-index: 1;
    position: absolute;
    content: '';
    border-radius: 4px;
    height: 15px;
    width: 15px;
    right: 1.5rem;
    top: -0.3rem;
    background-color: ${colors.white};

    transform: rotate(45deg);
  }
`

export const StyledDropDownMenuItem = styled.li`
  white-space: nowrap;
  color: ${colors.dropdownLink};
  cursor: url(${Cursor}), pointer;
  & > span:hover {
    border-bottom: 1px solid ${colors.inputValue};
  }
  &:last-child(-1) {
    margin-top: 0.5rem;
  }
`
