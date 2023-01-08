const newEventForm = async (event) => {
  event.preventDefault();

  const title = document.querySelector("#event-name").value.trim();
  const description = document.querySelector("#event-description").value.trim();
  const startDate = document.querySelector("#event-start").value.trim();
  const endDate = document.querySelector("#event-end").value.trim();

  if (title && description && startDate && endDate) {
    const response = await fetch("/event", {
      method: "POST",
      body: JSON.stringify({ title, description, startDate, endDate }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      alert("success good job");
    } else {
      alert("uh-oh you broke it");
    }
  }
};

document
  .querySelector(".new-event-form")
  .addEventListener("submit", newEventForm);
