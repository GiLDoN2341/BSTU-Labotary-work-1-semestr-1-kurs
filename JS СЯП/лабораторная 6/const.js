let win = window
function go(name){
  win = window.open( "",name,"width=400,height=400");
}
function go1(){
win.close()
}
function go2(name){
  win.name = name
   win.document.write("а я xtdfgfgfgfgfgg "+ name)
  }
 function table(){
  let table = "<table style ='border:1px solid black'>";
 table += "<tr>"+"<td>"+ "Свойство" + "</td>"+"<td>"+"Значение" +"</td>"+ "</tr>";
 table += "<tr>"+"<td>" + "Инф. о браузерах" + "</td>"+"<td>" + navigator.userAgent +"</td>"+ "</tr>";
 table += "<tr>"+"<td>"+ "версию браузера" + "</td>"+"<td>"+navigator.appVersion +"</td>"+ "</tr>";
 table += "<tr>"+"<td>"+ "назва"+ "</td>"+"<td>"+ navigator.appName +"</td>"+ "</tr>";
 table += "<tr>"+"<td>"+"кодовое название браузера" + "</td>"+"<td>"+navigator.appCodeName +"</td>"+ "</tr>";
 table += "<tr>"+"<td>"+"ОС, которую использует пользователь" + "</td>"+"<td>"+navigator.platform +"</td>"+ "</tr>";
 table += "<tr>"+"<td>"+"включена ли поддержка Java в браузере" + "</td>"+"<td>"+navigator.javaEnabled() +"</td>"+ "</tr>";
 table += "<tr>"+"<td>"+"ширину и высоту экрана"+ "</td>"+"<td>"+ "ширина:"+screen.width +"высота:" +screen.height +"</td>"+ "</tr>";
 table += "<tr>"+"<td>"+"глубину цвета" + "</td>"+"<td>"+screen.colorDepth +"</td>"+ "</tr>";
 table += "<tr>"+"<td>"+"URL, которые были посещены в данном окне браузера;" + "</td>"+"<td>"+history.length +"</td>"+ "</tr>";
 table += "<tr>"+"<td>"+"URL текущего документа" + "</td>"+"<td>"+ location.href +"</td>"+ "</tr>";
 table += "<tr>"+"<td>"+"путь к загруженному документу" + "</td>"+"<td>"+location.pathname +"</td>"+ "</tr>";
 table += "<tr>"+"<td>"+ "имя домена загруженного документа"+"</td>"+"<td>"+ location.host +"</td>"+ "</tr>";
 table+="</table>";
 win.document.write(table);
 }
