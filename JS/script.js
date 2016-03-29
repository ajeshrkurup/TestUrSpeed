window.onload = function() {
    var start = new Date().getTime();
    var colors = ['red','blue','green', 'yellow', 'violet', 'brown'];
    setTimeout(function () {
        document.getElementById("shape").style.height = 100 +"px";
        document.getElementById("shape").style.width = 200 + "px";
        document.getElementById("shape").style.backgroundColor = "blue";
        document.getElementById("shape").style.display = "block";
    }, 2000);
    
    document.getElementById("shape").onclick = function() {
        document.getElementById("shape").style.display = "none";
        var end = new Date().getTime();
        var timeTaken = (end - start)/1000;
        document.getElementById("resultSpan").innerHTML = timeTaken + " s";
    
        var randomNum = Math.random();
        var shapeRadius = 0;
        var colorNum = Math.floor(7*randomNum);
        var timeInterval = (Math.floor(3*randomNum))*1000
        var shapeWidth = (Math.floor(5*(randomNum+1)))*40;
        var shapeHeight = (Math.floor(5*(randomNum+1)))*30;
        var shapeTop = (Math.floor(5*randomNum))*100;
        var shapeLeft = (Math.floor(15*randomNum))*80;
        
        if(randomNum > 0.5) {
            shapeHeight = shapeWidth;
            shapeRadius = shapeHeight / 2;
        }
        
        setTimeout(function() {
            document.getElementById("shape").style.backgroundColor = colors[colorNum];
            document.getElementById("shape").style.width = shapeWidth + "px";
            document.getElementById("shape").style.height = shapeHeight + "px";
            document.getElementById("shape").style.left = shapeLeft + "px";
            document.getElementById("shape").style.top = shapeTop + "px" ;
            document.getElementById("shape").style.borderRadius = shapeRadius + "px";
            document.getElementById("shape").style.display = "block";
            
            start = new Date().getTime();
        }, timeInterval);
    }
    
    
    
    
}