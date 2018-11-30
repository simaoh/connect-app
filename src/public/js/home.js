'use strict';

$(function() {
  console.log('Hello!');

  $.get('/api/events/', data => {
    console.log(data);
  });

  $('#events-search-field').submit(event => {
    event.preventDefault();
    const searchTerm = $(event.target).find('input').val();
    $.get(`/api/events/${searchTerm}`, data => {
      console.log(data);
    });
  });
});