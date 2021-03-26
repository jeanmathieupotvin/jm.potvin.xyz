/**
 * =============================================================================
 * Router for /projects
 * =============================================================================
 */

// Extract route metadata.
const meta   = require('../routes-metadata').projects;
meta.version = require('../package').version;

// Dependencies.
const express        = require('express');
const router         = express.Router();
const htmlAttrString = require("../lib/htmlattrstring");

// Construct proper attributes strings from objects and store them.
meta.links   = meta.links.map(e => htmlAttrString.toString(e));
meta.scripts = meta.scripts.map(e => htmlAttrString.toString(e));

// Callback for GET /.
router.get('/', (req, res, next) => {
  res.render('projects', meta);
});

// Export router.
module.exports = router;
