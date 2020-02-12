import React from 'react';
import Canvas from 'utils/CanvasTools';

class RenderCanvas extends React.Component {
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

        const intervalId = setInterval(() => {
            canvas.width = canvas.width;
            rect[0] += 1;
            rect[1] += 1;
            context2d.fillRect(...rect);
            if (rect[0] === objectDestination[0] && rect[1] === objectDestination[1]) {
                clearInterval(intervalId);
            }
        }, 1);
    }
}

export default RenderCanvas;