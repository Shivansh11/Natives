var info : GameObject;
var exitConfirm : GameObject;
var menuConfirm : GameObject;
function enableInfo(){
	info.SetActive(true);
}
function disableInfo(){
	info.SetActive(false);
	exitConfirm.SetActive(false);
	menuConfirm.SetActive(false);
}
function disableExit(){
	exitConfirm.SetActive(false);
}
function enableExit(){
	menuConfirm.SetActive(false);
	exitConfirm.SetActive(true);
}
function exit(){
	Application.Quit();
}
function disableMenu(){
	menuConfirm.SetActive(false);
}
function enableMenu(){
	exitConfirm.SetActive(false);
	menuConfirm.SetActive(true);
}
function menu(){
	Application.LoadLevel("loadmenu");
}
function restart(){
	Application.LoadLevel(Application.loadedLevel);
}