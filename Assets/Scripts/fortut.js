public var restart : GameObject;
public var next : GameObject;
public var pause : GameObject;
public var timer : GameObject;
public var chat : GameObject;
public var pass : GameObject;
public var pup : GameObject;
public var pdown : GameObject;
public var hacked : GameObject;
public var cross : GameObject;
public var tick : GameObject;
public var Search : Text;
public var camero : GameObject;
public var delay : float = 0.5f;
var i : int;
var j : int;
function disable(){
	pause.SetActive(false);
	timer.SetActive(false);
	chat.SetActive(false);
	pass.SetActive(false);
	pup.SetActive(false);
	pdown.SetActive(false);
	cross.SetActive(false);
	tick.SetActive(false);
	restart.SetActive(false);
	next.SetActive(false);
	hacked.SetActive(true);
	search();
}

function search(){
	for(i=0; i<2; i++){
		for(j=0; j<3; j++){
			
			Search.text = Search.text + ".";
			yield WaitForSeconds(delay);
		
		}
		Search.text = "Searching";
	}
	restart.SetActive(true);
	next.SetActive(true);
	Search.text = "Tutorial Complete.";				
}
