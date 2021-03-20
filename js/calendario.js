/* Opciones de Calendario*/

document.addEventListener('DOMContentLoaded', function() {
    var calendarEl = document.getElementById('calendario');

    var calendar = new FullCalendar.Calendar(calendarEl, {        
      plugins: [ 'dayGrid'],
      locale: 'es',
      events: [
        {
            title: 'Vacuna 1',
            start: '2020-10-01',
            end:'2020-10-02'
        },
        {
            title: 'Vacuna 2',
            start: '2020-10-20',
            end: '2020-10-20'
        },
        {
            title: 'Vacuna 3',
            start: '2020-11-20',
            end:'2020-11-20'
        },
        {
            title: 'Vacuna 4',
            start: '2020-11-25',
            end: '2020-11-25'
        },
        {
            title: 'Vacuna 5',
            start: '2020-12-10',
            end:'2020-12-15'
        },
        {
            title: 'Vacuna 6',
            start: '2020-12-29',
            end: '2020-12-29'
        }
        ]
    }); 

    calendar.render();
  });

  /*Otras funciones*/
  