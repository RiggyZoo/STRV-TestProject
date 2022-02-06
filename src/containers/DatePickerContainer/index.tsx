import React, { Dispatch, FC, SetStateAction, useEffect } from 'react'
import 'react-datepicker/dist/react-datepicker.css'
import DatePicker from 'react-datepicker'
import { Input } from '../../components/Input'
import { DatePickerWrapper } from './styles'

interface IDatePicker {
  date?: Date | null
  startDate?: string
  endDate?: string
  minDate?: Date | null
  maxDate?: string
  name?: string
  disabled?: boolean
  minTime?: string
  maxTime?: string
  onChange?: Dispatch<SetStateAction<Date | null>>
  label?: string
  isDateWithTime?: boolean
  isTime?: boolean
  isTouched?: boolean
  error?: string
  selectedDateFromField?: Date
}

const DatePickerContainer: FC<IDatePicker> = ({
  date,
  startDate,
  name,
  disabled,
  endDate,
  minDate,
  maxDate,
  minTime,
  maxTime,
  onChange,
  label,
  isDateWithTime,
  isTime,
  ...rest
}) => {
  const filterPassedTime = (time: any) => {
    const currentDate = new Date()
    if (rest.selectedDateFromField?.getDate() !== currentDate.getDate())
      return true
    const selectedDate = new Date(time)

    return currentDate.getTime() < selectedDate.getTime()
  }
  useEffect(() => {
    if (onChange) {
      onChange(null)
    }
  }, [rest.selectedDateFromField])

  return (
    <DatePickerWrapper disabled={disabled}>
      <DatePicker
        customInput={<Input label={label} disabled={disabled} {...rest} />}
        onChange={(date) => onChange && onChange(date)}
        selected={date && new Date(date)}
        dateFormat={isTime ? 'h:mm aa' : 'MMMM d, yyyy'}
        minDate={minDate && new Date(minDate)}
        showTimeSelect={isTime}
        filterTime={filterPassedTime}
        showTimeSelectOnly={isTime}
        timeIntervals={10}
        timeCaption="Time"
      />
    </DatePickerWrapper>
  )
}

export default DatePickerContainer
