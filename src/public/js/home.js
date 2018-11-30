'use strict';

$(function() {
  console.log('Hello!');

  $.get('/api/events/', renderEventsList);

  $('#events-search-field').submit(event => {
    event.preventDefault();
    const searchTerm = $(event.target).find('input').val();
    $.get(`/api/events/${searchTerm}`, renderEventsList);
  });
});

function renderEventsList(eventsData) {
  if (!eventsData) {
    console.log(`No data returned ${eventsData}`);
    return;
  }
  $('#events-list').empty();

  eventsData.forEach(eventData => {
    $('#events-list').append(
      `
       <div class="grid-list-item">
         <h2>${eventData.title}</h2>
         <p><i class="fa fa-map-marker"></i> ${eventData.location}</p>
         <p><i class="fa fa-calendar"></i> ${new Date(eventData.startAt).toLocaleString()}</p>
         <p>${eventData.description}</p>
       </div>
      `
    )
  })
}
