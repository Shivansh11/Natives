public var rateBox : GameObject;
function later(){
	rateBox.SetActive(false);
}
function ok(){
	Application.OpenURL("market://details?id=com.loyalsheep.Natives");
	PlayerPrefs.SetInt("rate", 1);
	rateBox.SetActive(false);
}
function never(){
	PlayerPrefs.SetInt("rate", 1);
	rateBox.SetActive(false);
}