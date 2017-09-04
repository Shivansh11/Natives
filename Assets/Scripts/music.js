var randnum : int;
public var songs : AudioClip[];
private static var instance : music;
public static function GetInstance() : music {
	return instance;
}
function Awake() {
    if (instance != null && instance != this) {
        Destroy(this.gameObject);
        return;
    } else {
        instance = this;
    }
    DontDestroyOnLoad(this.gameObject);
}
function Update(){
	if(GetComponent.<AudioSource>().isPlaying == false){		
		randnum = Random.Range(0, 2);
		GetComponent.<AudioSource>().clip = songs[randnum];
		GetComponent.<AudioSource>().Play(); 
	}
}