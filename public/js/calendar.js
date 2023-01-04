import "tui-calendar/dist/tui-calendar.css";
import "tui-date-picker/dist/tui-date-picker.css";
import "tui-time-picker/dist/tui-time-picker.css";

import moment from 'moment';

import tuiCalendar from "tui-calendar";

const cal = new tuiCalendar('#calendar', {
    defaultView: "month",
    calendars: mainCalendar,
    month: {},
    week: {},
});

newbtn.addEventListner("click", e => {
    cal.openCreationPopup({
        start: new moment("2022-12-26").format("YYYY-MM-DD"),
        end: new moment("2022-12-26").format("YYYY-MM-DD")
    });
});