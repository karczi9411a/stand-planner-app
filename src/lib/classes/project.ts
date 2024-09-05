import * as BABYLON from 'babylonjs';

export default class Project {
	engine: BABYLON.Engine;
	scene: BABYLON.Scene;
	canvas: HTMLCanvasElement;

	constructor(canvas: HTMLCanvasElement) {
		this.engine = new BABYLON.Engine(canvas);
		this.scene = new BABYLON.Scene(this.engine);
		this.scene.debugLayer.show();
		this.canvas = canvas;
	}

	setup() {
		// this.scene.createDefaultCameraOrLight(true, true, true);
		let camera = new BABYLON.ArcRotateCamera(
			'camera1',
			0,
			0,
			15,
			new BABYLON.Vector3(0, 5, -10),
			this.scene
		);
		camera.setTarget(BABYLON.Vector3.Zero());
		camera.lowerRadiusLimit = 5;
		camera.attachControl(this.canvas, true);

		let light = new BABYLON.HemisphericLight('light1', new BABYLON.Vector3(0, 1, 0), this.scene);
		light.intensity = 0.7;

		let ground = BABYLON.MeshBuilder.CreateGround('ground', { width: 5, height: 5 });
		ground.position.y -= 1;
		BABYLON.MeshBuilder.CreateSphere('Sphere', { diameter: 1 });

		// window.addEventListener('resize', () => {
		// 	this.engine.resize();
		// });

		// this.canvas.addEventListener('resize', () => {
		// 	this.engine.resize();
		// });
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
