import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs from 'dayjs';
import { useState, useEffect } from 'react';
import sprite from '../../images/symbol-defs.svg';
import { IconDown } from './datePicker.styled';

export const Calendar = ({ parentState, initial }) => {
  dayjs().format();
  
  const [dateDeadline, setDateDeadline] = useState(initial?initial:'');

  useEffect(() => {
  }, [dateDeadline]);

  return (
    <>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        
        <DatePicker
          views={['month', 'day']}
          value={dateDeadline}
          desktopModeMediaQuery=""
          onChange={newValue => {
            setDateDeadline(newValue);
            parentState(newValue);
          }}
          slots={{
            openPickerIcon: () => (
              <IconDown aria-label="chevron-down">
                <use href={sprite + '#icon-chevron-down'}></use>
              </IconDown>
            ),
          }}
          dayOfWeekFormatter={day => day.slice(0, 2)}
          slotProps={{
            desktopPaper: {
              sx: {
                borderRadius: '8px',
                color: 'var(--first-text-color)',
                backgroundColor: '#1F1F1F',
                '& .MuiPickersCalendarHeader-labelContainer': {
                  position: 'absolute',
                  left: '50%',
                  transform: 'translateX(-50%)',
                },
                '& .MuiPickersCalendarHeader-label': {
                  fontSize: '16px',

                  fontWeight: '500',
                  letterSpacing: '0.32px',
                },
                '& .MuiSvgIcon-root': {
                  fill: 'var(--first-text-color)',
                },

                '& .MuiTypography-root': {
                  color: 'var(--last-text-color)',
                  height: '24px',
                  marginTop: '14px',
                },
                '& .MuiDayCalendar-weekContainer': {
                  justifyContent: 'space-between',
                },

                '& .MuiButtonBase-root': {
                  color: 'var(--first-text-color)',
                  margin: 0,
                  padding: 0,
                  fontSize: '14px',
                  fontStyle: 'normal',
                  fontWeight: '400',
                  lineHeight: '18px',
                },
                '& .MuiPickersArrowSwitcher-root': {
                  width: '100%',
                  justifyContent: 'space-between',
                },
                '& .MuiPickersCalendarHeader-switchViewButton': {
                  display: 'none',
                },
                '& .MuiPickersCalendarHeader-root': {
                  padding: '0',
                  alignItems: 'baseline',
                  margin: '0',
                  borderBottomWidth: '2px',
                  borderBottomStyle: 'solid',
                  borderColor: 'var(--main-line-color)',
                },

                '& .MuiPickersArrowSwitcher-button': {
                  height: '21px',
                },

                '& .MuiDateCalendar-root': {
                  width: '233px',
                  height: '254px',
                  padding: '18px',
                  boxSizing: 'border-box',
                  background: 'var(--main-last-bg-color)',
                },

                '& .MuiPickersDay-hiddenDaySpacingFiller': {
                  height: '24px',
                  width: '24px',
                  minWidth: '24px',
                  maxWidth: '24px',
                },
              },
            },
            day: {
              sx: {
                height: '24px',
                width: '24px',
                minWidth: '24px',
                maxWidth: '24px',
                fontSize: '14px',

                '&.MuiPickersDay-root.Mui-selected': {
                  backgroundColor: 'var(--button-bg-color)',
                  color: 'var(--last-text-color)',
                },

                '&.Mui-selected:hover': {
                  backgroundColor: 'var(--button-bg-color)',
                },
                '&.MuiPickersDay-today': {
                  borderWidth: 1,
                  borderColor: 'var(--button-bg-color)',
                  color: 'var(--first-text-color)',
                },
              },
            },
            textField: {
              variant: 'outlined',
              sx: {
                '& input': { display: 'none' },
                '& fieldset': { border: 'none' },
              },
            },
          }}
        />
      </LocalizationProvider>
    </>
  );
};
