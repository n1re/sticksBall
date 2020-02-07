import React from 'react';

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
        this.context2d = canvas.getContext('2d');

        this.context2d.fillRect(10, 10, 100, 100);
    }
}

export default RenderCanvas;