function generateUrl(page) {
  let url = window.location.href.split('?')[0];
  let folder_name = $('#filterFolderName').val();
  url += `?page=${page}`;
  url += `&folder_name=${folder_name}`;
  window.location.href = url;
}

function deleteFolder(elem, folder) {
  bootbox.confirm({
    title: 'Delete Folder',
    message: `Do you really want to delete the folder <i>"${folder}"</i>?`,
    closeButton: false,
    buttons: {
      confirm: {
        label: 'Yes',
      },
    },
    callback: function (result) {
      if (result) {
        $('#' + elem).submit();
      }
    },
  });
}

function filterFolderTour() {
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
    id: 'filter-folder-tour-01',
    title: 'Filter Guide',
    text: '1. Enter search keyword here.',
    arrow: false,
    attachTo: {
      element: '.filter-folder-tour-01',
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
    id: 'filter-folder-tour-02',
    title: 'Filter Guide',
    text: '2. Press enter to submit the search query.',
    arrow: false,
    attachTo: {
      element: '.filter-folder-tour-02',
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
    id: 'filter-folder-tour-03',
    title: 'Filter Guide',
    text: '3. Search results will appear here.',
    arrow: false,
    attachTo: {
      element: '.filter-folder-tour-03',
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

function createFolderTour() {
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
    id: 'create-folder-tour-01',
    title: 'Folder Guide',
    text: '1. Enter a folder name here.',
    arrow: false,
    attachTo: {
      element: '.create-folder-tour-01',
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
    id: 'create-folder-tour-02',
    title: 'Folder Guide',
    text: '2. Click this button to create the folder.',
    arrow: false,
    attachTo: {
      element: '.create-folder-tour-02',
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
    id: 'create-folder-tour-03',
    title: 'Folder Guide',
    text: '3. Created folder will appear here.',
    arrow: false,
    attachTo: {
      element: '.create-folder-tour-03',
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

$(document).ready(function () {
  $('#pagination').html(pagination(page, totalPages, totalDocs, 'generateUrl'));
  $('#filterFolderName').on('keypress', function (e) {
    if (e.which == 13) generateUrl(1);
  });
  $('input[name="foldername"]').on('keyup', function () {
    let text = $(this).val();
    text = text.replace(/[^a-zA-Z0-9\-\_ ]/g, '');
    $(this).val(text);
  });
  $('input[name="foldername"]').on('change', function () {
    let text = $(this).val();
    text = text.replace(/[^a-zA-Z0-9\-\_ ]/g, '');
    $(this).val(text);
  });
});
