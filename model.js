var nextcoords
function model(pointsInfo, angle, len) {
    nextcoords = []
	for (var i = 0; i < pointsInfo.length; i++) { 
        
        m2 = new model2(pointsInfo[i],angle,len)
        m2.turnClockWise()
        m2.nextPoint()
        m2.drawBranch()
        m2.storeNextBranchInfo()
     
        m2 = new model2(pointsInfo[i],angle,len)
        m2.turnAntiClockWise()
        m2.nextPoint()
        m2.drawBranch()
        m2.storeNextBranchInfo()
    }

    this.nextpoints = m2.getco()
    
}
model.prototype.nPoint = function(){
    return this.nextpoints;
}
function model2(pointInfo,angle,len){
    this.X = pointInfo.x
    this.Y = pointInfo.y
    this.len = len
    this.angle = angle
    this.direction = pointInfo.d

}

model2.prototype.nextPoint = function(){
	this.nextX = Math.cos((Math.PI/180)*this.angle) * this.len + this.X
    this.nextY = Math.sin((Math.PI/180)*this.angle) * this.len + this.Y
}

model2.prototype.drawBranch = function(){
	var canvas = document.getElementById("myCanvas")
    var ctx = canvas.getContext("2d")
	ctx.beginPath()
	ctx.moveTo(this.X, this.Y)
	ctx.lineTo(this.nextX, this.nextY)
    ctx.stroke()
}

model2.prototype.turnClockWise = function() {
    this.angle = this.direction - this.angle
    
 
}
model2.prototype.turnAntiClockWise = function() {
    this.angle = this.direction + this.angle
    
}

model2.prototype.storeNextBranchInfo = function() {
    nextcoords.push({ x: this.nextX, y: this.nextY, d: this.angle})
	
}
model2.prototype.getco = function(){
	return nextcoords
}


