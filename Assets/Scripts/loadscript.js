public var async : AsyncOperation;
public var one : GameObject;
public var two : GameObject;
public var three : GameObject;
public var four : GameObject;
public var five : GameObject;
public var six : GameObject;
public var seven : GameObject;
public var eight : GameObject;
public var nine : GameObject;
function Start() {
	async = Application.LoadLevelAsync("menu");
	one.SetActive(true);
	two.SetActive(false);
	three.SetActive(false);
	four.SetActive(false);
	five.SetActive(false);
	six.SetActive(false);
	seven.SetActive(false);
	eight.SetActive(false);
	nine.SetActive(false);
}
function Update(){
	if(async.progress > 0)
		one.SetActive(true);
	if(async.progress > 0.2){
		one.SetActive(true);
		two.SetActive(true);
	}
	if(async.progress > 0.3){
		one.SetActive(true);
		two.SetActive(true);
		three.SetActive(true);
	}
	if(async.progress > 0.4){
		one.SetActive(true);
		two.SetActive(true);
		three.SetActive(true);
		four.SetActive(true);
	}
	if(async.progress > 0.5){
		one.SetActive(true);
		two.SetActive(true);
		three.SetActive(true);
		four.SetActive(true);
		five.SetActive(true);
	}
	if(async.progress > 0.6){
		one.SetActive(true);
		two.SetActive(true);
		three.SetActive(true);
		four.SetActive(true);
		five.SetActive(true);
		six.SetActive(true);
	}
	if(async.progress > 0.7){
		one.SetActive(true);
		two.SetActive(true);
		three.SetActive(true);
		four.SetActive(true);
		five.SetActive(true);
		six.SetActive(true);
		seven.SetActive(true);
	}
	if(async.progress > 0.8){
		one.SetActive(true);
		two.SetActive(true);
		three.SetActive(true);
		four.SetActive(true);
		five.SetActive(true);
		six.SetActive(true);
		seven.SetActive(true);
		eight.SetActive(true);
	}
	if (async.isDone){
		one.SetActive(true);
		two.SetActive(true);
		three.SetActive(true);
		four.SetActive(true);
		five.SetActive(true);
		six.SetActive(true);
		seven.SetActive(true);
		eight.SetActive(true);
		nine.SetActive(true);
	}		
}
