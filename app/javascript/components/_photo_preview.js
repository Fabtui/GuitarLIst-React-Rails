export const previewImageOnFileSelect = () => {
  const inputs = document.querySelectorAll('.photo-input')
  if (inputs) {
    inputs.forEach(input => {
      input.addEventListener('change', () => {
        displaySecondaryPreview(input)
    });
  })
}

const displaySecondaryPreview = (input) => {
  if (input.files && input.files[0]) {
    const reader = new FileReader();
      const picContainer =  document.querySelector(`#photo-${input.id}`)
      reader.onload = (e) => {
        picContainer.src = e.currentTarget.result;
      }
      reader.readAsDataURL(input.files[0])
      picContainer.classList.contains('hidden') ?  picContainer.classList.remove('hidden') : ''
    }
  }
}
