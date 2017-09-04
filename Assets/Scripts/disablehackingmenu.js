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
public var camero : GameObject;
function disable(){
	camero.GetComponent.<levelview>().hflag = 0;
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
}