window.onload=function(){
	var dom=document.getElementById('subject');
	var list=dom.getElementsByTagName('li');
	for(var i=0;i<list.length;i++){
		list[i].onmouseover=function(){
			for(var i=0;i<list.length;i++){
				list[i].className="";
			}
			this.className='big';
		}
	}
}