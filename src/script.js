const inputText = document.getElementById("inputText");
const generateImage = document.getElementById("image");
const submitButton = document.getElementById("generate");
let qrInfo;

// inputText.addEventListener("input", (e) => {
//   qrInfo = e.target.value;
// });

function resetForm() {
  inputText.value = "";
  qrInfo = "";
  inputText.disabled = false;
  generateImage.innerHTML = "";
  submitButton.textContent = "Generate";
}

function generateQr() {
  qrInfo = inputText.value.trim();
  console.log(qrInfo);

  if (qrInfo === "") {
    alert("Please enter some text to generate a QR code.");
    return;
  }
 let QR = document.createElement("img");
  QR.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrInfo}`;
  generateImage.appendChild(QR);

  inputText.disabled = true;
  submitButton.textContent = "Generate Another";
}

submitButton.addEventListener("click", (event) => {
 if (submitButton.textContent === "Generate Another" ) {
    resetForm()
  }else{
    generateQr()
  }
});
