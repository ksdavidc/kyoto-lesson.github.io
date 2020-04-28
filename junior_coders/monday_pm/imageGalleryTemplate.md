---
layout: default
title: Template for Images (latest)

t1: Alien Monkey
t1l: ./scratchProjects/Images/Alien%20Monkey.PNG
c1: Code for this character
t2: Alien Cat
t2l: ./scratchProjects/Images/Alien%20Cat.PNG
c2: Code for this character
t3: Alien Bat
t3l: ./scratchProjects/Images/Alien%20Bat.PNG
c3: Code for this character
t4: Alien Ball
t4l: ./scratchProjects/Images/Alien%20Ball.PNG
c4: Code for this character
t5: Fidget Spinner
t5l: ./scratchProjects/Images/Fidget%20Spinner.PNG
c5: Code for this character
t6: Alien Mushroom
t6l: ./scratchProjects/Images/Alien%20Mushroom.PNG
c6: Code for this character
t7: Alien Sun
t7l: ./scratchProjects/Images/Alien%20Sun.PNG
c7: Code for this character
t8: Alien Ship
t8l: ./scratchProjects/Images/Alien%20Ship.PNG
c8: Code for this character
---


<style>
.container {
  width: 20%;
  position: relative;
}

.gallerycontainer {
  position: relative;
  width:100%;
  height: 600px;
  /*Add a height attribute and set to largest image's height to prevent overlaying*/
}

.thumbnail img {
  border: 1px solid white;
  margin: 0 0px 0px 0;
  width: 100%;
}

/* just for first image */
.thumbnail > img {
  width: 40%;
}

.thumbnail:hover {
  background-color: transparent;
}

.thumbnail:hover > img {
  border: 1px solid red;
}


.thumbnail:active  img {
background:ivory;
width: 100%;
}

.thumbnail span {
  /*CSS for enlarged image*/
  position: absolute;
  background-color: lightyellow;
  padding: 5px;
  left: -1000px;
  border: none;
  visibility: hidden;
  color: black;
  text-decoration: none;
}


.thumbnail span img {
  /*CSS for enlarged image*/
  border-width: 0;
  padding: 2px;
}

.thumbnail:hover span {
  /*CSS for enlarged image*/
  visibility: visible;
  top: 0;
  left: 102%;
  /*position where enlarged image should offset horizontally */
  z-index: 50;
  width: 400%;
}



</style>

HInt: Click or click+hover+swipe+hover will make image persistent, depending

{:newthumbnail:  .thumbnail href="#thumb"}

[{{ page.t1 }}]: {{ page.t1l }}
[{{ page.t2 }}]: {{ page.t2l }}
[{{ page.t3 }}]: {{ page.t3l }}
[{{ page.t4 }}]: {{ page.t4l }}
[{{ page.t5 }}]: {{ page.t5l }}
[{{ page.t6 }}]: {{ page.t6l }}
[{{ page.t7 }}]: {{ page.t7l }}
[{{ page.t8 }}]: {{ page.t8l }}


<div class="gallerycontainer">
<div class="container">
[![{{ page.t1 }}][]<span> {{ page.t1 }} <br />![{{ page.t1 }}][]<br /> {{ page.c1 }} </span>](#thumb){: newthumbnail }
[![{{ page.t2 }}][]<span> {{ page.t2 }} <br />![{{ page.t2 }}][]<br /> {{ page.c2 }} </span>](#thumb){: newthumbnail }
[![{{ page.t2 }}][]<span> {{ page.t2 }} <br />![{{ page.t2 }}][]<br /> {{ page.c2 }} </span>](#thumb){: newthumbnail }
[![{{ page.t4 }}][]<span> {{ page.t4 }} <br />![{{ page.t4 }}][]<br /> {{ page.c4 }} </span>](#thumb){: newthumbnail }
[![{{ page.t5 }}][]<span> {{ page.t5 }} <br />![{{ page.t5 }}][]<br /> {{ page.c5 }} </span>](#thumb){: newthumbnail }
[![{{ page.t6 }}][]<span> {{ page.t6 }} <br />![{{ page.t6 }}][]<br /> {{ page.c6 }} </span>](#thumb){: newthumbnail }
[![{{ page.t7 }}][]<span> {{ page.t7 }} <br />![{{ page.t7 }}][]<br /> {{ page.c7 }} </span>](#thumb){: newthumbnail }
[![{{ page.t8 }}][]<span> {{ page.t8 }} <br />![{{ page.t8 }}][]<br /> {{ page.c8 }} </span>](#thumb){: newthumbnail }
</div>

