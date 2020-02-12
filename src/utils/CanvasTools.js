class CanvasTools {
    static setSizeToViewport(canvas) {
        const width = window.innerWidth;
        const height = window.innerHeight;

        canvas.style.display = 'block';

        canvas.width = width;
        canvas.height = height;
    }
}

export default CanvasTools;