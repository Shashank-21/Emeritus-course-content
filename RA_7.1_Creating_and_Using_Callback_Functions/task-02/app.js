const inNeedOfVolunteers = filterEventsWhichNeedVolunteers(eventsList);
const volunteerRecruitmentMessages =
  generateAllVolunteerRecruitmentMessages(inNeedOfVolunteers);

function displayEvents(eventList) {
  const tableBody = document
    .getElementById("eventTable")
    .getElementsByTagName("tbody")[0];
  tableBody.innerHTML = ""; // Clear existing rows

  eventList.forEach((event) => {
    let row = tableBody.insertRow();
    let titleCell = row.insertCell(0);
    let dateCell = row.insertCell(1);
    let locationCell = row.insertCell(2);
    let volunteersCell = row.insertCell(3);
    let detailsCell = row.insertCell(4);
    let messageCell = row.insertCell(5);

    titleCell.innerHTML = event.title;
    dateCell.innerHTML = event.date;
    locationCell.innerHTML = event.location;
    volunteersCell.innerHTML = `${event.numberOfVolunteers} / ${event.requiredVolunteers}`;

    let detailsBtn = document.createElement("button");
    detailsBtn.innerHTML = "Details";
    detailsBtn.addEventListener("click", () => showDetails(event));
    detailsCell.appendChild(detailsBtn);

    let messageBtn = document.createElement("button");
    messageBtn.innerHTML = "Message";
    messageBtn.addEventListener("click", () => {
      const eventIndex = inNeedOfVolunteers.findIndex(
        (needEvent) => needEvent.eventId === event.eventId
      );
      const message = volunteerRecruitmentMessages[eventIndex];
      showMessage(event, message);
    });
    if (event.numberOfVolunteers < event.requiredVolunteers) {
      messageCell.appendChild(messageBtn);
    }
  });
}

function showVolunteersMessage(event, message) {
  return `<h2>Volunteers needed for the event ${event.title}</h2>
        <p>${message}</p>`;
}

function formatEventDetails(event) {
  return `
        <h2>${event.title}</h2>
        <div class="modal-row">
            <p><strong>Date:</strong> ${event.date}</p>
            <p><strong>Location:</strong> ${event.location}</p>
        </div>
        <div class="modal-row">
            <p><strong>Volunteers Required:</strong> ${
              event.requiredVolunteers
            }</p>
            <p><strong>Volunteers Signed Up:</strong> ${
              event.numberOfVolunteers
            }</p>
        </div>
        <div class="modal-row">
            <p><strong>Status:</strong> ${event.eventStatus}</p>
            ${
              event.eventStatus === "Completed"
                ? `<p><strong>Waste Collected:</strong> ${event.wasteCollected}</p>`
                : ""
            }
        </div>
        <div class="modal-columns">
            <div>
                <h3>Organizers</h3>
                <ul class="organizers-list">
                    ${event.organizersContact
                      .map(
                        (organizer) =>
                          `<li>${organizer.name} - ${organizer.responsibility}</li>`
                      )
                      .join("")}
                </ul>
            </div>
            <div>
                <h3>Volunteer List</h3>
                <ul class="volunteers-list">
                    ${event.volunteerList
                      .map((volunteer) => `<li>${volunteer.name}</li>`)
                      .join("")}
                </ul>
            </div>
        </div>
        <div class="event-description">
            <strong>Description:</strong> ${event.eventDescription}
        </div>
    `;
}

function showDetails(event) {
  const modal = document.getElementById("eventModal");
  const modalDetails = document.getElementById("modalDetails");
  modalDetails.innerHTML = formatEventDetails(event);

  modal.style.display = "block";
  modal.querySelector(".close").onclick = () => {
    modal.style.display = "none";
  };
}
function showMessage(event, message) {
  const modal = document.getElementById("eventModal");
  const modalDetails = document.getElementById("modalDetails");
  modalDetails.innerHTML = showVolunteersMessage(event, message);

  modal.style.display = "block";
  modal.querySelector(".close").onclick = () => {
    modal.style.display = "none";
  };
}

window.onclick = (event) => {
  if (event.target == document.getElementById("eventModal")) {
    document.getElementById("eventModal").style.display = "none";
  }
};

document
  .getElementById("allEventsBtn")
  .addEventListener("click", () => displayEvents(eventsList));
document
  .getElementById("volunteerNeededBtn")
  .addEventListener("click", () => displayEvents(inNeedOfVolunteers));
