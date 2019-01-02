/**
 * Allows to include a div or other DOM element in html to be shown while
 * the AFRAME scene is loading. Once the scene is loaded, that dom element
 * is hidden by setting its opacity to 0 (to use nice CSS transitions)
 *
 * @author Manuel Moro
 */
AFRAME.registerComponent('show-load-dom', {
  schema: {
    idDOM: { type: 'string' }
  },
  init: function () {
    var domElement = document.querySelector(this.data.idDOM)
    domElement.style.opacity = '0'
  }
})
