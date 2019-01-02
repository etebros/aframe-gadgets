# aframe-gadgets
Some tiny custom aframe components to research A-Frame possibilities.
## What this project is about
I'm a student of the Multimedia Degree at the Open University of Catalonia (UOC). The degree includes a six month course on Virtual Reality, and A-Frame is used in hands-on assignments. I drafted several custom components to complete my assignments and here I'm sharing a more polished version of the code I wrote, since it's my intention to keep learning and researching on A-Frame, THREE and WebGL, and make my little components to evolve and become something more complex and hopefully useful for the community.

I'll be gradually polishing and pushing several pieces of code including:

* A basic particle system
* A porting to A-Frame of [THREE water example](https://threejs.org/examples/#webgl_water) 
* A component to add [THREE ShadowMaterial](https://threejs.org/docs/index.html#api/en/materials/ShadowMaterial) to A-Frame entities
* An image carrousel plugable into a-sky components
* A component to dynamically replace textures in GTLF models
## Examples
[Scene with sky-carrousel and add-shadow-material](https://etebros.github.io/aframe-gadgets/examples/sky-carrousel.html)
## Components pushed so far
### add-shadow-material
This is nothing but a demo of how ShadowMaterial can be easily used from A-Frame. Basically, the need for it came when experimenting with [Jerome Etienne's ARJS](https://medium.com/arjs
), to achieve better integration of A-Frame entities into augmented reality scenes.

It also works well together with the _sky-carrousel_ custom component. See a demo [here](https://etebros.github.io/aframe-gadgets/examples/sky-carrousel.html).
### sky-carrousel
Provides an easy way to change source images in a-sky entities, as well as dynamically adapting light conditions to every new image loaded. 

Basically it takes a json configuration file preloaded into the A-Frame asset system and cycles through a series of equirrectangular images and light adjustments, either by handling the _click_ event of a a-sky entity or by calling the _next_ function offered by the component itself.

See the demo [here](https://etebros.github.io/aframe-gadgets/examples/sky-carrousel.html).




