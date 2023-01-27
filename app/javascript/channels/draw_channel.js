import consumer from "./consumer"

consumer.subscriptions.create("DrawChannel", {
  connected() {
    // Called when the subscription is ready for use on the server
    this.listenToCanvas();
  },

  listenToCanvas(){
    this.canvas = document.getElementById("canvas");
    this.canvas = this.canvas.getContext("2d");
    this.remoteContext = this.canvas.getContext("2d");

    // event listner for moivng mouse up
    this.canvas.addEventListener("mousedown", this.startDrawing.bind(this));
    this.canvas.addEventListener("mouseup", this.stoptDrawing.bind(this));
    this.canvas.addEventListener("mousemove", this.drawing.bind(this));
  },
  startDrawing(event){
    this.drawing = true;
    this.lastX = event.offsetX;
    this.lastY = event.offsetY;
    this.lastSent = Date.now();
    this.preform( "draw",
      { 
        x: event.offsetX, 
        y: event.offsetY, 
        state: "start"
      })
  },
  disconnected() {
    // Called when the subscription has been terminated by the server
  },

  received(data) {
    // Called when there's incoming data on the websocket for this channel
    if (data.state == "start"){
      this.remoteLastX = data.x;
      this.remoteLastY = data.y;
  }
}})
