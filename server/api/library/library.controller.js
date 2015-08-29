/**
 * Using Rails-like standard naming convention for endpoints.
 * GET     /library              ->  index
 * GET     /library/:id          ->  show
 */

'use strict';

var _ = require('lodash');
var libraries = [
  {
    name:'DataTables',
    src:'https://www.datatables.net/',
    image:'http://i.imgur.com/YUbiO1u.png'
  },
  {
    name:'uiTableFilter',
    src:'https://github.com/gregwebs/jquery-uitablefilter',
    image:'http://imgur.com/UFDkywb.png'
  },
  {
    name:'Tablesorter',
    src:'http://tablesorter.com/docs/',
    image:'http://imgur.com/dvaRhGE.png'
  },
  {
    name:'Ingrid',
    src:'http://reconstrukt.com/ingrid/',
    image:'http://imgur.com/7MfNVFs.png'
  },
  {
    name:'dynatable',
    src:'http://www.dynatable.com/',
    image:'http://imgur.com/TuxGCeF.png'
  },
  {
    name:'jqGrid',
    src:'http://www.trirand.com/',
    image:'http://imgur.com/255NmMf.png'
  },
  {
    name:'slickGrid',
    src:'https://github.com/mleibman/SlickGrid',
    image:'http://imgur.com/jdwTdG8.png'
  },
  {
    name:'dhtmlxGrid',
    src:'http://dhtmlx.com/docs/products/dhtmlxGrid/',
    image:'http://imgur.com/86iRRm6.png'
  },
  {
    name:'extjs',
    src:'https://www.sencha.com/products/extjs/#overview',
    image:'http://imgur.com/UerJT9A.png'
  }
];

// Get list of libraries
exports.index = function(req, res) {
   res.status(200).json(libraries);
};

// Get a single library
exports.show = function(req, res) {
    var library = _.find(libraries, {name:req.params.name});
    if(!library) { return res.status(404).send('Not Found'); }
    return res.json(library);
};


function handleError(res, err) {
  return res.status(500).send(err);
}
