import UnityEngine.UI;
var tasset : TextAsset;
var texts : String[];
var levelcheck : GameObject;
var info : GameObject;
var back : GameObject;
var map : GameObject;
var i : int;
public var start : GameObject;
public var exit : GameObject;
public var async : AsyncOperation;
public var tutorial : GameObject;
public var dim : Image;
function Start () {
	DontDestroyOnLoad (gameObject);
	texts = tasset.text.Split("|"[0]);
	i = 0;
}
function Update(){
	if(Application.loadedLevel == 1)
		Destroy(gameObject);	
}
function dimout(){
	async.allowSceneActivation = false;
	dim.CrossFadeAlpha(1.0f, 1, false);
	yield WaitForSeconds(1);
	async.allowSceneActivation = true;
}
function leveller(){
	info.SetActive(false);
	back.SetActive(false);
	map.SetActive(false);
	start.SetActive(false);
	exit.SetActive(false);
	tutorial.SetActive(false);
	
	PlayerPrefs.SetInt("mapEnable", 1);
	
	if(levelcheck.GetComponent(Text).text == texts[0])
		async = Application.LoadLevelAsync("one");	 			
	else if(levelcheck.GetComponent(Text).text == texts[1])
		async = Application.LoadLevelAsync("two");
	else if(levelcheck.GetComponent(Text).text == texts[2])
		async = Application.LoadLevelAsync("three");	
	else if(levelcheck.GetComponent(Text).text == texts[3])
		async = Application.LoadLevelAsync("four");
	else if(levelcheck.GetComponent(Text).text == texts[4])
		async = Application.LoadLevelAsync("five");
	else if(levelcheck.GetComponent(Text).text == texts[5])
		async = Application.LoadLevelAsync("six");	
	else if(levelcheck.GetComponent(Text).text == texts[6])
		async = Application.LoadLevelAsync("seven");
	else if(levelcheck.GetComponent(Text).text == texts[7])
		async = Application.LoadLevelAsync("eight");
	else if(levelcheck.GetComponent(Text).text == texts[8])
		async = Application.LoadLevelAsync("nine");	
	else if(levelcheck.GetComponent(Text).text == texts[9])
		async = Application.LoadLevelAsync("ten");			
	else if(levelcheck.GetComponent(Text).text == texts[10])
		async = Application.LoadLevelAsync("eleven");
	else if(levelcheck.GetComponent(Text).text == texts[11])
		async = Application.LoadLevelAsync("twelve");	
	else if(levelcheck.GetComponent(Text).text == texts[12])
		async = Application.LoadLevelAsync("thirteen");
	else if(levelcheck.GetComponent(Text).text == texts[13])
		async = Application.LoadLevelAsync("fourteen");
	else if(levelcheck.GetComponent(Text).text == texts[14])
		async = Application.LoadLevelAsync("fifteen");	
	else if(levelcheck.GetComponent(Text).text == texts[15])
		async = Application.LoadLevelAsync("sixteen");
	else if(levelcheck.GetComponent(Text).text == texts[16])
		async = Application.LoadLevelAsync("seventeen");
	else if(levelcheck.GetComponent(Text).text == texts[17])
		async = Application.LoadLevelAsync("eighteen");	
	else if(levelcheck.GetComponent(Text).text == texts[18])
		async = Application.LoadLevelAsync("nineteen");	
	else if(levelcheck.GetComponent(Text).text == texts[19])
		async = Application.LoadLevelAsync("twenty");	
	else if(levelcheck.GetComponent(Text).text == texts[20])
		async = Application.LoadLevelAsync("twentyone");
	else if(levelcheck.GetComponent(Text).text == texts[21])
		async = Application.LoadLevelAsync("twentytwo");	
	else if(levelcheck.GetComponent(Text).text == texts[22])
		async = Application.LoadLevelAsync("twentythree");
	else if(levelcheck.GetComponent(Text).text == texts[23])
		async = Application.LoadLevelAsync("twentyfour");
	else if(levelcheck.GetComponent(Text).text == texts[24])
		async = Application.LoadLevelAsync("twentyfive");	
	else if(levelcheck.GetComponent(Text).text == texts[25])
		async = Application.LoadLevelAsync("twentysix");
	else if(levelcheck.GetComponent(Text).text == texts[26])
		async = Application.LoadLevelAsync("twentyseven");
	else if(levelcheck.GetComponent(Text).text == texts[27])
		async = Application.LoadLevelAsync("twentyeight");	
	else if(levelcheck.GetComponent(Text).text == texts[28])
		async = Application.LoadLevelAsync("twentynine");	
	else if(levelcheck.GetComponent(Text).text == texts[29])
		async = Application.LoadLevelAsync("thirty");
	else if(levelcheck.GetComponent(Text).text == texts[30])
		async = Application.LoadLevelAsync("thirtyone");
	else if(levelcheck.GetComponent(Text).text == texts[31])
		async = Application.LoadLevelAsync("thirtytwo");	
	else if(levelcheck.GetComponent(Text).text == texts[32])
		async = Application.LoadLevelAsync("thirtythree");
	else if(levelcheck.GetComponent(Text).text == texts[33])
		async = Application.LoadLevelAsync("thirtyfour");
	else if(levelcheck.GetComponent(Text).text == texts[34])
		async = Application.LoadLevelAsync("thirtyfive");	
	else if(levelcheck.GetComponent(Text).text == texts[35])
		async = Application.LoadLevelAsync("thirtysix");
	else if(levelcheck.GetComponent(Text).text == texts[36])
		async = Application.LoadLevelAsync("thirtyseven");
	else if(levelcheck.GetComponent(Text).text == texts[37])
		async = Application.LoadLevelAsync("thirtyeight");	
	else if(levelcheck.GetComponent(Text).text == texts[38])
		async = Application.LoadLevelAsync("thirtynine");	
	else if(levelcheck.GetComponent(Text).text == texts[39])
		async = Application.LoadLevelAsync("forty");
	else if(levelcheck.GetComponent(Text).text == texts[40])
		async = Application.LoadLevelAsync("fortyone");
	else if(levelcheck.GetComponent(Text).text == texts[41])
		async = Application.LoadLevelAsync("fortytwo");	
	else if(levelcheck.GetComponent(Text).text == texts[42])
		async = Application.LoadLevelAsync("fortythree");
	else if(levelcheck.GetComponent(Text).text == texts[43])
		async = Application.LoadLevelAsync("fortyfour");
	else if(levelcheck.GetComponent(Text).text == texts[44])
		async = Application.LoadLevelAsync("fortyfive");	
	else if(levelcheck.GetComponent(Text).text == texts[45])
		async = Application.LoadLevelAsync("fortysix");
	else if(levelcheck.GetComponent(Text).text == texts[46])
		async = Application.LoadLevelAsync("fortyseven");
	else if(levelcheck.GetComponent(Text).text == texts[47])
		async = Application.LoadLevelAsync("fortyeight");	
	else if(levelcheck.GetComponent(Text).text == texts[48])
		async = Application.LoadLevelAsync("fortynine");
	dimout();		
} 