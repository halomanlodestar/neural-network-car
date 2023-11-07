/** @format */

import { Graph } from "./graph";
import { Point } from "./primitives/Point";
import { Segment } from "./primitives/Segment";

const canvas = document.querySelector("#MainCanvas") as HTMLCanvasElement;

const points = [
	new Point(200, 200),
	new Point(300, 200),
	new Point(100, 200),
	new Point(300, 230),
];

const segments = [
	new Segment(points[0], points[1]),
	new Segment(points[1], points[2]),
	new Segment(points[2], points[3]),
];

canvas.height = 500;
canvas.width = 500;

const ctx = canvas.getContext("2d")!;

const graph = new Graph(points, segments);
graph.draw(ctx);
