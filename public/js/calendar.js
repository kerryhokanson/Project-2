
const getEventData = async () => {
  const response = await fetch("/api/users/events");

  if (response.ok) {
    console.log(response.body);
    // console.log(response.json());
    const responseData = await response.json();
    // console.log(responseData);
    if (responseData.length) {
      const events = [];
      responseData.forEach(event => {
        let convertedEvent = {
          id: event.id,
          title: event.name,
          start: event.start_date,
        }
        events.push(convertedEvent);
      })
      return events;
    }
  } else {

    alert("uh-oh you broke it");
  }
}





const convertEvents = async (data) => {
  const events = [];
  data.forEach(event => {
    let convertedEvent = {
      id: event.id,
      title: event.name,
      start: event.start_date,
    }
    events.push(convertedEvent);
  })
  return events
}






document.addEventListener("DOMContentLoaded", async function () {
  const events = await getEventData();
  console.log(events);
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
    },
    events: events,
  });
  console.log(calendar.getEvents())
  calendar.render();
})

// const calendarEl = document.getElementById('calendar');