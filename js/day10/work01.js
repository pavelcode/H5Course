window.onload = function(){
	var div = document.getElementById("regForm");
	var btn = div.getElementsByTagName("button")[0];
	var tab = document.getElementById("data");
	btn.onclick = function(){
		var username = div.getElementsByTagName("input")[0].value;
		var sexall = document.getElementsByName("sex");
		var eduall = document.getElementsByTagName("option");
		var sex;
		for(var i=0; i<sexall.length; i++) {
			if(sexall[i].checked){
				sex = sexall[i].previousSibling.innerHTML;
			}
		}
		var age = div.getElementsByTagName("input")[4].value;
		var intrest = div.getElementsByTagName("input")[5].value;
		
		var edu;
		for(var j=0; j<eduall.length; j++) {
			if(eduall[j].selected) {
				edu = eduall[j].innerHTML;
			}
		}

		var pro = div.getElementsByTagName("input")[6].value;
		var intro = div.getElementsByTagName("textarea")[0].value;
		
		var tr = document.createElement("tr");
		var td01 = document.createElement("td");
		td01.innerHTML = username;
		var td02 = document.createElement("td");
		td02.innerHTML = sex;
		var td03 = document.createElement("td");
		td03.innerHTML = age;
		var td04 = document.createElement("td");
		td04.innerHTML = intrest;
		var td05 = document.createElement("td");
		td05.innerHTML = edu;
		var td06 = document.createElement("td");
		td06.innerHTML = pro;
		var td07 = document.createElement("td");
		td07.innerHTML = intro;
		
		tr.appendChild(td01);
		tr.appendChild(td02);
		tr.appendChild(td03);
		tr.appendChild(td04);
		tr.appendChild(td05);
		tr.appendChild(td06);
		tr.appendChild(td07);
		
		tab.children[0].appendChild(tr);
	}
};
