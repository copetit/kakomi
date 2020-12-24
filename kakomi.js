function inputCheck() {
  const inputValue = document.getElementById("input").value;
  const strArry = inputValue.split(/\r\n|\n/);
  const result = strArry.reduce((accu, curr) => {
    return accu + '"' + curr + '",\n';
  }, "");
  kakomi_result = `(${result.slice(0, -2)});`;
  document.getElementById("result").innerHTML = kakomi_result;
}

// copy button
function copy() {
  let result_area = document.getElementById("result");
  result_area.select();
  document.execCommand("copy");
}
