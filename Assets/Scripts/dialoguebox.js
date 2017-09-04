public var box1 : GameObject;
public var box2 : GameObject;
public var box3 : GameObject;
public var box4 : GameObject;
public var box5 : GameObject;
public var box6 : GameObject;
public var box7 : GameObject;
public var box8 : GameObject;
public var box9 : GameObject;
public var info : GameObject;
public var cam : GameObject;
public var chat : GameObject;
public var pass : GameObject;
public var pup : GameObject;
public var pdown : GameObject;
public var tick : GameObject;
public var cross : GameObject;
public var tar : GameObject;
var flag : int = 0;
function Start () {
	tar.SetActive(false);
	box1.SetActive(true);
	box2.SetActive(false);
	box3.SetActive(false);
	box4.SetActive(false);
	box5.SetActive(false);
	box6.SetActive(false);
	box7.SetActive(false);
	box8.SetActive(false);
	box9.SetActive(false);
}

function Update () {
	if(info.activeSelf == true && flag == 0){
		box2.SetActive(false);
		flag = 1;
	}	
	if(flag == 1 && info.activeSelf == false){
			box3.SetActive(true);
			chat.SetActive(true);
			flag = 2;			
		}
	
}
function fbox1(){
	box1.SetActive(false);
	box2.SetActive(true);
}
function fbox3(){
	box3.SetActive(false);
	chat.SetActive(false);
	pass.SetActive(true);	
	box4.SetActive(true);
}
function fbox4(){
	box4.SetActive(false);
	pass.SetActive(false);
	pup.SetActive(true);
	box5.SetActive(true);
}
function fbox5(){
	box5.SetActive(false);
	pup.SetActive(false);
	pdown.SetActive(true);
	box6.SetActive(true);
}
function fbox6(){
	box6.SetActive(false);
	pdown.SetActive(false);
	tick.SetActive(true);
	box7.SetActive(true);
}
function fbox7(){
	box7.SetActive(false);
	tick.SetActive(false);
	cross.SetActive(true);
	box8.SetActive(true);
}
function fbox8(){
	box8.SetActive(false);
	cross.SetActive(false);
	box9.SetActive(true);
}
function fbox9(){
	box9.SetActive(false);
	tar.SetActive(true);
}