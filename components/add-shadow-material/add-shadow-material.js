/**
 * A minimal custom component to apply THREE's ShadowMaterial to a geometry.
 * https://threejs.org/docs/index.html#api/en/materials/ShadowMaterial 
 *
 * @author Manuel Moro
 */
AFRAME.registerComponent('add-shadow-material', {
  schema: {
    opacity: { default: 0.7 }
  },
  init: function () {
    this.material = this.el.getOrCreateObject3D('mesh').material = new THREE.ShadowMaterial()
    this.material.opacity = this.data.opacity
  }
})
