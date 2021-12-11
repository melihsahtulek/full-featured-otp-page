window.addEventListener("load", () => {
  const resendNewCode = document.querySelector(".resendNewCode");
  const inputs = document.querySelectorAll(".otpInp");

  resendNewCode.addEventListener("click", () => {
    generateNewCode();
  });

  const check = (code) => {
    let currentIndex = 0;
    let inpValue = "";
    inputs.forEach((input) => {
      input.addEventListener("keyup", () => {
        inpValue += input.value;
        if (currentIndex < inputs.length - 1) {
          currentIndex++;
          inputs[currentIndex].focus();
        } else {
          inputs[currentIndex].blur();
          if (inpValue === code) {
            alert("welcome bro!");
          } else {
            location.reload();
          }
        }
      });
    });
  };

  const generateNewCode = () => {
    const codeTitle = document.querySelector("#code");
    let verifyCodeStr = "";
    while (true) {
      if (verifyCodeStr.length < 5) {
        let rnd = parseInt(Math.random() * 10);
        let n = rnd === 0 ? rnd + 1 : rnd;
        verifyCodeStr += n;
      } else {
        codeTitle.innerText = verifyCodeStr;
        check(verifyCodeStr);
        break;
      }
    }
  };

  generateNewCode();
});
