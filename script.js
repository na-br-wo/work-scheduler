// setting up the date to display in the header
let date = dayjs().format('dddd MMM DD, YYYY')
const currentDate = $('#currentDay')
currentDate.text(date)

// setting up save button variable
const saveBtn = $('.saveBtn')

$(function () {
  // adding event listener when the saveBtn is clicked
  // using jquery .siblings selector, the "sibling" of the save button
  // in the HTML page will be the <textarea> element
  // using .parent() jquery selector to get the specific 'hour-x' id tag
  saveBtn.on('click', function() {
    let myEvent = $(this).siblings('.description').val()
    let time = $(this).parent().attr('id')

    // setting items to localStorage
    localStorage.setItem(myEvent, time)
  })

  // defining variable for the current hour to format the colors
  // of past/prestent/future time blocks
  let currentHour = dayjs().get('hour')



  // jquery to select .time-block class, looping through them
  // with the .each(function()) method
  $('.time-block').each(function() {
    // setting variable for the block's hour (hour-8, hour-9 etc...)
    // parseInt() takes a string and returns an integer, which
    // will be used with if/else statements for formatting
    // replacing the 'hour-' with an empty string so it is just
    // the number
    let blockHour = parseInt($(this).attr('id').replace('hour-', ''))

    // conditional statements to handle formatting (color)
    // by adding or removing classes
    if (blockHour > currentHour) {
      $(this).addClass('future')
      $(this).removeClass('present')
      $(this).removeClass('past')
    } else if (blockHour < currentHour) {
      $(this).addClass('past')
      $(this).removeClass('present')
      $(this).removeClass('future')
    } else {
      $(this).addClass('present')
      $(this).removeClass('past')
      $(this).removeClass('future')
    }
  })
});
