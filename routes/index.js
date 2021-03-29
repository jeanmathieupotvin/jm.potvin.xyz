/**
 * =============================================================================
 * Router for / (index)
 * =============================================================================
 */

// Extract route's metadata.
const { version, appRoutes } = require('../package');
const meta   = appRoutes.index;
meta.version = version;

// Dependencies.
const express        = require('express');
const router         = express.Router();
const htmlAttrString = require("../lib/htmlattrstring");

// Construct proper attributes strings from objects and store them.
meta.links   = meta.links.map(e => htmlAttrString.toString(e));
meta.scripts = meta.scripts.map(e => htmlAttrString.toString(e));

// Callback for GET /.
router.get('/', (req, res, next) => {
  res.render('index', meta);
});

// Export router.
module.exports = router;