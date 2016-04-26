/* Local PostCSS Configuration */

module.exports = [
  /* autoprefix for different browser vendors */
  require('autoprefixer'),
  /* reset inherited rules */
  require('postcss-initial')({
    reset: 'inherited', // reset only inherited rules
  }),
  /* flexbox polyfil must include https://github.com/10up/flexibility in your code
  require('postcss-flexibility'),*/
  /* enable css @imports like Sass/Less */
  require('postcss-import'),
  /* enable mixins like Sass/Less */
  require('postcss-mixins')({
    mixins: require('./src/styles/mixins'),
  }),
  /* enable nested css selectors like Sass/Less */
  require('postcss-nested'),
  /* require global variables */
  require('postcss-simple-vars')({
    variables: function () {
      var cssVariables = require('./src/styles/variables')
      return cssVariables
    },
  }),
  /* check CSS for color contrast compliance w/ Web Content Accessibility Guidelines  */
  // require('postcss-wcag-contrast'),
  /* PostCSS plugin for making calculations with math.js  */
  require('postcss-math'),
  /* transform W3C CSS color function to more compatible CSS. */
  require('postcss-color-function'),
]

/*eslint-disable no-unused-vars */
function mergeOptions (obj1, obj2) {
  var obj3 = {}
  for (var attrname in obj1) {
    obj3[attrname] = obj1[attrname]
  }
  for (var attrname in obj2) {
    obj3[attrname] = obj2[attrname]
  }
  return obj3
}
