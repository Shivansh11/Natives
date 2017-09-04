import UnityEngine.UI;
var canvas : Canvas;
var crt : RectTransform;
var mrt : RectTransform;
var image : Image;
var info : GameObject;
var back : GameObject;
function Start (){
	image.rectTransform.anchoredPosition = new Vector2(0,0);
	crt = canvas.GetComponent(RectTransform); 
	mrt = image.GetComponent(RectTransform);
}
function Update () {
if(Input.touchCount == 1 && !info.activeSelf && back.activeSelf){
	if(Input.GetTouch(0).phase==TouchPhase.Moved){
		image.rectTransform.anchoredPosition.x += Input.GetTouch(0).deltaPosition.x*Time.deltaTime*100;
		image.rectTransform.anchoredPosition.y += Input.GetTouch(0).deltaPosition.y*Time.deltaTime*100;
		if(image.rectTransform.anchoredPosition.x < -((mrt.rect.width-crt.rect.width)/2))
			image.rectTransform.anchoredPosition.x = -((mrt.rect.width-crt.rect.width)/2);
		if(image.rectTransform.anchoredPosition.x > ((mrt.rect.width-crt.rect.width)/2))
			image.rectTransform.anchoredPosition.x = ((mrt.rect.width-crt.rect.width)/2);	
		if(image.rectTransform.anchoredPosition.y < -((mrt.rect.height-crt.rect.height)/2))
			image.rectTransform.anchoredPosition.y = -((mrt.rect.height-crt.rect.height)/2);
		if(image.rectTransform.anchoredPosition.y > ((mrt.rect.height-crt.rect.height)/2))
			image.rectTransform.anchoredPosition.y = ((mrt.rect.height-crt.rect.height)/2);			
		}
	}
}