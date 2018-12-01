$(() => {
  $('#new-events-form').submit(event => {
    event.preventDefault();

    $titleBox = $('#new-event-form-title');
    $locationBox = $('#new-event-form-location');
    $startBox = $('#new-event-form-start');
    $endBox = $('#new-event-form-end');
    $descriptionBox = $('#new-event-form-description');

    if (fieldIsValid($titleBox, titleIsValid) &&
        fieldIsValid($locationBox, locationIsValid) &&
        fieldIsValid($startBox, startIsValid) &&
        fieldIsValid($endBox, endIsValid) &&
        fieldIsValid($descriptionBox, descriptionIsValid)) {
      console.log('valid!');
    }

    function titleIsValid(title) {return !!title;}
    function locationIsValid(location) {return !!location;}
    function startIsValid(start) {return !!start &&!!(new Date(start));}
    function endIsValid(end) {return !!end && !!(new Date(end));}
    function descriptionIsValid(description) {return !!description;}
  });
});

function fieldIsValid($field, condition) {
  if (condition($field.val())) {
    $field.removeClass('error');
    return true;
  } else {
    $field.addClass('error');
    return false;
  }
}