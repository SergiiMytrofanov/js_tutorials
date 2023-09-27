const fontSizeChanger = document.querySelector('#font-size-control');
const resizedText = document.querySelector('#text');

fontSizeChanger.addEventListener('input', () => {
    text.style.fontSize = `${fontSizeChanger.value}px`;
  });