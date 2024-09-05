import {
	ArcRotateCamera,
	Engine,
	HemisphericLight,
	MeshBuilder,
	Scene,
	Vector3
} from '@babylonjs/core';

export default class Project {
	engine: Engine;
	scene: Scene;
	canvas: HTMLCanvasElement;

	constructor(canvas: HTMLCanvasElement) {
		this.engine = new Engine(canvas);
		this.scene = new Scene(this.engine);
		this.scene.debugLayer.show();
		this.canvas = canvas;
	}

	setup() {
		// this.scene.createDefaultCameraOrLight(true, true, true);
		let camera = new ArcRotateCamera('camera1', 0, 0, 15, new Vector3(0, 5, -10), this.scene);
		camera.setTarget(Vector3.Zero());
		camera.lowerRadiusLimit = 5;
		camera.attachControl(this.canvas, true);

		let light = new HemisphericLight('light1', new Vector3(0, 1, 0), this.scene);
		light.intensity = 0.7;

		let ground = MeshBuilder.CreateGround('ground', { width: 5, height: 5 });
		ground.position.y -= 1;
		MeshBuilder.CreateSphere('Sphere', { diameter: 1 });
	}

	run() {
		this.engine.runRenderLoop(() => this.scene.render());
	}
}

// const engine = new Engine(canvas);
// 	const scene = new Scene(engine);

// 	const camera = new ArcRotateCamera('camera1', 0, 0, 10, new Vector3(0, 5, -10), scene);

// 	camera.setTarget(Vector3.Zero());

// 	camera.attachControl(canvas, true);

// 	const light = new HemisphericLight('light1', new Vector3(0, 1, 0), scene);

// 	light.intensity = 0.7;

// 	const sphere = Mesh.CreateSphere('sphere1', 16, 2, scene);

// 	sphere.position.y = 2;

// 	Mesh.CreateGround('ground1', 6, 6, 2, scene);

// 	engine.runRenderLoop(() => {
// 		scene.render();
// 	});

// 	window.addEventListener('resize', function () {
// 		engine.resize();
// 	});

// 	return scene;
