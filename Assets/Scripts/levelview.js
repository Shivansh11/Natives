var rel : int;
var exitConfirm : GameObject;
var menuConfirm : GameObject;
var gameOver : GameObject;
var info : GameObject;
public var looksAt : int = 0;
public var target : Transform;
public var npc1 : Transform;
public var npc2 : Transform;
public var npc3 : Transform;
public var npc4 : Transform;
public var npc5 : Transform;
public var npc6 : Transform;
var ray : Ray;
var hit : RaycastHit;
public var chat : GameObject;
public var pass : GameObject;
public var pup : GameObject;
public var pdown : GameObject;
public var tick : GameObject;
public var cross : GameObject;
public var hacked : GameObject;
public var hflag : int = 0;
public var xAngle: float = 0.0; 
public var yAngle: float = 0.0;
var i : int;  
public var fov : float = 50;
public var dim : Image;
function Start() {
	dim.canvasRenderer.SetAlpha( 1.0f );
	fadeout();
	rel = 0;
	Screen.sleepTimeout = SleepTimeout.NeverSleep;
	info.SetActive(false);
	gameOver.SetActive(false);
	exitConfirm.SetActive(false);
	menuConfirm.SetActive(false);
	chat.SetActive(false);
	pass.SetActive(false);
	pup.SetActive(false);
	pdown.SetActive(false);
	tick.SetActive(false);
	cross.SetActive(false);
	hacked.SetActive(false);
	xAngle = 0;
    yAngle = 0;
    this.transform.rotation = Quaternion.Euler(-yAngle, -xAngle, 0.0);
}
function fadeout() {
	dim.CrossFadeAlpha(0.0f, 1, false);
}

function Update()
{    
	if(info.activeSelf == false && gameOver.activeSelf == false){
			//for zooming
			if (Input.touchCount == 2 && hflag == 0){
    		var touchZero = Input.GetTouch(0);
        	var touchOne = Input.GetTouch(1);
			var touchZeroPrevPos = touchZero.position - touchZero.deltaPosition;
        	var touchOnePrevPos = touchOne.position - touchOne.deltaPosition;
			var prevTouchDeltaMag = (touchZeroPrevPos - touchOnePrevPos).magnitude;
        	var touchDeltaMag = (touchZero.position - touchOne.position).magnitude;
			var deltaMagnitudeDiff = prevTouchDeltaMag - touchDeltaMag;
			GetComponent.<Camera>().fieldOfView += deltaMagnitudeDiff * Time.deltaTime * 5;
			GetComponent.<Camera>().fieldOfView = Mathf.Clamp(GetComponent.<Camera>().fieldOfView, 25.0f, 50.0f);
		}
		if(Input.touchCount == 1 && Input.GetTouch(0).phase==TouchPhase.Began){
			ray = Camera.main.ScreenPointToRay(Input.GetTouch(0).position);
			if(Physics.Raycast(ray, hit, Mathf.Infinity)){
				rel = 1;
			}
		}	
		//for rotating
    	if(Input.touchCount == 1 && Input.GetTouch(0).phase==TouchPhase.Moved && hflag == 0) {
    		if(GetComponent.<Camera>().fieldOfView>40) i = 20;
    		else if(GetComponent.<Camera>().fieldOfView>35) i = 15;
    		else if(GetComponent.<Camera>().fieldOfView>30) i = 10;
    		else if(GetComponent.<Camera>().fieldOfView>=20) i = 5;
     		xAngle +=Input.GetTouch(0).deltaPosition.x*Time.deltaTime*i;
    		yAngle -=Input.GetTouch(0).deltaPosition.y*Time.deltaTime*i;
    		yAngle = Mathf.Clamp(yAngle, -90, 90);
    		this.transform.rotation = Quaternion.Euler(-yAngle, -xAngle, 0.0);
		}
		//for looking at targets & hacking menu
		if(Input.touchCount == 1 && Input.GetTouch(0).phase==TouchPhase.Ended && hflag == 0 && rel == 1 ){
			ray = Camera.main.ScreenPointToRay(Input.GetTouch(0).position);
			if(Physics.Raycast(ray, hit, Mathf.Infinity)){
				showHack();	
			}
			rel = 0;			
			}
		}
		if (Input.GetKeyDown(KeyCode.Escape))
			info.SetActive(true);    
	
}
function showHack(){
	setup();
	chat.SetActive(true);
	yield WaitForSeconds(0.07);
	pass.SetActive(true);
	yield WaitForSeconds(0.07);
	pup.SetActive(true);
	yield WaitForSeconds(0.07);
	pdown.SetActive(true);
	yield WaitForSeconds(0.07);
	tick.SetActive(true);
	yield WaitForSeconds(0.07);
	cross.SetActive(true);
	hflag = 1;		
}
function setup(){
	if(hit.transform.gameObject.name == "tar0"){
		transform.LookAt(target);
		looksAt = 0;
		if(this.transform.rotation.eulerAngles.x > 90)
			yAngle = (360 - this.transform.rotation.eulerAngles.x);
		else
			yAngle = -this.transform.rotation.eulerAngles.x;
		xAngle = -this.transform.rotation.eulerAngles.y;
	}
	else if(hit.transform.gameObject.name == "npc1"){
		transform.LookAt(npc1);
		looksAt = 1;
		if(this.transform.rotation.eulerAngles.x > 90)
			yAngle = (360 - this.transform.rotation.eulerAngles.x);
		else
			yAngle = -this.transform.rotation.eulerAngles.x;	
		xAngle = -this.transform.rotation.eulerAngles.y;
	}
	else if(hit.transform.gameObject.name == "npc2"){
		transform.LookAt(npc2);
		looksAt = 2;
		if(this.transform.rotation.eulerAngles.x > 90)
			yAngle = (360 - this.transform.rotation.eulerAngles.x);
		else
			yAngle = -this.transform.rotation.eulerAngles.x;
		xAngle = -this.transform.rotation.eulerAngles.y;
	}
	else if(hit.transform.gameObject.name == "npc3"){
		transform.LookAt(npc3);
		looksAt = 3;
		if(this.transform.rotation.eulerAngles.x > 90)
			yAngle = (360 - this.transform.rotation.eulerAngles.x);
		else
			yAngle = -this.transform.rotation.eulerAngles.x;
		xAngle = -this.transform.rotation.eulerAngles.y;
	}
	else if(hit.transform.gameObject.name == "npc4"){
		transform.LookAt(npc4);
		looksAt = 4;
		if(this.transform.rotation.eulerAngles.x > 90)
			yAngle = (360 - this.transform.rotation.eulerAngles.x);
		else
			yAngle = -this.transform.rotation.eulerAngles.x;
		xAngle = -this.transform.rotation.eulerAngles.y;
	}
	else if(hit.transform.gameObject.name == "npc5"){
		transform.LookAt(npc5);
		looksAt = 5;
		if(this.transform.rotation.eulerAngles.x > 90)
			yAngle = (360 - this.transform.rotation.eulerAngles.x);
		else
			yAngle = -this.transform.rotation.eulerAngles.x;
		xAngle = -this.transform.rotation.eulerAngles.y;
	}
	else if(hit.transform.gameObject.name == "npc6"){
		transform.LookAt(npc6);
		looksAt = 6;
		if(this.transform.rotation.eulerAngles.x > 90)
			yAngle = (360 - this.transform.rotation.eulerAngles.x);
		else
			yAngle = -this.transform.rotation.eulerAngles.x;
		xAngle = -this.transform.rotation.eulerAngles.y;
	}
}
 
