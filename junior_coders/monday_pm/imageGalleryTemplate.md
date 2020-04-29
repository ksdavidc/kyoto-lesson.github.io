---
layout: default
title: Template for Images (latest)

# Can set the label, url (required), and caption
gilabel-01: Alien Monkey
giurl-01: ./scratchProjects/Images/Alien%20Monkey.jpg
gicaption-01: Code for this character

gilabel-02: Alien Cat
giurl-02: ./scratchProjects/Images/Alien%20Cat.jpg
gicaption-02: Code for this character

gilabel-03: Alien Bat
giurl-03: ./scratchProjects/Images/Alien%20Bat.jpg
gicaption-03: Code for this character

gilabel-04: Alien Ball
giurl-04: ./scratchProjects/Images/Alien%20Ball.jpg
gicaption-04: Code for this character

gilabel-05: Fidget Spinner
giurl-05: ./scratchProjects/Images/Fidget%20Spinner.jpg
gicaption-05: Code for this character

gilabel-06: Alien Mushroom
giurl-06: ./scratchProjects/Images/Alien%20Mushroom.jpg
gicaption-06: Code for this character

gilabel-07: Alien Sun
giurl-07: ./scratchProjects/Images/Alien%20Sun.jpg
gicaption-07: Code for this character

gilabel-08: Alien Ship
giurl-08: ./scratchProjects/Images/Alien%20Ship.jpg
gicaption-08: Code for this character

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

Hint: Click or click+hover+swipe+hover will make image persistent, depending on device.

{:newthumbnail:  .thumbnail href="#thumb"}

[{{ page.gilabel-01 }}]: {{ page.giurl-01 }}
[{{ page.gilabel-01 }}]: {{ page.giurl-02 }}
[{{ page.gilabel-03 }}]: {{ page.giurl-03 }}
[{{ page.gilabel-04 }}]: {{ page.giurl-04 }}
[{{ page.gilabel-05 }}]: {{ page.giurl-05 }}
[{{ page.gilabel-06 }}]: {{ page.giurl-06 }}
[{{ page.gilabel-07 }}]: {{ page.giurl-07 }}
[{{ page.gilabel-08 }}]: {{ page.giurl-08 }}


<div class="gallerycontainer">
<div class="container">
[![{{ page.gilabel-01 }}][]<span> {{ page.gilabel-01 }} <br />![{{ page.gilabel-01 }}][]<br /> {{ page.gicaption-01 }} </span>](#thumb){: newthumbnail }
[![{{ page.gilabel-02 }}][]<span> {{ page.gilabel-02 }} <br />![{{ page.gilabel-02 }}][]<br /> {{ page.gicaption-02 }} </span>](#thumb){: newthumbnail }
[![{{ page.gilabel-03 }}][]<span> {{ page.gilabel-03 }} <br />![{{ page.gilabel-03 }}][]<br /> {{ page.gicaption-03 }} </span>](#thumb){: newthumbnail }
[![{{ page.gilabel-04 }}][]<span> {{ page.gilabel-04 }} <br />![{{ page.gilabel-04 }}][]<br /> {{ page.gicaption-04 }} </span>](#thumb){: newthumbnail }
[![{{ page.gilabel-05 }}][]<span> {{ page.gilabel-05 }} <br />![{{ page.gilabel-05 }}][]<br /> {{ page.gicaption-05 }} </span>](#thumb){: newthumbnail }
[![{{ page.gilabel-06 }}][]<span> {{ page.gilabel-06 }} <br />![{{ page.gilabel-06 }}][]<br /> {{ page.gicaption-06 }} </span>](#thumb){: newthumbnail }
[![{{ page.gilabel-07 }}][]<span> {{ page.gilabel-07 }} <br />![{{ page.gilabel-07 }}][]<br /> {{ page.gicaption-07 }} </span>](#thumb){: newthumbnail }
[![{{ page.gilabel-08 }}][]<span> {{ page.gilabel-08 }} <br />![{{ page.gilabel-08 }}][]<br /> {{ page.gicaption-08 }} </span>](#thumb){: newthumbnail }
</div>

