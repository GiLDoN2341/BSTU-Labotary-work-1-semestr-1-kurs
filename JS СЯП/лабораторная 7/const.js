function write1(){
    let tuskact3 ="<center>"+"<div>"+document.all.dataD.tusk3.value +"</div>";
     tuskact3 += "<div>"+"Студент "+document.all.dataD.fio.value;
     tuskact3+=" специальность " +  document.getElementById("sp").value +" курс "+ document.all.dataD.cur[0].value;
      tuskact3 +=" должен сдавать следующие предметы: "+"</div>"+"</center>";
 tuskact3+="<center>"+"<ol>"+"<li>"+ document.all.dataD.Opti[0].value +"</li>"+"<li>"+document.all.dataD.Opti[2].value 
 +"</li>"+"<li>"+ document.all.dataD.Opti[4].value +"</li>"+"</ol>"+"<center>";
    document.write(tuskact3)
}
function write2(){
    let formdatavalue="";
    for(let i = 0; i<5;i++){
if (document.all.dataD.Opti[i].checked){
     formdatavalue += document.all.dataD.Opti[i].value+", "
}
}
   let data4work = "<ol>"+"<li>"+"Фамилия: "+ document.all.dataD.fio.value +"</li>"+
   "<li>"+"Имя: "+document.all.dataD.name.value +"</li>";
   data4work+="<li>"+"Специальность: "+ document.all.dataD.spic.value + "</li>";
   data4work+="<li>"+"Курс: "+ document.all.dataD.cur.value + "</li>";
   data4work+="<li>"+"Предметы: "+ formdatavalue + "</li>"+"</ol>";
   document.write(data4work);
}