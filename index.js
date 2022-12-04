let url = new URL(window.location.href);
let v = url.searchParams.get("v");
if (v !== null) {
  document.getElementById("body").innerHTML = `<video src="${v}" controls autoplay></video>`;
}
