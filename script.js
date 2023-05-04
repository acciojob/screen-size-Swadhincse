//your JS code here. If required.
window.addEventListener('resize', () => {
  const width = window.innerWidth;
  const height = window.innerHeight;
  const sizeInfo = document.getElementById('sizeInfo');
  const h1Tag = sizeInfo.querySelector('h1');
  h1Tag.textContent = `Width: ${width} Height: ${height}`;
});
