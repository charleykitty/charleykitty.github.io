    function obst() {
      this.rand = Math.floor(Math.random() * 700)
      this.x = w;
      this.y = h - this.rand;
      this.gravity = 1;
      this.velocity = 0;
    
      
      this.show = function() {
        fill(color('white'));
        rect(this.x,this.y,220,20);
      
   }
   this.update = function() {
    this.velocity += this.gravity; //gravity applied when not jumping
    this.x -= this.velocity;
    if(this.x < 0){
      this.rand = Math.floor(Math.random() * 700)
      this.x = w;
      this.y = h - this.rand;
      this.velocity = 0;
      
    }
   }
        this.kill = function(){
         if(hit === true){
noLoop();   
        }
    
 } //object ends here
