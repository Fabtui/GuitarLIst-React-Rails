export const previewImageOnFileSelect = () => {
  const input = document.getElementById('photo-input');
  if (input) {
    input.addEventListener('change', () => {
      displayPreview(input);
    })
  }
  const secondaryPics = document.querySelectorAll('.secondary-photo-input')
  if (secondaryPics) {
    secondaryPics.forEach(secondaryPic => {
      secondaryPic.addEventListener('change', () => {
        displaySecondaryPreview(secondaryPic)
    });
  })
}

const displayPreview = (input) => {
  if (input.files && input.files[0]) {
    const reader = new FileReader();
    reader.onload = (event) => {
      document.getElementById('photo-preview').src = event.currentTarget.result;
    }
    reader.readAsDataURL(input.files[0])
    document.getElementById('photo-preview').classList.remove('hidden');
  }
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
}}
