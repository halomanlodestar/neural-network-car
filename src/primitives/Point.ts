/** @format */

export class Point {
	x;
	y;

	constructor(x: number, y: number) {
		this.x = x;
		this.y = y;
	}

	draw(ctx: CanvasRenderingContext2D, size = 16, color = "black") {
		// console.log(`drew ${this.x}, ${this.y}`);
		const radius = size / 2;
		ctx.beginPath();
		ctx.fillStyle = color;
		ctx.arc(this.x, this.y, radius, 0, Math.PI * 2);
		ctx.fill();
	}

	equals(point: Point) {
		return this.x === point.x && this.y === point.y;
	}
}
