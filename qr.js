//javascript:%28function%28%29%7Bb%3Ddocument.getElementsByTagName%28%22body%22%29%5B0%5D%3Bu%3Dlocation.href%3Bqr%3D%22http%3A//chart.apis.google.com/chart%3Fchs%3D200x200%26cht%3Dqr%26chl%3D%22+escape%28u%29%3Bi%3Ddocument.createElement%28%22img%22%29%3Bi.style.position%3D%22fixed%22%3Bi.style.top%3D%220%22%3Bi.style.left%3D%220%22%3Bi.style.cursor%20%3D%20%22pointer%22%3Bi.style.zIndex%20%3D%20%22100000%22%3Bi.src%3Dqr%3Bb.appendChild%28i%29%3Bi.onclick%20%3D%20function%28%29%7Bb.removeChild%28i%29%3B%7D%7D%29%28%29
//javascript:
(function(){
	b=document.getElementsByTagName("body")[0];
	u=location.href;
	qr="http://chart.apis.google.com/chart?chs=200x200&cht=qr&chl="+escape(u);
	i=document.createElement("img");
	i.style.position="fixed";
	i.style.top="0";
	i.style.left="0";
	i.style.cursor = "pointer";
	i.style.zIndex = "100000";
	i.src=qr;b.appendChild(i);
	i.onclick = function(){
		b.removeChild(i);
	}
})()