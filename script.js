if (window.top === window) {

	var scriptInject = document.createElement("script");
	scriptInject.setAttribute("src", safari.extension.baseURI+"inject.js");
	scriptInject.setAttribute("type", "text/javascript");
	
	document.getElementsByTagName('body')[0].appendChild(scriptInject);

}
