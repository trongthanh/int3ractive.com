/**
 * Based on THREE example: https://github.com/mrdoob/three.js/blob/master/examples/canvas_geometry_birds.html
 * Which is based on http://www.openprocessing.org/visuals/?visualID=6910
 */
var Bird = function () {

	var scope = this;

	THREE.Geometry.call( this );

	v(   5,   0,   0 );
	v( - 5, - 2,   1 );
	v( - 5,   0,   0 );
	v( - 5, - 2, - 1 );

	v(   0,   2, - 6 );
	v(   0,   2,   6 );
	v(   2,   0,   0 );
	v( - 3,   0,   0 );

	f3( 0, 2, 1 );
	// f3( 0, 3, 2 );

	f3( 4, 7, 6 );
	f3( 5, 6, 7 );

	this.computeCentroids();
	this.computeFaceNormals();

	function v( x, y, z ) {

		scope.vertices.push( new THREE.Vertex( new THREE.Vector3( x, y, z ) ) );

	}

	function f3( a, b, c ) {

		scope.faces.push( new THREE.Face3( a, b, c ) );

	}

};

Bird.prototype = new THREE.Geometry();
Bird.prototype.constructor = Bird;

var BirdMesh = function () {
  THREE.Mesh.call(this,
    new Bird(),
    new THREE.MeshBasicMaterial( { color:Math.random() * 0xffffff } )
  );

  this.phase = Math.floor( Math.random() * 62.83 );
};

BirdMesh.prototype = new THREE.Mesh();
BirdMesh.prototype.constructor = BirdMesh;

BirdMesh.prototype.updateCourse = function(boid) {
  var phase = this.phase,
      rotation = this.rotation,
      geometry = this.geometry,
      boidVelocity = boid.velocity,
      color = this.material.color;

  color.r = color.g = color.b = ( 500 - this.position.z ) / 1000;

  rotation.y = Math.atan2( - boidVelocity.z, boidVelocity.x );
  rotation.z = Math.asin( boidVelocity.y / boidVelocity.length() );

  phase = ( phase + ( Math.max( 0, rotation.z ) + 0.1 )  ) % 62.83;
  geometry.vertices[ 5 ].position.y = geometry.vertices[ 4 ].position.y = Math.sin( phase ) * 5;

  this.phase = phase;
};