/**
 * Based on THREE example: https://github.com/mrdoob/three.js/blob/master/examples/canvas_geometry_birds.html
 * Which is based on http://www.openprocessing.org/visuals/?visualID=6910
 * Copyright: 2011 (c) int3ractive.com
 * Author: Thanh Tran - trongthanh@gmail.com
 */

/**
 * Convenient class to instanciate a THREEJS scene with Boid
 **/
var BoidScene = function () {};

BoidScene.prototype = {
  init: function (boidContainer, numBirds, isFish) {
    var containerRect = boidContainer.getBoundingClientRect(),
      viewWidth = containerRect.width,
      viewHeight = containerRect.height,
      scene = new THREE.Scene(),
      camera = new THREE.PerspectiveCamera( 75, viewWidth / viewHeight, 1, 10000 ),
      renderer = new THREE.CanvasRenderer(),
      birds = [],
      boids = [],
      boid, bird,
      that = this;

    if(isFish === undefined) isFish = false;
    numBirds = numBirds || 50;

    camera.position.z = 450;

    for ( var i = 0; i < numBirds; i ++ ) {
      if (isFish) {
        //reduce maxspeed & steer force
        boid = boids[ i ] = new Boid(2, 0.02);
        //the actual 3D object
        bird = birds[ i ] = new FishMesh();
      } else {
        boid = boids[ i ] = new Boid(4, 0.1);
        bird = birds[ i ] = new BirdMesh();
      }
      
      boid.position.x = Math.random() * 500 - 250;
      boid.position.y = Math.random() * 500 - 250;
      boid.position.z = Math.random() * 500 - 250;
      boid.velocity.x = Math.random() * 2 - 1;
      boid.velocity.y = Math.random() * 2 - 1;
      boid.velocity.z = Math.random() * 2 - 1;
      boid.setAvoidWalls( true );
      boid.setWorldSize( 500, 500, 400 );

      bird.position = boids[ i ].position;
      bird.doubleSided = true;

      scene.add( bird );
    }

    // renderer.autoClear = false;

    renderer.setSize( viewWidth, viewHeight );

    document.addEventListener( 'mousemove', this.documentMouseMoveHandler.bind(this), false );
    window.addEventListener('resize', this.windowResizeHandler.bind(this),false);
    /* debug 
     var materials = [];
     for ( var j = 0; j < 6; j ++ ) {
     materials.push( new THREE.MeshBasicMaterial( { color: Math.random() * 0xffffff } ) );
     }

     this.cube = new THREE.Mesh( new THREE.CubeGeometry( 10, 10, 10, 1, 1, 1, materials ), new THREE.MeshFaceMaterial() );
     this.cube.overdraw = true;
     scene.add( this.cube ); 
    // */


    //add scene to DOM
    boidContainer.appendChild(renderer.domElement);

    this.animate = function () {
      
      requestAnimationFrame( that.animate );
      
      that.render();
      stats.update();

    };

    //members:
    this.container = boidContainer;
    this.viewWidth = viewWidth;
    this.viewHeight = viewHeight;
    this.halfViewWidth = viewWidth / 2;
    this.halfViewHeight = viewHeight / 2;
    this.camera = camera;
    this.scene = scene;
    this.renderer = renderer;
    this.offset = {x:containerRect.left, y:containerRect.top};
    this.birds = birds;
    this.boids = boids;

  },

  documentMouseMoveHandler: function ( e ) {
    var boid,
        offset = this.offset,
        boids = this.boids,
        vector = new THREE.Vector3( e.clientX - offset.x - this.halfViewWidth, - e.clientY - offset.y + this.halfViewHeight, 0 );
    //TODO: the scalar is a projection scaling number that is deduced from trial & errors, will find the correct formular to convert projection later
    vector.multiplyScalar(0.87);

    //debug
    //this.cube.position = vector.clone();
    
    //trace(3, 'offset: ' + offset.x + 'x' + offset.y + ' - vector: ' + vector.x + 'x' + vector.y);

    for ( var i = 0, il = boids.length; i < il; i++ ) {
      boid = boids[ i ];
      vector.z = boid.position.z;
      boid.repulse( vector );
    }

  },

  windowResizeHandler: function (e) {
    var containerRect = this.container.getBoundingClientRect();

    this.offset.x = containerRect.left;
    this.offset.y = containerRect.top;
  },

  render: function() {
    var boid, bird,
        boids = this.boids,
        birds = this.birds;

    for ( var i = birds.length - 1; i >= 0; i-- ) {
      boid = boids[ i ];
      boid.run( boids );
      bird = birds[ i ];
      bird.updateCourse(boid);
    }
    
    this.renderer.render( this.scene, this.camera );
  }
};

/**
 * Main Class
 **/
var Main = function (win) {
  if (win.mainApp) {
    alert('Main singleton exception');
  }
  
  var doc = win.document,
      that = this;

  var stats = new Stats();
  stats.domElement.style.position = 'absolute';
  stats.domElement.style.left = '0px';
  stats.domElement.style.top = '0px';
  win.stats = stats;

  doc.getElementById( 'main-container' ).appendChild(stats.domElement);

  var boidScene = new BoidScene();
  boidScene.init(doc.getElementById('fish-frame'), 50, true);
  boidScene.animate();

  //members
  this.win = win;
  this.doc = doc;
  this.boidScene = boidScene;
};

//this is where it all begin:
window.onload =  function() {
  //main application singleton
  window.mainApp = new Main(window);
};

