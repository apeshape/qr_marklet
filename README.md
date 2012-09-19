A neat little QR-code helper (using google's QR generator API) for when you need to view a site that you are reading on your desktop, on your phone. 

Just add the [marklet][1] to your bookmarks and click it when you need to save som time typing that super long URL on your mobile device.
[1]:javascript:%28function%28%29%7Bb%3Ddocument.getElementsByTagName%28%22body%22%29%5B0%5D%3Bu%3Dlocation.href%3Bqr%3D%22http%3A//chart.apis.google.com/chart%3Fchs%3D200x200%26cht%3Dqr%26chl%3D%22+escape%28u%29%3Bi%3Ddocument.createElement%28%22img%22%29%3Bi.style.position%3D%22fixed%22%3Bi.style.top%3D%220%22%3Bi.style.left%3D%220%22%3Bi.style.cursor%20%3D%20%22pointer%22%3Bi.style.zIndex%20%3D%20%22100000%22%3Bi.src%3Dqr%3Bb.appendChild%28i%29%3Bi.onclick%20%3D%20function%28%29%7Bb.removeChild%28i%29%3B%7D%7D%29%28%29

- Anders