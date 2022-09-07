import { Paper } from "@mui/material";
import { CalendarPicker, PickersDay, PickersDayProps } from "@mui/x-date-pickers"
import moment, { Moment } from "moment";
import { useState } from "react";

type ProgressCalendar = {
  startDate?: string;
  daysWithLearning?: moment.Moment[];
}

const ProgressCalendar = ({
  startDate = '2022-08-06',
  daysWithLearning = [
    moment('2022-08-06'),
    moment('2022-08-07'),
    moment('2022-08-08'),
    moment('2022-08-09')
  ]
}: ProgressCalendar): JSX.Element => {
  const [date, setDate] = useState<Moment | null>(moment());

  const renderPickedDay = (
    day: moment.Moment,
    selectedDates: Array<moment.Moment | null>,
    pickersDayProps: PickersDayProps<moment.Moment>
  ): JSX.Element => {
    return (
      <PickersDay
        {...pickersDayProps}
        selected={daysWithLearning.includes(day)}
        sx={{
          [`&&.${daysWithLearning.includes(day)}`]: {
            backgroundColor: "green"
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