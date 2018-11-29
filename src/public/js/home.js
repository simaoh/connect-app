'use strict';

$(function() {
  console.log('Hello!');

  $('#events-search-field').submit(event => {
    event.preventDefault();
    const searchTerm = $(event.target).find('input').val();
    $.get(`/api/events/${searchTerm}`, data => {
      console.log(data);
    });
  });
});