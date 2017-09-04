import UnityEngine.UI;
var clock : Text;
var pause : GameObject;
var info : GameObject;
var gameOver : GameObject;
var hacked : GameObject;
var time : float;
var sec : int;
var min : int;
var limit : int;
public var chat : GameObject;
public var pass : GameObject;
public var pup : GameObject;
public var pdown : GameObject;
public var tick : GameObject;
public var cross : GameObject;
public var groupBubbles : GameObject;
public var password : GameObject;
public var picUp : GameObject;
public var picDown : GameObject;
function Start(){
	time = 0;
	clock.color = Color.cyan;
	if(Application.loadedLevel < 23)
		limit = 45;
	else
		limit = 60;	
}
function Update () {
	if(info.activeSelf == false && hacked.activeSelf == false && time < limit){
		time += Time.deltaTime;
		sec = Mathf.FloorToInt(((limit + 1) - time) % 60);
		min = Mathf.FloorToInt(((limit + 1) - time) / 60);
		clock.GetComponent(Text).text = String.Format("{0:00}:{1:00}", min, sec);
	}
	if(((limit+1) - time) < 11)
		clock.color = Color.red; 
	if(time > limit){
		pause.SetActive(false);
		chat.SetActive(false);
		pass.SetActive(false);
		pup.SetActive(false);
		pdown.SetActive(false);
		tick.SetActive(false);
		cross.SetActive(false);
		groupBubbles.SetActive(false);
		password.SetActive(false);
		picUp.SetActive(false);
		picDown.SetActive(false);
		gameOver.SetActive(true);
	}
}