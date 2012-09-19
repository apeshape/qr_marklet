## QR Marklet
A neat little QR-code helper (using google's QR generator API) for when you need to view a site that you are reading on your desktop, on your phone. 

Just add the [marklet](javascript:(function(\){b=document.getElementsByTagName('body'\)[0];u=location.href;qr='http://chart.apis.google.com/chart?chs=200x200&cht=qr&chl='+escape(u\);i=document.createElement('img'\);i.style.position='fixed';i.style.top='0';i.style.left='0';i.style.cursor = 'pointer';i.style.zIndex = '100000';i.src=qr;b.appendChild(i\);i.onclick = function(\){b.removeChild(i\);}}\)(\)) to your bookmarks and click it when you need to save som time typing that super long URL on your mobile device.

/Anders