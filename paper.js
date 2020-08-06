// class paper {
//     constructor(x, y, width, height) {
//       var options = {
//         isStatic : false,
//           'restitution':0.3,
//           'friction':0.5,
//           'density':1.2
//       }
//       this.body = Bodies.rectangle(x, y, width, height, options);
//       this.width = width;
//       this.height = height;
//       this.Img = loadImage("Images/paper.png");


//       World.add(world, this.body);
//     }
//     display(){
//       var pos =this.body.position;
//       var angle = this.body.angle;
//       push();
//       translate(pos.x, pos.y);
//       rotate(angle);
//       ellipseMode(RADIUS);
//       strokeWeight(4);
//       stroke("green");
//       image(this.Img, 0, 0, this.width, this.height);
//       fill(255);
//       ellipse(0, 0, 20, 20);
//       pop();
//     }
//   };
  

class paper {
  //***constructor accepting radius as argument */
    constructor(x, y, radius) {
      var options = {
        isStatic : false,
          'restitution':0.03,
          //***increase friction so that the paper don't slip out of dustbin */
          'friction':5,
          'density':1.2
      }
      //****use circle to draw circular body */
      this.body = Bodies.circle(x, y, (radius-20)/2, options);
      this.radius = radius;
      //this.height = height;
      //****The images are not given inside a folder called 'Images' */
      this.Img = loadImage("paper.png");


      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      //**** image mode for images */
      imageMode(CENTER);
      strokeWeight(4);
      stroke("green");
      image(this.Img, 0, 0, this.radius, this.radius);
      //****** Need not give 'ellipse' since the image is used to display the paper */
      //fill(255);
      //ellipse(0, 0, 20, 20);
      pop();
    }
  };