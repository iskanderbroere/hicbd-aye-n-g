import "lazysizes/plugins/respimg/ls.respimg"
import "lazysizes/plugins/optimumx/ls.optimumx"
import "lazysizes/plugins/object-fit/ls.object-fit"
import "lazysizes/plugins/parent-fit/ls.parent-fit"
import lazysizes from "lazysizes"

export default ({ query }): void => {
  // https://github.com/aFarkas/lazysizes
  Object.assign(lazysizes.cfg, {
    // Load nearby elements before they are visible
    // Defaults to 370 on mobile and 500 on desktop
    // Override to 400 for both mobile and desktop
    expand: parseInt(query.expand, 10) || 400
  })
}
