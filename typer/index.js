const saveDocument = (event) => {
  event.preventDefault();

  text = document.body.outerHTML;
  if (!text) {
    localStorage.removeItem("text");
  }
  localStorage.setItem("text", text);
};

const centerText = (event) => {
  event.preventDefault();
  const body = $("body")[0];

  if (body.style.textAlign === "center") return (body.style = "text-align: left");
  body.style = "text-align: center";
};

const makeBigOrSmall = (event) => {
  var range = window.getSelection().getRangeAt(0);
  var selectionContents = range.extractContents();
  var span = document.createElement("span");

  span.appendChild(selectionContents);
  range.insertNode(span);

  size = getComputedStyle(span).fontSize;
  size = parseInt(size.replace("px", ""));

  if (event.key === "[") {
    span.style.fontSize = size - 2;
  } else {
    span.style.fontSize = size + 2;
  }
};

$(document).ready(() => {
  $(document).keydown((event) => {
    //

    // console.log(event);

    //

    const map = new Map([
      [event.ctrlKey && event.keyCode == 83, saveDocument],
      [event.ctrlKey && event.shiftKey && event.keyCode == 67, centerText],
      [event.ctrlKey && ["[", "]"].includes(event.key), makeBigOrSmall],
    ]);

    map.forEach((value, key) => {
      if (key) value(event);
    });
  });
});

$(document).ready(() => {
  document.body.outerHTML = localStorage.getItem("text");
});
console.log("Loaded! get typin!");
