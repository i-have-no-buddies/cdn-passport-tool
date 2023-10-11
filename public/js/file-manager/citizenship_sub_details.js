function updateSubFolder(elem, folder) {
  bootbox.confirm({
    title: 'Update Folder',
    message: `Do you really want to update the sub folder <i>"${folder}"</i>?`,
    closeButton: false,
    buttons: {
      confirm: {
        label: 'Yes',
      },
    },
    callback: function (result) {
      if (result) {
        $('#' + elem + ' > input[name="subfoldername"]').val(
          $('#inpSubFolderName').val()
        );
        $('#' + elem).submit();
      }
    },
  });
}

function deleteFile(elem, filename) {
  bootbox.confirm({
    title: 'Delete File',
    message: `Do you really want to delete the file <i>"${filename}"</i>?`,
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

function deleteLink(elem, link) {
  bootbox.confirm({
    title: 'Delete Link',
    message: `Do you really want to delete the link <i>"${link}"</i>?`,
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

function downloadFile(elem, filename) {
  bootbox.confirm({
    title: 'Download File',
    message: `Do you really want to download the file <i>"${filename}"</i>?`,
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

function updateFile(elem, file, index) {
  bootbox.confirm({
    title: 'Update Folder',
    message: `Do you really want to update the file <i>"${file}"</i>?`,
    closeButton: false,
    buttons: {
      confirm: {
        label: 'Yes',
      },
    },
    callback: function (result) {
      if (result) {
        $('#' + elem + ' > input[name="new_file_name"]').val(
          $('#inpFileName' + index).val()
        );
        $('#' + elem).submit();
      }
    },
  });
}

function uploadFileTour() {
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
    id: 'upload-file-tour-01',
    title: 'Upload Guide',
    text: '1. Enter a upload file name. This is not required because the app will use the default file name upon upload.',
    arrow: false,
    attachTo: {
      element: '.upload-file-tour-01',
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
    id: 'upload-file-tour-02',
    title: 'Upload Guide',
    text: '2. These are the allowed file extensions that can be uploaded.',
    arrow: false,
    attachTo: {
      element: '.upload-file-tour-02',
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
    id: 'upload-file-tour-03',
    title: 'Upload Guide',
    text: '3. Click and choose a file you want to upload.',
    arrow: false,
    attachTo: {
      element: '.upload-file-tour-03',
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
    id: 'upload-file-tour-04',
    title: 'Upload Guide',
    text: '4. Click the button to upload the file.',
    arrow: false,
    attachTo: {
      element: '.upload-file-tour-04',
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
    id: 'upload-file-tour-05',
    title: 'Upload Guide',
    text: '5. Uploaded file will appear here.',
    arrow: false,
    attachTo: {
      element: '.upload-file-tour-05',
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

function addLinkTour() {
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
    id: 'add-link-tour-01',
    title: 'Link Guide',
    text: '1. Enter a link name here.<br>e.g. Google',
    arrow: false,
    attachTo: {
      element: '.add-link-tour-01',
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
    id: 'add-link-tour-02',
    title: 'Link Guide',
    text: '2. Enter a URL here.<br>e.g. https://google.com',
    arrow: false,
    attachTo: {
      element: '.add-link-tour-02',
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
    id: 'add-link-tour-03',
    title: 'Link Guide',
    text: '3. Click the button to add the link.',
    arrow: false,
    attachTo: {
      element: '.add-link-tour-03',
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
    id: 'add-link-tour-04',
    title: 'Link Guide',
    text: '4. Added link will appear here.',
    arrow: false,
    attachTo: {
      element: '.add-link-tour-04',
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
  $('#inpFolderName').on('keyup', function () {
    let text = $(this).val();
    text = text.replace(/[^a-zA-Z0-9\-\_ ]/g, '');
    $(this).val(text);
  });
  $('#inpFolderName').on('change', function () {
    let text = $(this).val();
    text = text.replace(/[^a-zA-Z0-9\-\_ ]/g, '');
    $(this).val(text);
  });
  $('input[name="filename"]').on('keyup', function () {
    let text = $(this).val();
    text = text.replace(/[^a-zA-Z0-9\-\_ ]/g, '');
    $(this).val(text);
  });
  $('input[name="filename"]').on('change', function () {
    let text = $(this).val();
    text = text.replace(/[^a-zA-Z0-9\-\_ ]/g, '');
    $(this).val(text);
  });
  $('input[name="linkname"]').on('keyup', function () {
    let text = $(this).val();
    text = text.replace(/[^a-zA-Z0-9\-\_ ]/g, '');
    $(this).val(text);
  });
  $('input[name="linkname"]').on('change', function () {
    let text = $(this).val();
    text = text.replace(/[^a-zA-Z0-9\-\_ ]/g, '');
    $(this).val(text);
  });
});
