const controller = {}
controller.register = (data) => {
  if (data.firstName === '' ) {
    document
    .getElementById('first-name-error')
    .innerText = 'Please input first name'
  } else {
    document.getElementById('first-name-error')
    .innerText = ''
  }
}