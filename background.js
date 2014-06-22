console.log('background.js running...');


/**************************************************
* Chrome browserAction.onClicked Listener
**************************************************/
chrome.browserAction.onClicked.addListener(function(tab)
{
	console.log('InsertCSS browserAction click');
	// chrome.tabs.insertCSS(tab.id, {file: 'css.css', "allFrames": true}, function() {
	// 	console.log('css file has inserted.');
	// });
	chrome.tabs.executeScript( {
	  code: "window.getSelection().toString();"
	}, function(selection) {
		chrome.tabs.executeScript({ 
			code: "var my_url = \"http://tts-api.com/tts.mp3?q=" + selection + "\";\nvar node = document.createElement('div');\nnode.innerHTML = '<embed id=\"cytms_video\" src=\"' + my_url + '\">';\ndocument.querySelector('body').appendChild(node);\ndocument.getElementById('cytms_video').Play();\ndocument.getElementById('cytms_video').remove();\n"
		}, null);
	});
});