public var offset : int;
public var swap : int;
var Passfill : Text;
var Pupfill : Image;
var Pdownfill : Image;
var Chatfill1 : Text;
var Chatfill2 : Text;
var Chatfill3 : Text;
var Chatfill4 : Text;
public var camero : GameObject;
var lines0 : String[];
var lines1 : String[];
var lines2 : String[];
var lines3 : String[];
var lines4 : String[];
var lines5 : String[];
var lines6 : String[];
public var tarpword : TextAsset;
public var npcpword1 : TextAsset;
public var npcpword2 : TextAsset;
public var npcpword3 : TextAsset;
public var npcpword4 : TextAsset;
public var npcpword5 : TextAsset;
public var npcpword6 : TextAsset;
public var tarchat : TextAsset;
public var npcchat1 : TextAsset;
public var npcchat2 : TextAsset;
public var npcchat3 : TextAsset;
public var npcchat4 : TextAsset;
public var npcchat5 : TextAsset;
public var npcchat6 : TextAsset;
public var tarUpic : Sprite;
public var npcUpic1 : Sprite;
public var npcUpic2 : Sprite;
public var npcUpic3 : Sprite;
public var npcUpic4 : Sprite;
public var npcUpic5 : Sprite;
public var npcUpic6 : Sprite;
public var tarDpic : Sprite;
public var npcDpic1 : Sprite;
public var npcDpic2 : Sprite;
public var npcDpic3 : Sprite;
public var npcDpic4 : Sprite;
public var npcDpic5 : Sprite;
public var npcDpic6 : Sprite;
var p1 : int;
var p2 : int;
var p3 : int;
var p4 : int;
var p5 : int;
var p6 : int;
var randnum : int;
var randnum1 : int;
var u1 : int;
var u2 : int;
var u3 : int;
var u4 : int;
var u5 : int;
var u6 : int;
function Start () {

	tarpword = Resources.Load("Targets/pass/" + (Application.loadedLevel-2)) as TextAsset; //for target
		tarchat = Resources.Load("Targets/lc/" + (Application.loadedLevel-2)) as TextAsset; 
		lines0 = tarchat.text.Split("\n"[0]);
			tarUpic = Resources.Load.<Sprite>("Targets/lpu/" + (Application.loadedLevel-2));
				tarDpic = Resources.Load.<Sprite>("Targets/lpd/" + (Application.loadedLevel-2));	
				/**********End Target***********/
if(PlayerPrefs.GetInt("levelcount") < 10){
	swap = Random.Range(1,4);					
	p1 = Random.Range(1, 10);
	u1 = Random.Range(1, 51);
	npcpword1 = Resources.Load("NPC/pass/" + (offset + p1)) as TextAsset;
		npcchat1 = Resources.Load("NPC/lc/" + (offset + p1)) as TextAsset; 
		lines1 = npcchat1.text.Split("\n"[0]);
			npcUpic1 = Resources.Load.<Sprite>("NPC/lpu/" + u1);
				npcDpic1 = Resources.Load.<Sprite>("NPC/lpd/" + u1);
				
	randnum = Random.Range(1, 10);
	randnum1 = Random.Range(1, 51);
	while(p1 == randnum)
		randnum = Random.Range(1, 10);
	p2 = randnum;
	while(u1 == randnum1)
		randnum1 = Random.Range(1, 51);
	u2 = randnum1;
	randnum = Random.Range(1, 10);
	while(p1 == randnum || p2 == randnum)
		randnum = Random.Range(1, 10);
	p3 = randnum;
	while(u1 == randnum1 || u2 == randnum1)
		randnum1 = Random.Range(1, 51);
	u3 = randnum1;	
	npcpword2 = Resources.Load("NPC/pass/" + (offset + p2)) as TextAsset;
	npcpword3 = Resources.Load("NPC/pass/" + (offset + p3)) as TextAsset;
		npcchat2 = Resources.Load("NPC/lc/" + (offset + p2)) as TextAsset; 
		lines2 = npcchat2.text.Split("\n"[0]);
		npcchat3 = Resources.Load("NPC/lc/" + (offset + p3)) as TextAsset; 
		lines3 = npcchat3.text.Split("\n"[0]);
			npcUpic2 = Resources.Load.<Sprite>("NPC/lpu/" + u2);
			npcUpic3 = Resources.Load.<Sprite>("NPC/lpu/" + u3);
				npcDpic2 = Resources.Load.<Sprite>("NPC/lpd/" + u2);
				npcDpic3 = Resources.Load.<Sprite>("NPC/lpd/" + u3);
	}
	else if(PlayerPrefs.GetInt("levelcount") < 20)
		phase2();
	else if(PlayerPrefs.GetInt("levelcount") < 30)
		phase3();
	else if(PlayerPrefs.GetInt("levelcount") < 49)
		phase45();						
}
function phase2(){
	swap = Random.Range(1,5);
	p1 = Random.Range(1, 10);
	u1 = Random.Range(1, 51);
	randnum = Random.Range(1, 10);
	randnum1 = Random.Range(1, 51);
	while(p1 == randnum)
		randnum = Random.Range(1, 10);
	p2 = randnum;
	while(u1 == randnum1)
		randnum1 = Random.Range(1, 51);
	u2 = randnum1;
	randnum = Random.Range(1, 10);
	while(p1 == randnum || p2 == randnum)
		randnum = Random.Range(1, 10);
	p3 = randnum;
	while(u1 == randnum1 || u2 == randnum1)
		randnum1 = Random.Range(1, 51);
	u3 = randnum1;
	while(p1 == randnum || p2 == randnum || p3 == randnum)
		randnum = Random.Range(1, 10);
	p4 = randnum;
	while(u1 == randnum1 || u2 == randnum1 || u3 == randnum1)
		randnum1 = Random.Range(1, 51);
	u4 = randnum1;	
	npcpword1 = Resources.Load("NPC/pass/" + (offset + p1)) as TextAsset;
		npcchat1 = Resources.Load("NPC/lc/" + (offset + p1)) as TextAsset; 
		lines1 = npcchat1.text.Split("\n"[0]);
			npcUpic1 = Resources.Load.<Sprite>("NPC/lpu/" + u1);
				npcDpic1 = Resources.Load.<Sprite>("NPC/lpd/" + u1);
	npcpword2 = Resources.Load("NPC/pass/" + (offset + p2)) as TextAsset;
		npcchat2 = Resources.Load("NPC/lc/" + (offset + p2)) as TextAsset; 
		lines2 = npcchat2.text.Split("\n"[0]);	
			npcUpic2 = Resources.Load.<Sprite>("NPC/lpu/" + u2);	
				npcDpic2 = Resources.Load.<Sprite>("NPC/lpd/" + u2);
	npcpword3 = Resources.Load("NPC/pass/" + (offset + p3)) as TextAsset;
		npcchat3 = Resources.Load("NPC/lc/" + (offset + p3)) as TextAsset; 
		lines3 = npcchat3.text.Split("\n"[0]);
			npcUpic3 = Resources.Load.<Sprite>("NPC/lpu/" + u3);
				npcDpic3 = Resources.Load.<Sprite>("NPC/lpd/" + u3);
	npcpword4 = Resources.Load("NPC/pass/" + (offset + p4)) as TextAsset;
		npcchat4 = Resources.Load("NPC/lc/" + (offset + p4)) as TextAsset; 
		lines4 = npcchat4.text.Split("\n"[0]);
			npcUpic4 = Resources.Load.<Sprite>("NPC/lpu/" + u4);
				npcDpic4 = Resources.Load.<Sprite>("NPC/lpd/" + u4);			
								
}
function phase3(){
	swap = Random.Range(1,6);
	p1 = Random.Range(1, 10);
	u1 = Random.Range(1, 51);
	randnum = Random.Range(1, 10);
	randnum1 = Random.Range(1, 51);
	while(p1 == randnum)
		randnum = Random.Range(1, 10);
	p2 = randnum;
	while(u1 == randnum1)
		randnum1 = Random.Range(1, 51);
	u2 = randnum1;
	randnum = Random.Range(1, 10);
	while(p1 == randnum || p2 == randnum)
		randnum = Random.Range(1, 10);
	p3 = randnum;
	while(u1 == randnum1 || u2 == randnum1)
		randnum1 = Random.Range(1, 51);
	u3 = randnum1;
	while(p1 == randnum || p2 == randnum || p3 == randnum)
		randnum = Random.Range(1, 10);
	p4 = randnum;
	while(u1 == randnum1 || u2 == randnum1 || u3 == randnum1)
		randnum1 = Random.Range(1, 51);
	u4 = randnum1;
	while(p1 == randnum || p2 == randnum || p3 == randnum || p4 == randnum) 
		randnum = Random.Range(1, 10);
	p5 = randnum;
	while(u1 == randnum1 || u2 == randnum1 || u3 == randnum1 || u4 == randnum1)
		randnum1 = Random.Range(1, 51);
	u5 = randnum1;
	npcpword1 = Resources.Load("NPC/pass/" + (offset + p1)) as TextAsset;
		npcchat1 = Resources.Load("NPC/lc/" + (offset + p1)) as TextAsset; 
		lines1 = npcchat1.text.Split("\n"[0]);
			npcUpic1 = Resources.Load.<Sprite>("NPC/lpu/" + u1);
				npcDpic1 = Resources.Load.<Sprite>("NPC/lpd/" + u1);
	npcpword2 = Resources.Load("NPC/pass/" + (offset + p2)) as TextAsset;
		npcchat2 = Resources.Load("NPC/lc/" + (offset + p2)) as TextAsset; 
		lines2 = npcchat2.text.Split("\n"[0]);	
			npcUpic2 = Resources.Load.<Sprite>("NPC/lpu/" + u2);	
				npcDpic2 = Resources.Load.<Sprite>("NPC/lpd/" + u2);
	npcpword3 = Resources.Load("NPC/pass/" + (offset + p3)) as TextAsset;
		npcchat3 = Resources.Load("NPC/lc/" + (offset + p3)) as TextAsset; 
		lines3 = npcchat3.text.Split("\n"[0]);
			npcUpic3 = Resources.Load.<Sprite>("NPC/lpu/" + u3);
				npcDpic3 = Resources.Load.<Sprite>("NPC/lpd/" + u3);
	npcpword4 = Resources.Load("NPC/pass/" + (offset + p4)) as TextAsset;
		npcchat4 = Resources.Load("NPC/lc/" + (offset + p4)) as TextAsset; 
		lines4 = npcchat4.text.Split("\n"[0]);
			npcUpic4 = Resources.Load.<Sprite>("NPC/lpu/" + u4);
				npcDpic4 = Resources.Load.<Sprite>("NPC/lpd/" + u4);
	npcpword5 = Resources.Load("NPC/pass/" + (offset + p5)) as TextAsset;
		npcchat5 = Resources.Load("NPC/lc/" + (offset + p5)) as TextAsset; 
		lines5 = npcchat5.text.Split("\n"[0]);
			npcUpic5 = Resources.Load.<Sprite>("NPC/lpu/" + u5);
				npcDpic5 = Resources.Load.<Sprite>("NPC/lpd/" + u5);				
}
function phase45(){
	swap = Random.Range(1,7);
	p1 = Random.Range(1, 10);
	u1 = Random.Range(1, 51);
	randnum = Random.Range(1, 10);
	randnum1 = Random.Range(1, 51);
	while(p1 == randnum)
		randnum = Random.Range(1, 10);
	p2 = randnum;
	while(u1 == randnum1)
		randnum1 = Random.Range(1, 51);
	u2 = randnum1;
	randnum = Random.Range(1, 10);
	while(p1 == randnum || p2 == randnum)
		randnum = Random.Range(1, 10);
	p3 = randnum;
	while(u1 == randnum1 || u2 == randnum1)
		randnum1 = Random.Range(1, 51);
	u3 = randnum1;
	while(p1 == randnum || p2 == randnum || p3 == randnum)
		randnum = Random.Range(1, 10);
	p4 = randnum;
	while(u1 == randnum1 || u2 == randnum1 || u3 == randnum1)
		randnum1 = Random.Range(1, 51);
	u4 = randnum1;
	while(p1 == randnum || p2 == randnum || p3 == randnum || p4 == randnum) 
		randnum = Random.Range(1, 10);
	p5 = randnum;
	while(u1 == randnum1 || u2 == randnum1 || u3 == randnum1 || u4 == randnum1)
		randnum1 = Random.Range(1, 51);
	u5 = randnum1;
	while(p1 == randnum || p2 == randnum || p3 == randnum || p4 == randnum || p5 == randnum) 
		randnum = Random.Range(1, 10);
	p6 = randnum;
	while(u1 == randnum1 || u2 == randnum1 || u3 == randnum1 || u4 == randnum1 || u5 == randnum1)
		randnum1 = Random.Range(1, 51);
	u6 = randnum1;
	npcpword1 = Resources.Load("NPC/pass/" + (offset + p1)) as TextAsset;
		npcchat1 = Resources.Load("NPC/lc/" + (offset + p1)) as TextAsset; 
		lines1 = npcchat1.text.Split("\n"[0]);
			npcUpic1 = Resources.Load.<Sprite>("NPC/lpu/" + u1);
				npcDpic1 = Resources.Load.<Sprite>("NPC/lpd/" + u1);
	npcpword2 = Resources.Load("NPC/pass/" + (offset + p2)) as TextAsset;
		npcchat2 = Resources.Load("NPC/lc/" + (offset + p2)) as TextAsset; 
		lines2 = npcchat2.text.Split("\n"[0]);	
			npcUpic2 = Resources.Load.<Sprite>("NPC/lpu/" + u2);	
				npcDpic2 = Resources.Load.<Sprite>("NPC/lpd/" + u2);
	npcpword3 = Resources.Load("NPC/pass/" + (offset + p3)) as TextAsset;
		npcchat3 = Resources.Load("NPC/lc/" + (offset + p3)) as TextAsset; 
		lines3 = npcchat3.text.Split("\n"[0]);
			npcUpic3 = Resources.Load.<Sprite>("NPC/lpu/" + u3);
				npcDpic3 = Resources.Load.<Sprite>("NPC/lpd/" + u3);
	npcpword4 = Resources.Load("NPC/pass/" + (offset + p4)) as TextAsset;
		npcchat4 = Resources.Load("NPC/lc/" + (offset + p4)) as TextAsset; 
		lines4 = npcchat4.text.Split("\n"[0]);
			npcUpic4 = Resources.Load.<Sprite>("NPC/lpu/" + u4);
				npcDpic4 = Resources.Load.<Sprite>("NPC/lpd/" + u4);
	npcpword5 = Resources.Load("NPC/pass/" + (offset + p5)) as TextAsset;
		npcchat5 = Resources.Load("NPC/lc/" + (offset + p5)) as TextAsset; 
		lines5 = npcchat5.text.Split("\n"[0]);
			npcUpic5 = Resources.Load.<Sprite>("NPC/lpu/" + u5);
				npcDpic5 = Resources.Load.<Sprite>("NPC/lpd/" + u5);
	npcpword6 = Resources.Load("NPC/pass/" + (offset + p6)) as TextAsset;
		npcchat6 = Resources.Load("NPC/lc/" + (offset + p6)) as TextAsset; 
		lines6 = npcchat6.text.Split("\n"[0]);
			npcUpic6 = Resources.Load.<Sprite>("NPC/lpu/" + u6);
				npcDpic6 = Resources.Load.<Sprite>("NPC/lpd/" + u6);			
}

function Update (){
	if(camero.GetComponent(levelview).looksAt == 0){
		if(swap == 1){
		Chatfill1.GetComponent(Text).text = lines1[0];
		Chatfill2.GetComponent(Text).text = lines1[1];
		Chatfill3.GetComponent(Text).text = lines1[2];
		Chatfill4.GetComponent(Text).text = lines1[3];
		Passfill.GetComponent(Text).text = npcpword1.text;
		Pupfill.sprite = npcUpic1;
		Pdownfill.sprite = npcDpic1;
		}
		else if(swap == 2){
		Chatfill1.GetComponent(Text).text = lines2[0];
		Chatfill2.GetComponent(Text).text = lines2[1];
		Chatfill3.GetComponent(Text).text = lines2[2];
		Chatfill4.GetComponent(Text).text = lines2[3];
		Passfill.GetComponent(Text).text = npcpword2.text;
		Pupfill.sprite = npcUpic2;
		Pdownfill.sprite = npcDpic2;
		}
		else if(swap == 3){
		Chatfill1.GetComponent(Text).text = lines3[0];
		Chatfill2.GetComponent(Text).text = lines3[1];
		Chatfill3.GetComponent(Text).text = lines3[2];
		Chatfill4.GetComponent(Text).text = lines3[3];
		Passfill.GetComponent(Text).text = npcpword3.text;
		Pupfill.sprite = npcUpic3;
		Pdownfill.sprite = npcDpic3;
		}
		else if(swap == 4){
		Chatfill1.GetComponent(Text).text = lines4[0];
		Chatfill2.GetComponent(Text).text = lines4[1];
		Chatfill3.GetComponent(Text).text = lines4[2];
		Chatfill4.GetComponent(Text).text = lines4[3];
		Passfill.GetComponent(Text).text = npcpword4.text;
		Pupfill.sprite = npcUpic4;
		Pdownfill.sprite = npcDpic4;
		}
		else if(swap == 5){
		Chatfill1.GetComponent(Text).text = lines5[0];
		Chatfill2.GetComponent(Text).text = lines5[1];
		Chatfill3.GetComponent(Text).text = lines5[2];
		Chatfill4.GetComponent(Text).text = lines5[3];
		Passfill.GetComponent(Text).text = npcpword5.text;
		Pupfill.sprite = npcUpic5;
		Pdownfill.sprite = npcDpic5;
		}
		else if(swap == 6){
		Chatfill1.GetComponent(Text).text = lines6[0];
		Chatfill2.GetComponent(Text).text = lines6[1];
		Chatfill3.GetComponent(Text).text = lines6[2];
		Chatfill4.GetComponent(Text).text = lines6[3];
		Passfill.GetComponent(Text).text = npcpword6.text;
		Pupfill.sprite = npcUpic6;
		Pdownfill.sprite = npcDpic6;
		}
	}
	if(camero.GetComponent(levelview).looksAt == 1){
		if(swap == 1){
		Chatfill1.GetComponent(Text).text = lines0[0];
		Chatfill2.GetComponent(Text).text = lines0[1];
		Chatfill3.GetComponent(Text).text = lines0[2];
		Chatfill4.GetComponent(Text).text = lines0[3];
		Passfill.GetComponent(Text).text = tarpword.text;
		Pupfill.sprite = tarUpic;
		Pdownfill.sprite = tarDpic;
		}
		else{
		Chatfill1.GetComponent(Text).text = lines1[0];
		Chatfill2.GetComponent(Text).text = lines1[1];
		Chatfill3.GetComponent(Text).text = lines1[2];
		Chatfill4.GetComponent(Text).text = lines1[3];
		Passfill.GetComponent(Text).text = npcpword1.text;
		Pupfill.sprite = npcUpic1;
		Pdownfill.sprite = npcDpic1;
		}
	}
	if(camero.GetComponent(levelview).looksAt == 2){
		if(swap == 2){
		Chatfill1.GetComponent(Text).text = lines0[0];
		Chatfill2.GetComponent(Text).text = lines0[1];
		Chatfill3.GetComponent(Text).text = lines0[2];
		Chatfill4.GetComponent(Text).text = lines0[3];
		Passfill.GetComponent(Text).text = tarpword.text;
		Pupfill.sprite = tarUpic;
		Pdownfill.sprite = tarDpic;
		}
		else{
		Chatfill1.GetComponent(Text).text = lines2[0];
		Chatfill2.GetComponent(Text).text = lines2[1];
		Chatfill3.GetComponent(Text).text = lines2[2];
		Chatfill4.GetComponent(Text).text = lines2[3];
		Passfill.GetComponent(Text).text = npcpword2.text;
		Pupfill.sprite = npcUpic2;
		Pdownfill.sprite = npcDpic2;
		}
	}
	if(camero.GetComponent(levelview).looksAt == 3){
		if(swap == 3){
		Chatfill1.GetComponent(Text).text = lines0[0];
		Chatfill2.GetComponent(Text).text = lines0[1];
		Chatfill3.GetComponent(Text).text = lines0[2];
		Chatfill4.GetComponent(Text).text = lines0[3];
		Passfill.GetComponent(Text).text = tarpword.text;
		Pupfill.sprite = tarUpic;
		Pdownfill.sprite = tarDpic;
		}
		else{
		Chatfill1.GetComponent(Text).text = lines3[0];
		Chatfill2.GetComponent(Text).text = lines3[1];
		Chatfill3.GetComponent(Text).text = lines3[2];
		Chatfill4.GetComponent(Text).text = lines3[3];
		Passfill.GetComponent(Text).text = npcpword3.text;
		Pupfill.sprite = npcUpic3;
		Pdownfill.sprite = npcDpic3;
		}
	}
	if(camero.GetComponent(levelview).looksAt == 4){
	if(swap == 4){
		Chatfill1.GetComponent(Text).text = lines0[0];
		Chatfill2.GetComponent(Text).text = lines0[1];
		Chatfill3.GetComponent(Text).text = lines0[2];
		Chatfill4.GetComponent(Text).text = lines0[3];
		Passfill.GetComponent(Text).text = tarpword.text;
		Pupfill.sprite = tarUpic;
		Pdownfill.sprite = tarDpic;
		}
		else{
		Chatfill1.GetComponent(Text).text = lines4[0];
		Chatfill2.GetComponent(Text).text = lines4[1];
		Chatfill3.GetComponent(Text).text = lines4[2];
		Chatfill4.GetComponent(Text).text = lines4[3];
		Passfill.GetComponent(Text).text = npcpword4.text;
		Pupfill.sprite = npcUpic4;
		Pdownfill.sprite = npcDpic4;
		}
	}
	if(camero.GetComponent(levelview).looksAt == 5){
	if(swap == 5){
		Chatfill1.GetComponent(Text).text = lines0[0];
		Chatfill2.GetComponent(Text).text = lines0[1];
		Chatfill3.GetComponent(Text).text = lines0[2];
		Chatfill4.GetComponent(Text).text = lines0[3];
		Passfill.GetComponent(Text).text = tarpword.text;
		Pupfill.sprite = tarUpic;
		Pdownfill.sprite = tarDpic;
		}
		else{
		Chatfill1.GetComponent(Text).text = lines5[0];
		Chatfill2.GetComponent(Text).text = lines5[1];
		Chatfill3.GetComponent(Text).text = lines5[2];
		Chatfill4.GetComponent(Text).text = lines5[3];
		Passfill.GetComponent(Text).text = npcpword5.text;
		Pupfill.sprite = npcUpic5;
		Pdownfill.sprite = npcDpic5;
		}
	}
	if(camero.GetComponent(levelview).looksAt == 6){
	if(swap == 6){
		Chatfill1.GetComponent(Text).text = lines0[0];
		Chatfill2.GetComponent(Text).text = lines0[1];
		Chatfill3.GetComponent(Text).text = lines0[2];
		Chatfill4.GetComponent(Text).text = lines0[3];
		Passfill.GetComponent(Text).text = tarpword.text;
		Pupfill.sprite = tarUpic;
		Pdownfill.sprite = tarDpic;
		}
		else{
		Chatfill1.GetComponent(Text).text = lines6[0];
		Chatfill2.GetComponent(Text).text = lines6[1];
		Chatfill3.GetComponent(Text).text = lines6[2];
		Chatfill4.GetComponent(Text).text = lines6[3];
		Passfill.GetComponent(Text).text = npcpword6.text;
		Pupfill.sprite = npcUpic6;
		Pdownfill.sprite = npcDpic6;
		}
	}
}