public var restart : GameObject;
public var next : GameObject;
public var head0 : GameObject;
public var pause : GameObject;
public var timer : GameObject;
public var head1 : GameObject;
public var head2 : GameObject;
public var head3 : GameObject;
public var head4 : GameObject;
public var head5 : GameObject;
public var head6 : GameObject;
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
public var fill : GameObject;
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
	if(camero.GetComponent(levelview).looksAt == fill.GetComponent(Filluphacks).swap){
		if(!PlayerPrefs.HasKey(Application.loadedLevelName)){
			PlayerPrefs.SetInt(Application.loadedLevelName, 1);
			PlayerPrefs.SetInt("levelcount", (PlayerPrefs.GetInt("levelcount") + 1));
		}
		if(PlayerPrefs.GetInt("levelcount") == 10 && PlayerPrefs.GetInt("cTwo") == 0 ){
			PlayerPrefs.SetInt("cTwo", 1);
			Handheld.PlayFullScreenMovie("cTwo.mp4", Color.black, FullScreenMovieControlMode.Hidden);
			Application.LoadLevel("loadmenu");
		}
		if(PlayerPrefs.GetInt("levelcount") == 49 && PlayerPrefs.GetInt("cThree") == 0 ){
			PlayerPrefs.SetInt("cThree", 1);
			Handheld.PlayFullScreenMovie("cThree.mp4", Color.black, FullScreenMovieControlMode.Hidden);
			Application.LoadLevel("loadmenu");
		}
		if(PlayerPrefs.GetInt("levelcount") <= 10)
			Search.text = "Issue resolved.";
		else
			Search.text = "File retrieved.";
	}
	else
		Search.text = "Wrong Person!"; 				
}