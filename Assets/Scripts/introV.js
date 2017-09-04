function Start () {
		Handheld.PlayFullScreenMovie ("P_V.mp4", Color.black, FullScreenMovieControlMode.CancelOnInput);
}
function Update () {
	Application.LoadLevel("loadmenu");
	if (Input.GetKeyDown(KeyCode.Escape))
		Application.Quit(); 
}