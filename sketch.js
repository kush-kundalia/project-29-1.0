    // creating various global variables needed
    let ground;
    let world;
    let engine;


    function setup(){
        engine = Matter.Engine.create();
        world = engine.world
        createCanvas(800,600);

    // using it

        ground = new Box(width/2, height-10, width, 1);
        box = new Box(200,400,75,1);
        bird = new Bird(200,300,20);
    }


    function draw(){
        background(0);
        bird.display();
        box.spawn();
        ground.spawn();
    }