import React from 'react';
import './Rain.css';

class Rain extends React.Component {
    
    constructor(props) {
        super(props);
        this.draw = this.draw.bind(this);
    }

    componentWillUnmount() {
        console.log();
    }
    
    makeItRain() {
        var canvas = document.getElementById('bg-canvas');
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        
        if(canvas.getContext) {
            var ctx = canvas.getContext('2d');
            var w = canvas.width;
            var h = canvas.height;
            ctx.strokeStyle = this.props.rainColor ? this.props.rainColor : 'rgba(174,194,224,0.5)';
            ctx.lineWidth = this.props.lineWidth || 0.3;
            ctx.lineCap = 'round';
            
            var init = [];
            var maxParts = this.props.rainAmount || 500;
            for(var a = 0; a < maxParts; a++) {
                init.push({
                    x: Math.random() * w,
                    y: Math.random() * h,
                    l: Math.random() * 1,
                    xs: -4 + Math.random() * 4 + 2,
                    ys: Math.random() * 10 + 10
                })
            }
            
            var particles = [];
            for(var b = 0; b < maxParts; b++) {
                particles[b] = init[b];
            }
            
            this.setState({
                context: ctx,
                canvas: canvas,
                particles: particles
            })
            setInterval(this.draw, 20);
        }
    };
      
    draw() {
        this.setState({
            canvas: {
                width: window.innerWidth,
                height: window.innerHeight
            }
        })
        
        var w = this.state.canvas.width;
        var h = this.state.canvas.height;
        
        this.state.context.clearRect(0, 0, w, h);
        for(var c = 0; c < this.state.particles.length; c++) {
            var p = this.state.particles[c];
            this.state.context.beginPath();
            this.state.context.moveTo(p.x, p.y);
            this.state.context.lineTo(p.x + p.l * p.xs, p.y + p.l * p.ys);
            this.state.context.stroke();
        }
        this.move();
    };
    
    move() {
        if(!this.state.particles) {
            return;
        }

        var w = this.state.canvas.width;
        var h = this.state.canvas.height;
        
        for(var b = 0; b < this.state.particles.length; b++) {
            var p = this.state.particles[b];
            // p.x += p.xs;
            p.y += p.ys;
            if(p.x > w || p.y > h) {
                // p.x = Math.random() * w;
                p.y = -30;
            }
        }
    };
    
    componentDidMount() {
        this.makeItRain();
    };
    
    render() {
        return (
            <div class="rain" style={{background:this.props.background}}>
                <canvas id="bg-canvas"></canvas>
            </div>
            )
    };
        
};
    
export default Rain;
    