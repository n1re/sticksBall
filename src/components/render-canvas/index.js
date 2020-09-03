import React from 'react';
import Canvas from 'utils/CanvasTools';

class Renderer extends React.Component {
    constructor(props) {
        super(props);
        
        this.canvasRef = React.createRef();
    }
    render() {
        return <canvas ref={this.canvasRef} />;
    }
    componentDidMount() {
        const canvas = this.canvasRef.current;
        Canvas.setSizeToViewport(canvas);
        const context2d = canvas.getContext('2d');
        const objectDestination = [1000, 1000];
        const rect = [0, 0, 100, 100];

        context2d.fillRect(...rect);

        const moveObject = () => {
            context2d.clearRect(0, 0, canvas.width, canvas.height);
            rect[0] += 1;
            rect[1] += 1;
            context2d.fillRect(...rect);
        };

        const loopMoveObject = () => {
            requestAnimationFrame(() => {
                moveObject();
                if (!(rect[0] === objectDestination[0] && rect[1] === objectDestination[1])) {
                    loopMoveObject();
                }
            }, 1);
        };

        loopMoveObject();
    }
}

export default Renderer;