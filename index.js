document.addEventListener('DOMContentLoaded',domloaded,false);
function domloaded(){
    var canvas = document.getElementById('Canvas');
	var ctx = canvas.getContext('2d');
    var x = 300;
    var y = window.innerHeight/2;
    var dx=2;
    var dy=2;
    var playerwidth = 50;
    var playerheight = 50;
    var paddlewidth = 50;
    var paddleheight = 200;
    var paddle1y = 100;
    var paddle2y = 100;
    var P1KeyDown;
    var P2KeyDown;
    var PaddleYChange = 125;
    var P1Score = 0;
    var P2Score = 0;
    
    function Tick () {
    	//ctx.fillStyle = "#FFFFFF";
    	ctx.canvas.width  = window.innerWidth;
		ctx.canvas.height = window.innerHeight;
    	ctx.clearRect(0, 0, canvas.width, canvas.height);
    	ctx.fillRect(x, y, playerwidth, playerheight); //Fills Ball
    	ctx.fillRect(50, paddle1y, paddlewidth, paddleheight); //Fills P1 Paddle
    	ctx.fillRect(window.innerWidth-100, paddle2y, paddlewidth, paddleheight); //Fills P2 Paddle
    	ctx.font = "30px Arial";
		ctx.fillText(P1Score+" "+P2Score,window.innerWidth/2.2,50); //CHANGE HERE
    	x=x+dx;
    	y=y+dy;
    	if (y>canvas.height-playerheight || y<0) {
    		dy=-dy;
    	}
    	//if (x>canvas.width-playerwidth || x<0) { //COMMENT THIS OUT!
    		//dx=-dx;
    	//}
    	if (x==100 && y+playerheight>paddle1y+playerheight && y<paddle1y+paddleheight+playerheight) {
    		dx = -dx;
    		
    	}
    	if (x>canvas.width-playerwidth) {
    		P1Score = P1Score+1;
    		x=300;
    		y=100;
    		
    	}
    	if (x<0) {
    		P2Score = P2Score+1;
    		x=300;
    		y=100;
    	}
    	
    	if (x==canvas.width-150 && y+playerheight>paddle2y && y<paddle2y+paddleheight) {
    		dx = -dx;
    		
    	}
    	
    	
    	//if (x==100 && )
    	if (P1KeyDown==87) {
    		paddle1y=paddle1y-PaddleYChange;
    		P1KeyDown = 0;
    	}
    	
    	if (P1KeyDown==83) {
    		paddle1y=paddle1y+PaddleYChange;
    		P1KeyDown = 0;
    	}
    	
    	
    	if (P2KeyDown==38) {
    		paddle2y=paddle2y-PaddleYChange;
    		P2KeyDown = 0;
    	}
    	
    	if (P2KeyDown==40) {
    		paddle2y=paddle2y+PaddleYChange;
    		P2KeyDown = 0;
    	}
    	
    	
    	
    }
    
    setInterval(Tick,2);
    
    function getKey(e)
{
    var CurrentKey = e.keyCode;
    //alert(CurrentKey);
    if (CurrentKey==38 || CurrentKey==40) {
    	P2KeyDown = CurrentKey;
    	//alert("Key is P2 Up or Down");
    }
    if (CurrentKey==87 || CurrentKey==83) {
    	P1KeyDown = CurrentKey;
    	//alert("Key is P1 Up or Down");
    }
}

document.onkeydown = getKey;
    
    
}
