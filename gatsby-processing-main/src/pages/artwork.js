import React from "react";
import { useState, useContext } from "react";
// app
// p5
import { Menu } from "../components/menu";
import P5Wrapper from "../components/P5Wrapper";
import P5Manager from "../components/P5Manager";
import { P5DispatchContext, P5StateContext } from "../components/P5Manager";
import { MenuButton } from "../components/menuButton";

const Artwork_wrapper = P5Wrapper("my artwork");
const Button_refresh = P5Wrapper("refresh");

const ArtWork = () => (
  <>
    <P5Manager>
      <div style={{ position: "absolute" }}>
        <ComponentBuffer comp={Artwork_wrapper} />
      </div>
      <div style={{ position: "absolute" }}>
        <Menu></Menu>
        <MenuButton comp={Button_refresh} label="REFRESH" what="add_x" />
      </div>
    </P5Manager>
  </>
);

export default ArtWork;

let buf = {
  value: 0,
};

function ComponentBuffer(props) {
  const { x } = useContext(P5StateContext);
  const [state_data, set_data] = useState(buf);
  if (x !== state_data.value) {
    buf.value = x;
    set_data(buf);
  }

  return <props.comp sketch={goban} data={state_data}></props.comp>;
}

/**
 *
 * P5JS / PROCESSING SKETCH
 *
 */
function goban(p5) {
  // VARIABLE GLOBAL

  // PROCESSING FUNCTION
  p5.setup = function () {
    p5.createCanvas(p5.windowWidth, p5.windowHeight);
    p5.windowResized = () => {
      p5.resizeCanvas(p5.windowWidth, p5.windowHeight);
    }
    p5.background(16,23,23)
  }

  p5.draw = function () {
    if ((p5.mouseY > 0) &&
    (p5.mouseY > 0)) {

  p5.strokeWeight(0.8)
  p5.stroke(255,148,169);
  p5.line(0,p5.windowHeight-p5.mouseY,p5.mouseX,p5.mouseY);

  p5.strokeWeight(0.5)
  p5.stroke(177,148,255);
  p5.line(p5.windowWidth-p5.mouseX,0,p5.mouseX,p5.mouseY);

  p5.strokeWeight(0.8)
  p5.stroke(192,32,96);
  p5.line(p5.windowWidth,p5.windowHeight-p5.mouseY,p5.mouseX,p5.mouseY);

  p5.strokeWeight(0.5)
  p5.stroke(255);
  p5.line(p5.windowWidth-p5.mouseX,p5.windowHeight,p5.mouseX,p5.mouseY);

p5.fill(255)
p5.circle(p5.mouseX,p5.mouseY,1) }
}

// grille rose
//p5.draw = function () {
//p5.background(255,119,119);
//grille(15);
//}

//function grille (step) {
//let offset = step/2;
//let inc = 0;
//for (let i = 0 ; i < p5.width ; i = i + step) {
 //for (let m = 0; m < p5.height ; m = m + step) {
   //let x = i + offset;
   //let y = m + offset;
   //inc += 1;
   //pierre2 (x,y,15,inc);
 //}
//}
//}

//function pierre(x,y,taille, inc) {
//p5.fill(x,y,taille);
//p5.noStroke();
//p5.square(x,y,taille);
//}

//function pierre2 (x, y, size, rotation) {
//let offset = size/2;
//p5.fill(255,185,206);
//p5.stroke(255);
//p5.strokeWeight(2);
//p5.push();
//p5.translate(x,y)
//p5.push();
// console.log(rotation);
//p5.rotate(p5.frameCount*0.08);
//p5.translate(-offset, -offset);
//p5.square(0, 0, size);
//p5.pop();
//p5.pop();
//}
  
    // p5.background(param.bg, param.bg_alpha);
    // show_goban(goban);
    // show_stones(stones);
    // apparence(param);
    // let_s_dance(stones, param);
    //show_gui(info_is);
  }

