people1_4.onclick = function(){

			people1_4.style.animation = "peo 0.3s infinite ease-in alternate";
			people1_3.style.animation = "peo 0.3s 0.5s infinite ease-in alternate";
			people1_2.style.animation = "peo 0.3s 1s infinite ease-in alternate";
			people1_1.style.animation = "peo 0.3s 1.5s infinite ease-in alternate";
		}

people1_24.onclick = function(){

			people1_24.style.animation = "peo 0.3s infinite ease-in alternate";
			people1_23.style.animation = "peo 0.3s 0.5s infinite ease-in alternate";
			people1_22.style.animation = "peo 0.3s 1s infinite ease-in alternate";
			people1_21.style.animation = "peo 0.3s 1.5s infinite ease-in alternate";
		}

people4_1.onclick = function(){

			talk.style.animation = "ta 0.1s infinite linear alternate, ta- 0.2s infinite linear alternate, bigger 0.3s linear";
		}


var  astate = "off";

trophy.onclick = function(){
			if (astate == "off") {
			trophy.style.animation = "tro 2s ease";
			trophy2.style.animation = "tro 2s ease";
			trophy2.style.opacity = "100%";
			trophy.style.opacity = "0%";
			astate = "on";
			}
			else {
			trophy.style.animation = "troo 2s ease";
			trophy2.style.animation = "troo 2s ease";
			trophy2.style.opacity = "0%";
			trophy.style.opacity = "100%";
			astate = "off";
			}
		}


//스크롤 작용
window.onscroll = function(){
		var t =document.documentElement.scrollTop + document.body.scrollTop;
		moniter.innerHTML = t

		if (t > 6600) {
			people5_1arm.style.animation = "armmovefi 2s forwards";
			people5_2arm.style.animation = "armmovefii 2s forwards";

		}
		else{
			people5_1arm.style.animation = "";
			people5_2arm.style.animation = "";
		}

		if (t > 6800) {
			location.href = "https://jjoohee.github.io/doong0826/";
		}
}

