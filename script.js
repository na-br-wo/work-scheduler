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


  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.
});
