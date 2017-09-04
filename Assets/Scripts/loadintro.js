var async : AsyncOperation;

function Start () {
	async = Application.LoadLevelAsync("introV");
	yield async;
}

function Update () {

}