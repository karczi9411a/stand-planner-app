import { ArcRotateCamera, Engine, HemisphericLight, Mesh, Scene, Vector3 } from '@babylonjs/core';

export const createScene = (canvas: HTMLCanvasElement) => {
	const engine = new Engine(canvas);
	const scene = new Scene(engine);

	const camera = new ArcRotateCamera('camera1', 0, 0, 10, new Vector3(0, 5, -10), scene);

	camera.setTarget(Vector3.Zero());

	camera.attachControl(canvas, true);

	const light = new HemisphericLight('light1', new Vector3(0, 1, 0), scene);

	light.intensity = 0.7;

	const sphere = Mesh.CreateSphere('sphere1', 16, 2, scene);

	sphere.position.y = 2;

	Mesh.CreateGround('ground1', 6, 6, 2, scene);

	engine.runRenderLoop(() => {
		scene.render();
	});

	window.addEventListener('resize', function () {
		engine.resize();
	});

	engine.resize();

	return scene;
};
