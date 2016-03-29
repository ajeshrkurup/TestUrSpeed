window.onload = function() {
    var colors = ['red','blue','green', 'yellow', 'violet', 'brown'];
    setTimeout(function () {
        document.getElementById("shape").style.height = 100 +"px";
        document.getElementById("shape").style.width = 200 + "px";
        document.getElementById("shape").style.backgroundColor = "blue";
        document.getElementById("shape").style.display = "block";
    }, 2000);
    
    document.getElementById("shape").onclick = function() {
        document.getElementById("shape").style.display = "none";
    
        var randomNum = Math.random();
        var colorNum = Math.floor(7*randomNum);
        var timeInterval = (Math.floor(3*randomNum))*1000
        var shapeWidth = (Math.floor(3*(randomNum+1)))*100;
        var shapeHeight = (Math.floor(5*(randomNum+1)))*50;
        var shapeTop = (Math.floor(3*randomNum))*100;
        var shapeLeft = (Math.floor(3*randomNum))*80;
        
        setTimeout(function() {
            document.getElementById("shape").style.backgroundColor = colors[colorNum];
            document.getElementById("shape").style.width = shapeWidth + "px";
            document.getElementById("shape").style.height = shapeHeight + "px";
            document.getElementById("shape").style.left = shapeLeft + "px";
            document.getElementById("shape").style.top = shapeTop + "px" ;
            document.getElementById("shape").style.display = "block";
        }, timeInterval);
    }
    
    
    
    
}