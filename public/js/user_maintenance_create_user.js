function createUser() {
  bootbox.confirm({
    title: 'Create User',
    message: 'Do you really want to create this user?',
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
