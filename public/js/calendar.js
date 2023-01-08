
document.addEventListener("DOMContentLoaded", function () {
    const calendarEl = document.getElementById("calendar");
    const calendar = new FullCalendar.Calendar(calendarEl, {
        initialView: "dayGridMonth",
        headerToolbar: {
            center: 'addEventButton'
        },
        customButtons: {
            addEventButton: {
                text: "Let's Party",
                click: function (event) {
                    const calEl = event.path;
                    document.location.replace('/event')
                    console.log(calEl);
                }
            }
        }
    });
    calendar.render();
})

const calendarEl = document.getElementById('calendar');