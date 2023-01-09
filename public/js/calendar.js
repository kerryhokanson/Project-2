
const getEventData = async () => {
    const response = await fetch("/api/users/events", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
    
      if (response.ok) {
        console.log(response.body);
        // console.log(response.json());
        const responseData = await response.json();
        // console.log(responseData);
        return responseData;
      } else {
        
        alert("uh-oh you broke it");
      }
}



const convertKeys = async () => {
  const data = await getEventData();
  console.log(data);

  const keys = Object.keys(data);

}
convertKeys()





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
        },
        events: [

        ]
    });
    calendar.render();
})

const calendarEl = document.getElementById('calendar');