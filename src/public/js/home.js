'use strict';

$(function() {
  console.log('Hello!');

  $.get('/api/events/', eventsData => {
    eventsData.forEach(renderEventThumbnail);
  });

  $('#events-search-field').submit(event => {
    event.preventDefault();
    const searchTerm = $(event.target).find('input').val();
    $.get(`/api/events/${searchTerm}`, data => {
      console.log(data);
    });
  });
});

function renderEventThumbnail(eventData) {
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
}