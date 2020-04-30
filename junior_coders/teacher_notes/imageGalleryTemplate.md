---
layout: default
title: Template for Images (latest)


# gi= gallery image. Place all the url (required) here, along with an (optional) label (goes above the image)
# aand/or caption (below the image) and then paste the raw markdown in teh appropriate place. 
# more than one gallery can exist on a page. 
gilabel-01: fakeimg.pl
giurl-01: http://fakeimg.pl/66x99/00c/c00?font=museo&text=my%20text
gicaption-01: Caption - http://fakeimg.pl/66x99/00c/c00?font=museo&text=my%20text

gilabel-02: placehold.it
giurl-02: https://placehold.it/600x200/00cc00/cc0000?text=my%20text
gicaption-02: Caption - https://placehold.it/600x200/00cc00/cc0000?text=my%20text

gilabel-03: loremflickr.com
giurl-03: http://loremflickr.com/blue/400/400/car
gicaption-03: Caption - http://loremflickr.com/blue/400/400/car

gilabel-04: lorempixel.com
giurl-04: http://lorempixel.com/400/200/sports/2/Dummy-Text
gicaption-04: Caption - http://lorempixel.com/400/200/sports/2/Dummy-Text

gilabel-05: unsplash.it
giurl-05: http://unsplash.it/300/300?random
gicaption-05: Caption - http://unsplash.it/300/300?random

gilabel-06: placekitten.com
giurl-06: http://placekitten.com/600/200
gicaption-06: Caption for this image

gilabel-07: loremflickr.com
giurl-07: http://loremflickr.com/800/300/Alien%20Sun
gicaption-07: Caption - http://loremflickr.com/800/300/Alien%20Sun

gilabel-08: lorempixel.com
giurl-08: http://lorempixel.com/400/200/animals/3/Different-Text?t=1588288193
gicaption-08: Caption - http://lorempixel.com/400/200/animals/3/Different-Text

gilabel-09: satyr.io first image
giurl-09: http://satyr.io/500x16:9/1
gicaption-09: Caption - http://satyr.io/500x16:9/1

gilabel-10: satyr.io second image ratio set to height
giurl-10: http://satyr.io/9:16x600/2
gicaption-10: Caption - http://satyr.io/300x9:16/2

gilabel-11: p-hold.com in red
giurl-11: http://p-hold.com/sheep/200/300/cc0000
gicaption-11: Caption - 

gilabel-12: p-hold in blue
giurl-12: http://p-hold.com/sheep/200/300/0000cc
gicaption-12: Caption - 



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

Hint: Click image to open in new tab


{:newthumbnail:  .thumbnail target="_blank"}

[{{ page.gilabel-01 }}]: {{ page.giurl-01 }}
[{{ page.gilabel-02 }}]: {{ page.giurl-02 }}
[{{ page.gilabel-03 }}]: {{ page.giurl-03 }}
[{{ page.gilabel-04 }}]: {{ page.giurl-04 }}
[{{ page.gilabel-05 }}]: {{ page.giurl-05 }}
[{{ page.gilabel-06 }}]: {{ page.giurl-06 }}
[{{ page.gilabel-07 }}]: {{ page.giurl-07 }}
[{{ page.gilabel-08 }}]: {{ page.giurl-08 }}


<div class="gallerycontainer">
<div class="container">
[![{{ page.gilabel-01 }}][]<span> {{ page.gilabel-01 }} <br />![{{ page.gilabel-01 }}][]<br /> {{ page.gicaption-01 }} </span>]({{ page.giurl-01 }}){: newthumbnail }
[![{{ page.gilabel-02 }}][]<span> {{ page.gilabel-02 }} <br />![{{ page.gilabel-02 }}][]<br /> {{ page.gicaption-02 }} </span>]({{ page.giurl-02 }}){: newthumbnail }
[![{{ page.gilabel-03 }}][]<span> {{ page.gilabel-03 }} <br />![{{ page.gilabel-03 }}][]<br /> {{ page.gicaption-03 }} </span>]({{ page.giurl-03 }}){: newthumbnail }
[![{{ page.gilabel-04 }}][]<span> {{ page.gilabel-04 }} <br />![{{ page.gilabel-04 }}][]<br /> {{ page.gicaption-04 }} </span>]({{ page.giurl-04 }}){: newthumbnail }
[![{{ page.gilabel-05 }}][]<span> {{ page.gilabel-05 }} <br />![{{ page.gilabel-05 }}][]<br /> {{ page.gicaption-05 }} </span>]({{ page.giurl-05 }}){: newthumbnail }
[![{{ page.gilabel-06 }}][]<span> {{ page.gilabel-06 }} <br />![{{ page.gilabel-06 }}][]<br /> {{ page.gicaption-06 }} </span>]({{ page.giurl-06 }}){: newthumbnail }
[![{{ page.gilabel-07 }}][]<span> {{ page.gilabel-07 }} <br />![{{ page.gilabel-07 }}][]<br /> {{ page.gicaption-07 }} </span>]({{ page.giurl-07 }}){: newthumbnail }
[![{{ page.gilabel-08 }}][]<span> {{ page.gilabel-08 }} <br />![{{ page.gilabel-08 }}][]<br /> {{ page.gicaption-08 }} </span>]({{ page.giurl-08 }}){: newthumbnail }
</div>

<!-- Can Do multiple galleries -->

[{{ page.gilabel-09 }}]: {{ page.giurl-09 }}
[{{ page.gilabel-10 }}]: {{ page.giurl-10 }}
[{{ page.gilabel-11 }}]: {{ page.giurl-11 }}
[{{ page.gilabel-12 }}]: {{ page.giurl-12 }}

<div class="gallerycontainer">
<div class="container">
[![{{ page.gilabel-09 }}][]<span>9 {{ page.gilabel-09 }} <br />![{{ page.gilabel-09 }}][]<br /> {{ page.gicaption-09 }} </span>]({{ page.giurl-09 }}){: newthumbnail }
[![{{ page.gilabel-10 }}][]<span> {{ page.gilabel-10 }} <br />![{{ page.gilabel-10 }}][]<br /> {{ page.gicaption-10 }} </span>]({{ page.giurl-10 }}){: newthumbnail }
[![{{ page.gilabel-11 }}][]<span> {{ page.gilabel-11 }} <br />![{{ page.gilabel-11 }}][]<br /> {{ page.gicaption-11 }} {{ page.giurl-11 }} </span>]({{ page.giurl-11 }}){: newthumbnail }
[![{{ page.gilabel-12 }}][]<span> {{ page.gilabel-12 }} <br />![{{ page.gilabel-12 }}][]<br /> {{ page.gicaption-12 }} {{ page.giurl-12 }} </span>]({{ page.giurl-12 }}){: newthumbnail }
</div>
