//my writing 

var typeWriter = document.getElementById('typewriter');
var dataText = typeWriter.getAttribute('data-text');

var count = 0;
var dataTextLength = dataText.length;

var setText = function () {
  setTimeout(function () {
    typeWriter.textContent = typeWriter.textContent + dataText.charAt(count);
    count++;
    if (count <= dataTextLength) {
      setText();
    }
  }, 50);
}

window.onload = () => {
  setText()
}
