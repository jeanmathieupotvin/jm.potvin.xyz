/**
 * =============================================================================
 * jm.potvin.xyz: personal website of Jean-Mathieu Potvin 
 * =============================================================================
 */

/**
 * =============================================================================
 * Dependencies
 * =============================================================================
 */

// Import packages.
const express = require('express'); // core dependency; handles everything.
const path    = require('path');    // work with file and directories.

// Import routes.
const indexRouter    = require('./routes/index');
const aboutRouter    = require('./routes/about');
const cvRouter       = require('./routes/cv');
const blogRouter     = require('./routes/blog');
const projectsRouter = require('./routes/projects');
const errorRouter    = require('./routes/error');

/**
 * =============================================================================
 * Define Express app
 * =============================================================================
 */

// Instantiate an Express application.
const app = express();

// Setup view engine setup (here, ejs).
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Static files location.
app.use(express.static(path.join(__dirname, 'public')));

// Load routes into the app.
// '*' is an alias for 404 errors. It must be the last loaded route.
app.use('/',         indexRouter);
app.use('/about',    aboutRouter);
app.use('/cv',       cvRouter);
app.use('/blog',     blogRouter);
app.use('/projects', projectsRouter);
app.use('*',         errorRouter);

// Export app.
module.exports = app;
