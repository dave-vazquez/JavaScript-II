/*********************************************************************************
*                             CONSOLE CANNON FACTORY                             *
**********************************************************************************/ 

const consoleCannonFactory = (interval = 50, animationRate = 1) => {

    let cannonBall = {
        y:  0,      // cannonBall height (y-coodinate)
        yv: 0,      // cannonBall velocity (y-axis)
        b:  0,      // number of bounces
        e:  0.6,    // coefficient of restitution (bounce half-life)
        g: 0,       // gravity
        string: '', // string representation of cannonball

        updateDisplacement: function () {

            this.calculateDisplacement();
            
            this.string = this.spaces(this.y) + '.';
        },
        
        calculateDisplacement: function () {
            this.y -= this.yv * animationRate;
            this.yv += this.g;
    
            if(this.y < 0) {
                this.y = 0;
                this.yv *= -this.e;
                this.b++;
            }

            this.y = Math.round(this.y);
        },

        spaces : function () {
            if(this.y < 0) this.y = 0;

            return Array(this.y).fill(' ').join('');
        },

        log: function () {
            console.log(this.string);
        }
    }

    return {

        interval: null,

        launch: function (initialHeight = 100, velocity = 7, gravity = .5) {
            cannonBall.y = initialHeight;
            cannonBall.yv = velocity;
            cannonBall.g = gravity;

            this.launchInterval = setInterval(() => {
                
                cannonBall.updateDisplacement();
                cannonBall.log();

                // if(cannonBall.yv < 0 && cannonBall.yv > -21.1) {
                //         yv = 0;
                // }

                if(cannonBall.b === 10) {
                    clearInterval(this.launchInterval);
                }
        
            }, interval)
        },

        terminate: function () {
            clearInterval(this.launchInterval)
        }
    }
}

cannon = consoleCannonFactory(50, 1);

cannon.launch(100, 2, .5);





