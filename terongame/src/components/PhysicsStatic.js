
// You can write more code here

/* START OF COMPILED CODE */

class PhysicsStatic extends UserComponent {

	constructor(gameObject) {
		super(gameObject);

		this.gameObject = gameObject;
		gameObject["__PhysicsStatic"] = this;

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @returns {PhysicsStatic} */
	static getComponent(gameObject) {
		return gameObject["__PhysicsStatic"];
	}

	/** @type {Phaser.GameObjects.Image} */
	gameObject;

	/* START-USER-CODE */

	start() {
		this.gameObject.scene.physics.add.existing(this.gameObject, true);
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
