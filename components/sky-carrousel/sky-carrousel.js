/**
 * This simple custom component reads a configuration file from the A-Frame asset system and
 * allows to cycle a <a-sky> through a series of different source images
 * when clicking on it.
 *
 * The code also takes care of adjusting a couple of lights which need to be parented by <a-sky>. It sets
 * the intensity, color and groundColor for a hemisphere light, and the intensity and
 * position for a directional light.
 *
 * To work properly, the component needs the following structure in the scene:
 * <a-sky>
 *      <a-entity light:"type:hemisphere"></a-entity>
 *      <a-entity light:"type:directional">
 *          <a-entity position="x y z"></a-entity>
 *      </a-entity>
 * </a-sky>
 *
 * Cycling can be automatically attached to the click event of <a-sky> or triggered from
 * code by calling the function next(). To avoid linking to the click event,
 * set useClick to false.
 *
 * Please feel free to use it and adapt it to your needs.
 * Note: This is WIP and may substantially change in a future.
 *
 * @author Manuel Moro
 */
AFRAME.registerComponent('sky-carrousel', {
  schema: {
    conf: { type: 'selector' },
    useClick: { default: 'true' }
  },
  init: function () {
    // This is needed for Edge to iterate through a HMTLCollection.
    // Chrome and Firefox seem to work well with and without
    // https://github.com/zloirock/core-js#iterable-dom-collections
    HTMLCollection.prototype[Symbol.iterator] = Array.prototype.values

    var nodes = this.el.children
    for (var node of nodes) {
      if (node.components.light && (node.components.light.light.type === 'HemisphereLight')) {
        this.hemisphereLight = node.components.light.light
      } else if (node.components.light && (node.components.light.light.type === 'DirectionalLight')) {
        this.directionalLight = node.components.light.light
        this.positionTarget = node.components.light.el.lastElementChild
      }
    }

    this.currentIdx = -1
    this.next()

    if (this.data.useClick) {
      this.el.addEventListener('click', function (evt) {
        var setImageComponent = this.components['sky-carrousel']
        setImageComponent.next()
      })
    }
  },
  next: function () {
    var confFile = this.data.conf.data

    var i = this.currentIdx =
      this.currentIdx !== confFile.srcImages.length - 1
        ? ++this.currentIdx
        : 0

    this.el.setAttribute('material', 'src', confFile.srcImages[i])
    this.directionalLight.intensity = confFile.directionalIntensities[i]
    this.hemisphereLight.intensity = confFile.hemisphereIntensities[i]
    this.hemisphereLight.color = new THREE.Color (confFile.hemisphereColors[i])
    this.hemisphereLight.groundColor = new THREE.Color(confFile.hemisphereGroundColors[i])
    this.positionTarget.object3D.position.copy(AFRAME.utils.coordinates.parse(confFile.directionalPositions[i]))
  }
})
