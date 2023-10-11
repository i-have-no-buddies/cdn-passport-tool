function generateUrl(page) {
  let url = window.location.href.split('?')[0];
  let search = encodeURIComponent($('#filterSearch').val());
  url += `?page=${page}`;
  url += `&search=${search}`;
  window.location.href = url;
}

function filterPropertyTour() {
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
    id: 'filter-property-tour-01',
    title: 'Filter Guide',
    text: '1. Enter search keyword here.',
    arrow: false,
    attachTo: {
      element: '.filter-property-tour-01',
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
    id: 'filter-property-tour-02',
    title: 'Filter Guide',
    text: '2. Press enter to submit the search query.',
    arrow: false,
    attachTo: {
      element: '.filter-property-tour-02',
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
    id: 'filter-property-tour-03',
    title: 'Filter Guide',
    text: '3. Search results will appear here.',
    arrow: false,
    attachTo: {
      element: '.filter-property-tour-03',
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
  $('#filterSearch').on('keypress', (e) => {
    if (e.which === 13) generateUrl(1);
  });
});
