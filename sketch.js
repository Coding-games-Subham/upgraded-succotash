var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 
var particles = [];
var plinkos = [];
var divisions = [];

var divisionHeight=300;
var score =0;
var particle;
var turn = 0;
var gamestate = "play"
function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);
  
  

   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }


    for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }

    

    
}
 


function draw() {
  background("black");
  textSize(20)
 //text("Score : "+score,20,30);
  Engine.update(engine);
  
 
  if(gamestate === "play"){
   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }
  
 
  for (var j = 0; j < particles.length; j++) {
   
     particles[j].display();
   }
   for (var k = 0; k < divisions.length; k++) {
     
     divisions[k].display();
   }
   textSize (28);
  text("score : " + score ,10,30);
  text("500",20,520);
  text("500",100,520);
  text("500",180,520);
  text("100",260,520);
  text("100",340,520);
  text("1000",410,520);
  text("1000",490,520);
  text("200",580,520);
  text("200",660,520);
  text("200",740,520);
  //text(" x : " + mouseX,300,300);
 // text(" y : " + mouseY,450,300);
  }
  if(particle!=null){
    particle.display();
//console.log(particle.body.position.y)
    if(particle.body.position.y > 760){
      if(particle.body.position.x < 300)
      {
       // console.log("hi");
        score = score+500;
        particle=null;
        }

        
     //if(turn>=5) gamestate = "end"
    }
  }
  if(particle!=null){
    particle.display();
//console.log(particle.body.position.y)
    if(particle.body.position.y > 760){
      
        

        if(particle.body.position.x>255 && particle.body.position.x<400){
          score=score+100;
          particle=null;
  
       }
     //if(turn>=5) gamestate = "end"
    }
  }

  if(particle!=null){
    particle.display();
//console.log(particle.body.position.y)
    if(particle.body.position.y > 760){
      if(particle.body.position.x>415&&particle.body.position.x<560){
        score = score+1000;
        particle=null;
      }
  
       }
     //if(turn>=5) gamestate = "end"
    }
    if(particle!=null){
      particle.display();
  //console.log(particle.body.position.y)
      if(particle.body.position.y > 760){
        if(particle.body.position.x>575&&particle.body.position.x<800)
        {
          score=score+200
          particle=null;
        }
       //if(turn>=5) gamestate = "end"
      }
    }

  if(turn>=6) gamestate = "end"
  if(gamestate === "end"){
textSize(80);
    text("gameOver",200,400);
    particle=null;
  }
  }
function mousePressed(){
 if(gamestate!=="end"){
    particle=new Particle(mouseX,10, 10);
    turn=turn+1;
  //  console.log("hi");
   // score++;
  }
}