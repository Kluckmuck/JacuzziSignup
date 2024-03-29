function bulmaCalendarInit() {
    // Initialize all input of date type.
    const calendars = bulmaCalendar.attach('[type="date"]', options);

    // Loop on each calendar initialized
    calendars.forEach(calendar => {
        // Add listener to date:selected event
        calendar.on('date:selected', date => {
        });
    });

    // To access to bulmaCalendar instance of an element
    const element = document.querySelector('#my-element');
    if (element) {
        // bulmaCalendar instance is available as element.bulmaCalendar
        element.bulmaCalendar.on('select', datepicker => {
        });
    }
    alert('LOADED');
}