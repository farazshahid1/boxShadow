function boxshadow(options) {
  let boxs = document.querySelectorAll("div.box-shadow");

  if (options.shadow_type === "hard") options.shadow_type = "0px";
  else options.shadow_type = "15px";

  boxs.forEach((box) => {
    Image.style.boxShadow = `10px 10px ${options.shadow_type} 1px rgba(0,0,0,0.12)`;

    if (options.padding) {
      box.style.padding = "1em";
    }
  });
}

module.exports.shadowizard = boxshadow;
