class SlidingPuzzle {
	constructor(columns = 4, rows = 4) {
		this.columns = columns;
		this.rows = rows;
		this.tiles = Array.from(new Array(this.rows * this.columns), (_, i) => i);
		this.element = document.createElement("div");
		this.element.className = "sliding-puzzle";
		this.element.style.setProperty("--columns", this.columns);
		this.element.style.setProperty("--rows", this.rows);
		this.createTiles();
		this.swapTiles(Infinity);
	}

	createTiles() {
		for (const tile of this.tiles) {
			const tileElement = document.createElement("div");
			const { x, y } = this.position(tile);
			tileElement.style.setProperty("--x", x);
			tileElement.style.setProperty("--y", y);
			tileElement.className = "tile";
			tileElement.textContent = tile + 1;
			this.updateTile(tileElement, tile);
			this.element.appendChild(tileElement);
		}
	}
	
	updateTiles() {
		this.tiles.forEach((tile, index) => {
			const tileElement = this.element.children[tile];
			if(!tileElement) {console.log(tile, index, this.tiles);}
			this.updateTile(tileElement, index);
		});
	}
	
	updateTile(tileElement, tile) {
		const { x, y } = this.position(tile);
		tileElement.style.setProperty("--i", x);
		tileElement.style.setProperty("--j", y);
	}
	
	swap(direction) {
		const a = this.tiles.indexOf(this.tiles.length - 1);
		const { x, y } = this.position(a);
		const newX = Math.round(Math.max(0, Math.min(x + Math.sin(Math.PI * direction / 2), this.columns - 1)));
		const newY = Math.round(Math.max(0, Math.min(y + Math.cos(Math.PI * direction / 2), this.rows    - 1)));
		const b = this.index(newX, newY);
		
		[this.tiles[a], this.tiles[b]] = [this.tiles[b], this.tiles[a]];
	}
	
	index(x, y) {
		return x + this.columns * y;
	}
	
	position(tile) {
		return {
			x: tile % this.columns,
			y: Math.floor(tile / this.columns)
		}
	}
	
	async swapTiles(count) {
		if(count <= 0) return;
		// for(let i = 0; i < count; i++) {
			const direction = Math.floor(4 * Math.random());
			this.swap(direction);
			this.updateTiles();
			await new Promise(r => setTimeout(r, 100));
		this.swapTiles(count - 1);
		// }
	}
}

document.body.appendChild(new SlidingPuzzle(5, 5).element);