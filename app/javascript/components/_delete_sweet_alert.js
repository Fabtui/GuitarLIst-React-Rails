import swal from 'sweetalert';

export const deleteSweetAlert = () => {
  const deleteButton = document.querySelector('#delete-button')
  if (deleteButton) {
    const deleteLink = document.querySelector('#delete-link')
    deleteButton.addEventListener('click', () => {
      swal({
        buttons: [true, "Confirm"],
        title: "Are you sure?",
        text: "Are you sure that you want to delete this guitar?",
        icon: "warning",
        dangerMode: true,
      }).then((value) => {
        if (value) {
          deleteLink.click();
        }
      })
    })
  }
}
