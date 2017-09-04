public var map : GameObject;
public var back : GameObject;
public var complete : GameObject;
public var one : GameObject;
public var two : GameObject;
public var three : GameObject;
public var four : GameObject;
public var five : GameObject;
public var six : GameObject;
public var seven : GameObject;
public var eight : GameObject;
public var nine : GameObject;
public var ten : GameObject;
public var eleven : GameObject;
public var twelve : GameObject;
public var thirteen : GameObject;
public var fourteen : GameObject;
public var fifteen : GameObject;
public var sixteen : GameObject;
public var seventeen : GameObject;
public var eighteen : GameObject;
public var nineteen : GameObject;
public var twenty : GameObject;
public var twentyone : GameObject;
public var twentytwo : GameObject;
public var twentythree : GameObject;
public var twentyfour : GameObject;
public var twentyfive : GameObject;
public var twentysix : GameObject;
public var twentyseven : GameObject;
public var twentyeight : GameObject;
public var twentynine : GameObject;
public var thirty : GameObject;
public var thirtyone : GameObject;
public var thirtytwo : GameObject;
public var thirtythree : GameObject;
public var thirtyfour : GameObject;
public var thirtyfive : GameObject;
public var thirtysix : GameObject;
public var thirtyseven : GameObject;
public var thirtyeight : GameObject;
public var thirtynine : GameObject;
public var forty : GameObject;
public var fortyone : GameObject;
public var fortytwo : GameObject;
public var fortythree : GameObject;
public var fortyfour : GameObject;
public var fortyfive : GameObject;
public var fortysix : GameObject;
public var fortyseven : GameObject;
public var fortyeight : GameObject;
public var fortynine : GameObject;

function Start () {
	if(!PlayerPrefs.HasKey("levelcount"))
		PlayerPrefs.SetInt("levelcount", 0);
	if(!PlayerPrefs.HasKey("cOne"))
		PlayerPrefs.SetInt("cOne", 0);
	if(!PlayerPrefs.HasKey("cTwo"))
		PlayerPrefs.SetInt("cTwo", 0);
	if(!PlayerPrefs.HasKey("cThree"))
		PlayerPrefs.SetInt("cThree", 0);
	if(!PlayerPrefs.HasKey("rateGame"))
		PlayerPrefs.SetInt("rateGame", 5);
	if(PlayerPrefs.GetInt("levelcount") < 10)
		phase1();
	else if(PlayerPrefs.GetInt("levelcount") < 20)
		phase2();	
	else if(PlayerPrefs.GetInt("levelcount") < 30)
		phase3();	
	else if(PlayerPrefs.GetInt("levelcount") < 41)
		phase4();	
	else if(PlayerPrefs.GetInt("levelcount") < 49)
		phase5();	
	else if(PlayerPrefs.GetInt("levelcount") == 49){
		PlayerPrefs.DeleteAll();
		PlayerPrefs.SetInt("levelcount", 0);
		PlayerPrefs.SetInt("mapEnable", 0);
		PlayerPrefs.SetInt("cOne", 0);
		PlayerPrefs.SetInt("cTwo", 0);
		PlayerPrefs.SetInt("cThree", 0);
		map.SetActive(false);
		back.SetActive(false);
		complete.SetActive(true);
		phase1();
	}		
}
function phase1(){
	if(!PlayerPrefs.HasKey("one"))
		one.SetActive(true);	
	if(!PlayerPrefs.HasKey("two"))
		two.SetActive(true);
	if(!PlayerPrefs.HasKey("three"))
		three.SetActive(true);
	if(!PlayerPrefs.HasKey("four"))
		four.SetActive(true);
	if(!PlayerPrefs.HasKey("five"))
		five.SetActive(true);
	if(!PlayerPrefs.HasKey("six"))
		six.SetActive(true);
	if(!PlayerPrefs.HasKey("seven"))
		seven.SetActive(true);
	if(!PlayerPrefs.HasKey("eight"))
		eight.SetActive(true);
	if(!PlayerPrefs.HasKey("nine"))
		nine.SetActive(true);
	if(!PlayerPrefs.HasKey("ten"))
		ten.SetActive(true);										
}
function phase2(){
	if(!PlayerPrefs.HasKey("eleven"))
		eleven.SetActive(true);	
	if(!PlayerPrefs.HasKey("twelve"))
		twelve.SetActive(true);
	if(!PlayerPrefs.HasKey("thirteen"))
		thirteen.SetActive(true);
	if(!PlayerPrefs.HasKey("fourteen"))
		fourteen.SetActive(true);
	if(!PlayerPrefs.HasKey("fifteen"))
		fifteen.SetActive(true);
	if(!PlayerPrefs.HasKey("sixteen"))
		sixteen.SetActive(true);
	if(!PlayerPrefs.HasKey("seventeen"))
		seventeen.SetActive(true);
	if(!PlayerPrefs.HasKey("eighteen"))
		eighteen.SetActive(true);
	if(!PlayerPrefs.HasKey("nineteen"))
		nineteen.SetActive(true);
	if(!PlayerPrefs.HasKey("twenty"))
		twenty.SetActive(true);
}
function phase3(){
	if(!PlayerPrefs.HasKey("twentyone"))
		twentyone.SetActive(true);	
	if(!PlayerPrefs.HasKey("twentytwo"))
		twentytwo.SetActive(true);
	if(!PlayerPrefs.HasKey("twentythree"))
		twentythree.SetActive(true);
	if(!PlayerPrefs.HasKey("twentyfour"))
		twentyfour.SetActive(true);
	if(!PlayerPrefs.HasKey("twentyfive"))
		twentyfive.SetActive(true);
	if(!PlayerPrefs.HasKey("twentysix"))
		twentysix.SetActive(true);
	if(!PlayerPrefs.HasKey("twentyseven"))
		twentyseven.SetActive(true);
	if(!PlayerPrefs.HasKey("twentyeight"))
		twentyeight.SetActive(true);
	if(!PlayerPrefs.HasKey("twentynine"))
		twentynine.SetActive(true);
	if(!PlayerPrefs.HasKey("thirty"))
		thirty.SetActive(true);
}
function phase4(){
	if(!PlayerPrefs.HasKey("thirtyone"))
		thirtyone.SetActive(true);	
	if(!PlayerPrefs.HasKey("thirtytwo"))
		thirtytwo.SetActive(true);
	if(!PlayerPrefs.HasKey("thirtythree"))
		thirtythree.SetActive(true);
	if(!PlayerPrefs.HasKey("thirtyfour"))
		thirtyfour.SetActive(true);
	if(!PlayerPrefs.HasKey("thirtyfive"))
		thirtyfive.SetActive(true);
	if(!PlayerPrefs.HasKey("thirtysix"))
		thirtysix.SetActive(true);
	if(!PlayerPrefs.HasKey("thirtyseven"))
		thirtyseven.SetActive(true);
	if(!PlayerPrefs.HasKey("thirtyeight"))
		thirtyeight.SetActive(true);
	if(!PlayerPrefs.HasKey("thirtynine"))
		thirtynine.SetActive(true);
	if(!PlayerPrefs.HasKey("forty"))
		forty.SetActive(true);
	if(!PlayerPrefs.HasKey("fortyone"))
		fortyone.SetActive(true);
}
function phase5(){
	if(!PlayerPrefs.HasKey("fortytwo"))
		fortytwo.SetActive(true);	
	if(!PlayerPrefs.HasKey("fortythree"))
		fortythree.SetActive(true);
	if(!PlayerPrefs.HasKey("fortyfour"))
		fortyfour.SetActive(true);
	if(!PlayerPrefs.HasKey("fortyfive"))
		fortyfive.SetActive(true);
	if(!PlayerPrefs.HasKey("fortysix"))
		fortysix.SetActive(true);
	if(!PlayerPrefs.HasKey("fortyseven"))
		fortyseven.SetActive(true);
	if(!PlayerPrefs.HasKey("fortyeight"))
		fortyeight.SetActive(true);
	if(!PlayerPrefs.HasKey("fortynine"))
		fortynine.SetActive(true);
}
