public var char1 : GameObject;
public var char2 : GameObject;
public var char3 : GameObject;
public var char4 : GameObject;


function Start () {
	char1.SetActive(false);
	char2.SetActive(false);
	char3.SetActive(false);
	char4.SetActive(false);

	animate();
}

function animate () {
	while(true){ 
	yield WaitForSeconds(2);
	char1.SetActive(true); 
	yield WaitForSeconds(0.1);
	char1.SetActive(false);
	char2.SetActive(true); 
	yield WaitForSeconds(0.1);
	char2.SetActive(false);
	char3.SetActive(true); 
	yield WaitForSeconds(0.1);
	char3.SetActive(false);
	char4.SetActive(true); 
	yield WaitForSeconds(0.1);
	char4.SetActive(false);
	}
}