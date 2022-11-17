import { Paper } from "@mui/material";
import { CalendarPicker, PickersDay, PickersDayProps } from "@mui/x-date-pickers";
import moment, { Moment } from "moment";
import { useState } from "react";

type ProgressCalendar = {
  startDate?: string;
  daysWithLearning?: string[];
}

/**
 * This component is not for version 1.
 * @returns ProgressCalendar
 */
const ProgressCalendar = ({
  startDate = '2022-08-06',
  daysWithLearning = [
    moment('2022-10-12').format('MM-DD-YYYY'),
    moment('2022-10-11').format('MM-DD-YYYY'),
    moment('2022-10-10').format('MM-DD-YYYY'),
    moment('2022-10-09').format('MM-DD-YYYY')
  ]
}: ProgressCalendar): JSX.Element => {
  const [date, setDate] = useState<Moment | null>(moment());

  const renderPickedDay = (
    day: moment.Moment,
    selectedDates: Array<moment.Moment | null>,
    pickersDayProps: PickersDayProps<moment.Moment>
  ): JSX.Element => {
    console.log('day:', day.format('MM-DD-YYYY'), 'saved:', daysWithLearning[0])

    return (
      <PickersDay
        {...pickersDayProps}
        selected={daysWithLearning.includes(day.format('MM-DD-YYYY'))}
        sx={{
          '&.Mui-selected': {
            backgroundColor: '#eff6ff',
            color: '#2563eb'
          }
        }}
      />
    );
  };

  return (
    <Paper>
      <CalendarPicker
        readOnly
        disableFuture
        disableHighlightToday
        minDate={moment(startDate)}
        maxDate={moment()}
        date={date}
        onChange={(newDate) => setDate(newDate)}
        renderDay={renderPickedDay}
      />
    </Paper>
  )
}

export default ProgressCalendar;