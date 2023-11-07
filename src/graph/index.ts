/** @format */

import { Point } from "../primitives/Point";
import { Segment } from "../primitives/Segment";

export class Graph {
	points;
	segments;

	constructor(points: Point[] = [], segments: Segment[] = []) {
		this.points = points;
		this.segments = segments;
	}

	draw(ctx: CanvasRenderingContext2D) {
		for (let segment of this.segments) {
			segment.draw(ctx);
			console.log("drew segment");
		}

		for (let point of this.points) {
			point.draw(ctx);
			// console.log("drew point " + point);
		}
	}

	containsPoint(point: Point): boolean {
		return !!this.points.find((p) => p.equals(point));
	}

	addPoint(point: Point) {
		this.points.push(point);
	}

	addSegment(segment: Segment) {
		this.segments.push(segment);
	}
}
