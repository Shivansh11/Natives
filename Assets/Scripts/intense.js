var li : GameObject;
function Start () {
	li.GetComponent.<Light>().intensity = 0;
}
function Update () {
	if(Application.loadedLevelName == "one" || Application.loadedLevelName == "two" || Application.loadedLevelName == "three" || Application.loadedLevelName == "four" || Application.loadedLevelName == "five" || Application.loadedLevelName == "six" || Application.loadedLevelName == "seven" || Application.loadedLevelName == "eight" || Application.loadedLevelName == "nine" || Application.loadedLevelName == "ten" || Application.loadedLevelName == "fortytwo"){
		if(li.GetComponent.<Light>().intensity < 1.5)
			li.GetComponent.<Light>().intensity += Time.deltaTime;
	}		
	else if(Application.loadedLevelName == "eleven" || Application.loadedLevelName == "twelve" || Application.loadedLevelName == "thirteen" || Application.loadedLevelName == "fourteen" || Application.loadedLevelName == "fifteen" || Application.loadedLevelName == "seventeen" || Application.loadedLevelName == "eighteen" || Application.loadedLevelName == "nineteen" || Application.loadedLevelName == "twentyone" || Application.loadedLevelName == "twentytwo" || Application.loadedLevelName == "twentythree" || Application.loadedLevelName == "twentyfour" || Application.loadedLevelName == "twentyeight" || Application.loadedLevelName == "twentynine" || Application.loadedLevelName == "thirtytwo" || Application.loadedLevelName == "thirtyfour" || Application.loadedLevelName == "thirtyfive" || Application.loadedLevelName == "thirtysix" || Application.loadedLevelName == "thirtyseven" || Application.loadedLevelName == "thirtyeight" || Application.loadedLevelName == "thirtynine" || Application.loadedLevelName == "forty" || Application.loadedLevelName == "fortyone" || Application.loadedLevelName == "fortythree" || Application.loadedLevelName == "fortyfive" || Application.loadedLevelName == "fortysix" || Application.loadedLevelName == "fortyseven" || Application.loadedLevelName == "fortyeight"){
		if(li.GetComponent.<Light>().intensity < 1)
			li.GetComponent.<Light>().intensity += Time.deltaTime;
	}		
	else if(Application.loadedLevelName == "sixteen" || Application.loadedLevelName == "fortynine" || Application.loadedLevelName == "menu" || Application.loadedLevelName == "tut"){
		if(li.GetComponent.<Light>().intensity < 1.3)
			li.GetComponent.<Light>().intensity += Time.deltaTime;
	}
	else if(Application.loadedLevelName == "twenty" || Application.loadedLevelName == "twentyfive" || Application.loadedLevelName == "twentysix" || Application.loadedLevelName == "twentyseven" || Application.loadedLevelName == "thirty" || Application.loadedLevelName == "thirtyone" || Application.loadedLevelName == "thirtythree" || Application.loadedLevelName == "fortyfour"){
		if(li.GetComponent.<Light>().intensity < 1.2)
			li.GetComponent.<Light>().intensity += Time.deltaTime;
	}

}