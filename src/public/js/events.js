'use strict';

$(function() {
  console.log('Hello!');

  $.get('/api/events/', renderEventsList);

  // handle event name search
  $('#events-search-field').submit(event => {
    event.preventDefault();
    const searchTerm = $(event.target).find('input').val();
    $.get(`/api/events/${searchTerm}`, renderEventsList);
  });

  // show event details
  $('#events-list').on('click', '.event-card', e => {
    const eventId = $(e.target).closest('.event-card').data('event-id');
    window.location.href = `/event/${eventId}`;
  });
});

function renderEventsList(eventsData) {
  if (!eventsData) {
    console.log(`No data returned ${eventsData}`);
    return;
  }
  console.log(eventsData);
  $('#events-list').empty();
  $('span#events-count').text(eventsData.length);

  eventsData.forEach((eventData, index) => {
    if (index % 3 === 0) {
      // create a new row
      $('#events-list').append(`<div class="row"></div>`)
    }
    $('#events-list .row').last().append(renderEventCard(eventData));
  })
}

function renderEventCard(eventData) {
  return $(`
    <div class="col-sm-4">
      <div class="event-card hoverable" data-event-id="${eventData.id}">
         <h2>${eventData.title}</h2>
         <h5><i class="fa fa-map-marker"></i> ${eventData.distance.toFixed(1)} km</h5>
         <h5><i class="fa fa-calendar"></i> ${new Date(eventData.startAt).toDateString()}</h5>
         <h5><i class="fa fa-users"></i> ${eventData.attendingUsers.length} attending</h5>
         <p>${eventData.description}</p>
       </div>  
    </div>
  `);
}
