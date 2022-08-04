document.querySelector(".dropdown").addEventListener("click", handleClick);

function handleClick(e) {
  e.preventDefault()
  const classList = e.currentTarget.classList

  const isOpen = classList.contains('dropdown--open')
  if (isOpen) {
    classList.remove('dropdown--open')
  } else {
    classList.add('dropdown--open')
  }
}
