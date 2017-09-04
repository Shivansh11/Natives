public var rate : GameObject;
public var start : GameObject;
public var exit : GameObject;
public var confirm : GameObject;
public var complete : GameObject;
public var map : GameObject;
public var back : GameObject;
public var info : GameObject;
public var tutorial : GameObject;
public var shiv : GameObject;
public var dim: Image;
var ray : Ray;
var hit : RaycastHit;
private var xAngle: float = 0.0; 
private var yAngle: float = 0.0;
var i : int;
function Start() {
Screen.sleepTimeout = SleepTimeout.NeverSleep;
dim.canvasRenderer.SetAlpha( 1.0f );
dimin();

	if(!PlayerPrefs.HasKey("rate"))
		PlayerPrefs.SetInt("rate", 0);

	confirm.SetActive(false);
	shiv.SetActive(false);

	if(PlayerPrefs.GetInt("mapEnable") == 0 || PlayerPrefs.GetInt("levelcount") == 49){
		map.SetActive(false);
		back.SetActive(false);
	}	
	else{
		map.SetActive(true);	      //the MAP
		back.SetActive(true);        //back button on the MAP
	}	
	// Rate Game   
	if(PlayerPrefs.GetInt("rate") == 0 && PlayerPrefs.GetInt("levelcount") == PlayerPrefs.GetInt("rateGame") && PlayerPrefs.GetInt("mapEnable") == 1){
		PlayerPrefs.SetInt("rateGame", PlayerPrefs.GetInt("rateGame") + 5);
		rate.SetActive(true);
		map.SetActive(false);
		back.SetActive(false); 
	}
	info.SetActive(false);     //information of targets
	xAngle = -45;              //to point the camera
    yAngle = -333;			   //in the direction of START button
    this.transform.rotation = Quaternion.Euler(-yAngle, -xAngle, 0.0);
    exit.GetComponent(TextMesh).color = Color32(255,63,63,255);
    start.GetComponent(TextMesh).color = Color32(64,194,200,255);
	abrupt();
}
function abrupt(){ //START abrupt effect
start.SetActive(false);
yield WaitForSeconds(0.1);
start.SetActive(true);
yield WaitForSeconds(0.1);
start.SetActive(false);
yield WaitForSeconds(0.2);
start.SetActive(true);	
}
function dimin(){
dim.CrossFadeAlpha(0.0f, 1, false);
}
function Update()
{ 
if(!map.activeSelf && !confirm.activeSelf && !shiv.activeSelf && !complete.activeSelf && !rate.activeSelf){ 
	back.SetActive(false);
	//for hitting START or EXIT	
	if(Input.touchCount == 1) {
		if(Input.GetTouch(0).phase==TouchPhase.Began && Input.GetTouch(0).deltaPosition.magnitude < 3){
			ray = Camera.main.ScreenPointToRay(Input.GetTouch(0).position);
				if(Physics.Raycast(ray, hit, Mathf.Infinity)){
					if(hit.transform.gameObject.name == "Start")
						start.GetComponent(TextMesh).color= Color32.Lerp(Color32(64,194,200,255), Color32(64,101,103,255), 1);
					
					if(hit.transform.gameObject.name == "Exit")
						exit.GetComponent(TextMesh).color = Color32.Lerp(Color32(255,63,63,255), Color32(124,36,36,255), 1);						
						
					if(hit.transform.gameObject.name == "Tutorial")
						tutorial.GetComponent(TextMesh).color = Color32.Lerp(Color32(220,220,220,255), Color32(150,150,150,255), 1);	
				}
		}
		//Exit Released
		if(Input.GetTouch(0).phase==TouchPhase.Ended && exit.GetComponent(TextMesh).color != Color32(255,63,63,255)){
			confirm.SetActive(true);
			exit.GetComponent(TextMesh).color = Color32(255,63,63,255);
		}
		//Start Released	
		if(Input.GetTouch(0).phase==TouchPhase.Ended && start.GetComponent(TextMesh).color != Color32(64,194,200,255)){
			if(PlayerPrefs.GetInt("levelcount") == 0 && PlayerPrefs.GetInt("cOne") == 0 ){
				PlayerPrefs.SetInt("cOne", 1);
				Handheld.PlayFullScreenMovie("cOne.mp4", Color.black, FullScreenMovieControlMode.Hidden);	
			}
			map.SetActive(true);
			back.SetActive(true);
			start.GetComponent(TextMesh).color = Color32(64,194,200,255);
		}
		//Tutorial Released
		if(Input.GetTouch(0).phase==TouchPhase.Ended && tutorial.GetComponent(TextMesh).color != Color32(220,220,220,255)){
			Application.LoadLevel("tut");
			tutorial.GetComponent(TextMesh).color = Color32(220,220,220,255);
		}
		//touch moved > 3	
		if(Input.GetTouch(0).deltaPosition.magnitude >= 3){
			start.GetComponent(TextMesh).color = Color32(64,194,200,255); 
			exit.GetComponent(TextMesh).color = Color32(255,63,63,255);
			tutorial.GetComponent(TextMesh).color = Color32(220,220,220,255);
		}
		//for rotating
    	if(Input.GetTouch(0).phase==TouchPhase.Moved) {
     		xAngle +=Input.GetTouch(0).deltaPosition.x*Time.deltaTime*20;
    		yAngle -=Input.GetTouch(0).deltaPosition.y*Time.deltaTime*20;
    		if(yAngle > -280) yAngle = -280;
    		if(yAngle < -420) yAngle = -420;
    		this.transform.rotation = Quaternion.Euler(-yAngle, -xAngle, 0.0);
		}
	} 

	if (Input.GetKeyDown(KeyCode.Escape))
		confirm.SetActive(true);   
	}
}

