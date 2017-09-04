function Start(){

		Screen.sleepTimeout = SleepTimeout.NeverSleep;

}
function Update () {

    if(!this.transform.GetComponent(Animation).GetComponent.<Animation>().isPlaying)
		Application.LoadLevel( Application.loadedLevel + 1 );

	if (Input.GetKeyDown(KeyCode.Escape))
		Application.Quit(); 		
}