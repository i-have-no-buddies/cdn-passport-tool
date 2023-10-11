function generateUrl(page) {
  let url = window.location.href.split('?')[0];
  let name = encodeURIComponent($('#filterName').val());
  let type = encodeURIComponent($('#filterType').val());
  let status = encodeURIComponent($('#filterStatus').val());
  url += `?page=${page}`;
  url += `&name=${name}`;
  url += `&type=${type}`;
  url += `&status=${status}`;
  window.location.href = url;
}

function filterUserTour() {
  const tour = new Shepherd.Tour({
    useModalOverlay: true,
    defaultStepOptions: {
      classes: 'shephered-theme-arrows',
      cancelIcon: {
        enabled: true,
      },
    },
  });
  tour.addStep({
    id: 'filter-user-tour-01',
    title: 'Filter Guide',
    text: '1. Enter a name of user here.',
    arrow: false,
    attachTo: {
      element: '.filter-user-tour-01',
      on: 'right',
    },
    buttons: [
      {
        text: 'Next <i class="fas fa-arrow-right"></i>',
        action: tour.next,
      },
    ],
  });
  tour.addStep({
    id: 'filter-user-tour-02',
    title: 'Filter Guide',
    text: '2. Press enter to submit the search query.',
    arrow: false,
    attachTo: {
      element: '.filter-user-tour-02',
      on: 'right',
    },
    buttons: [
      {
        secondary: true,
        text: '<i class="fas fa-arrow-left"></i> Back',
        action: tour.back,
      },
      {
        text: 'Next <i class="fas fa-arrow-right"></i>',
        action: tour.next,
      },
    ],
  });
  tour.addStep({
    id: 'filter-user-tour-03',
    title: 'Filter Guide',
    text: '3. Search results will appear here.',
    arrow: false,
    attachTo: {
      element: '.filter-user-tour-03',
      on: 'top',
    },
    buttons: [
      {
        secondary: true,
        text: '<i class="fas fa-arrow-left"></i> Back',
        action: tour.back,
      },
      {
        text: 'Done <i class="fas fa-check"></i>',
        action: tour.next,
      },
    ],
  });
  tour.addStep({
    id: 'filter-user-tour-04',
    title: 'Filter Guide',
    text: '1. Click the drop down option and select user type. This will submit the search query on change.',
    arrow: false,
    attachTo: {
      element: '.filter-user-tour-04',
      on: 'right',
    },
    buttons: [
      {
        secondary: true,
        text: '<i class="fas fa-arrow-left"></i> Back',
        action: tour.back,
      },
      {
        text: 'Next <i class="fas fa-arrow-right"></i>',
        action: tour.next,
      },
    ],
  });
  tour.addStep({
    id: 'filter-user-tour-05',
    title: 'Filter Guide',
    text: '2. Search results will appear here.',
    arrow: false,
    attachTo: {
      element: '.filter-user-tour-05',
      on: 'top',
    },
    buttons: [
      {
        secondary: true,
        text: '<i class="fas fa-arrow-left"></i> Back',
        action: tour.back,
      },
      {
        text: 'Done <i class="fas fa-check"></i>',
        action: tour.next,
      },
    ],
  });
  tour.addStep({
    id: 'filter-user-tour-06',
    title: 'Filter Guide',
    text: '1. Click the drop down option and select user status. This will submit the search query on change.',
    arrow: false,
    attachTo: {
      element: '.filter-user-tour-06',
      on: 'right',
    },
    buttons: [
      {
        secondary: true,
        text: '<i class="fas fa-arrow-left"></i> Back',
        action: tour.back,
      },
      {
        text: 'Next <i class="fas fa-arrow-right"></i>',
        action: tour.next,
      },
    ],
  });
  tour.addStep({
    id: 'filter-user-tour-07',
    title: 'Filter Guide',
    text: '2. Search results will appear here.',
    arrow: false,
    attachTo: {
      element: '.filter-user-tour-07',
      on: 'top',
    },
    buttons: [
      {
        secondary: true,
        text: '<i class="fas fa-arrow-left"></i> Back',
        action: tour.back,
      },
      {
        text: 'Done <i class="fas fa-check"></i>',
        action: tour.next,
      },
    ],
  });
  tour.start();
}

$(document).ready(() => {
  $('#pagination').html(pagination(page, totalPages, totalDocs, 'generateUrl'));
  $('#filterName').on('keypress', (e) => {
    if (e.which === 13) generateUrl(1);
  });
  $('#filterType, #filterStatus').on('change', () => generateUrl(1));
});
