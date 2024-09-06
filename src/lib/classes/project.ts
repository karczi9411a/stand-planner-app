import * as BABYLON from 'babylonjs';

export default class Project {
	engine: BABYLON.Engine;
	scene: BABYLON.Scene;
	canvas: HTMLCanvasElement;

	constructor(canvas: HTMLCanvasElement) {
		this.engine = new BABYLON.Engine(canvas);
		this.scene = new BABYLON.Scene(this.engine);
		// this.scene.debugLayer.show();
		this.canvas = canvas;
	}

	setup() {
		// this.scene.createDefaultCameraOrLight(true, true, true);
		const camera = new BABYLON.ArcRotateCamera(
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

		const light = new BABYLON.HemisphericLight('light1', new BABYLON.Vector3(0, 1, 0), this.scene);
		light.intensity = 0.7;

		const ground = BABYLON.MeshBuilder.CreateGround('ground', { width: 5, height: 5 });
		ground.position.y -= 1;
		BABYLON.MeshBuilder.CreateSphere('Sphere', { diameter: 1 });

		window.addEventListener('resize', () => {
			if (this.canvas.parentElement) {
				// this.canvas.width = width;
				// this.canvas.height = height;
			}

			this.engine.resize();
		});
	}

	run() {
		this.engine.runRenderLoop(() => this.scene.render());
	}
}
