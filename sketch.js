window.onload = function() {

    var angle
    var numberofLevels
    var startingDirection
    var AngleSlider = document.getElementById("angle")
    var LengthSlider = document.getElementById("level")
    var DirectionSlider = document.getElementById("startingDirection")

    AngleSlider.oninput = function() {
        angle = parseFloat(this.value);
        run()
    }

    LengthSlider.oninput = function() {
        numberofLevels = parseFloat(this.value)
        run()
    }

    DirectionSlider.oninput = function() {

        startingDirection = parseFloat(this.value)
        run()
    }

    function run() {
        var canvas = document.getElementById("myCanvas")
        var ctx = canvas.getContext("2d")
        ctx.clearRect(0, 0, canvas.width, canvas.height)

        ctx.setTransform(1, 0, 0, 1, 0, 0);
        var penSize = 15
        ctx.strokeStyle = "#684811"
        ctx.lineWidth = penSize
        ctx.beginPath()
        ctx.transform(1, 0, 0, -1, 0, canvas.height)
        ctx.moveTo(canvas.width / 2, 0)
        ctx.lineTo(canvas.width / 2, 200)
        ctx.stroke()
		var length = 200;
		

        var points = [{
            x: canvas.width / 2,
            y: 200,
            d: startingDirection
        }]
        var m = new model(points, angle, length / 2)

        pp = m.nPoint();
        for (var i = 0; i < numberofLevels; i++) {
            penSize = penSize / 1.8
            if (i == numberofLevels - 1) {
				penSize = 1
				length = length+4
				
				
              
                ctx.strokeStyle = "#00ff00"
            } else {
                ctx.strokeStyle = "#684811"
            }


            ctx.lineWidth = penSize
            length = length / 1.8;
            var m1 = new model(pp, angle, length)
            pp = m1.nPoint();

		}
		
		console.log(pp)

        var a = 1000 + parseFloat(this.value);

    }
}