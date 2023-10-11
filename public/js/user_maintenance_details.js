function getPassword() {
  $('input[name="password"]').val(newPassword);
}

function updateUser() {
  bootbox.confirm({
    title: 'Update User',
    message: 'Do you really want to update this user?',
    closeButton: false,
    buttons: {
      confirm: {
        label: 'Yes',
      },
    },
    callback: function (result) {
      if (result) {
        $('#formUpdateUser').submit();
      }
    },
  });
}