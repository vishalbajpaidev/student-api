'use strict';

// Use local.env.js for environment variables that grunt will set when the server starts locally.
// Use for your api keys, secrets, etc. This file should not be tracked by git.
//
// You will need to set these on the server you deploy to.

module.exports = {
  DOMAIN: 'http://localhost:9000',
  SESSION_SECRET: "mypro-secret",

  GOOGLE_ID: '352553236346-gdfcfiuuvukj72v8jgtusdpn6fphc3s8.apps.googleusercontent.com',
  GOOGLE_SECRET: 'ReNPE-SS82dAiPMMsiyON3Uj',

  // Control debug level for modules using visionmedia/debug
  DEBUG: ''
};
