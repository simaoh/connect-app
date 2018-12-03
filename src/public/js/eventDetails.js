$(() => {
  $('#join-event-btn').click((e) => {
    const eventId = $(e.target).data('event-id');
    $.ajax({
      type: 'POST',
      url: `/api/event/${eventId}/attend/`,
      success: data => {
        window.location.href = `/event/${eventId}`;
      }
    })
  });
});