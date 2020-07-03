const dataURL = "https://api.jsonbin.io/b/5e905926172eb643896166e7";
let ryaba = "chicken";
function handleButton() {
 $.getJSON(dataURL, function(data) {
 	console.log(data);
 	ryaba = data.text;
 	$("result").text(ryaba);
 	console.log(ryaba);
  });
};
function handleData(data) {
  const var1 = $("input[name=var1]").value()
  const var2 = $("input[name=var2]").value()
  const var3 = $("input[name=var3]").value()
  const var4 = $("input[name=var4]").value()
  const var5 = $("input[name=var5]").value()
  const var6 = $("input[name=var6]").value()
  const speach = $("input[name=speach]").value()
}


  function replaceData(data) {
  let text = ryaba;
    text = data.text.replace('{var1}', var1);
    text = data.text.replace('{var2}', var2);
    text = data.text.replace('{var3}', var3);
    text = data.text.replace('{var4}', var4);
	text = data.text.replace('{var5}', var5);
	text = data.text.replace('{var6}', var6);
	text = data.text.replace('{speach}', speach);
    $("#result").text(text);
}

function init() {
	$("#button-fetch").click(handleButton);
	$("#button-replace").click(handleData, replaceData);
}

$(document).ready(init);
//вроде все верно, ваш API не возвращает текст, поэтому я вижу в консоли ошибку?