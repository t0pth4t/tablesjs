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
    src:'https://www.datatables.net/'
  },
  {name:'uiTableFilter',
    src:'https://github.com/gregwebs/jquery-uitablefilter'},
  {name:'Tablesorter',
    src:'http://tablesorter.com/docs/'},
  {name:'Ingrid',
    src:'http://reconstrukt.com/ingrid/'},
  {name:'dynatable',
    src:'http://www.dynatable.com/'},
  {name:'jqGrid',
    src:'http://www.trirand.com/'},
  {name:'slickGrid',
    src:'https://github.com/mleibman/SlickGrid'},
  {name:'dhtmlxGrid',
    src:'http://dhtmlx.com/docs/products/dhtmlxGrid/'},
  {name:'extjs',
    src:'https://www.sencha.com/products/extjs/#overview'}
];

// Get list of things
exports.index = function(req, res) {
   res.status(200).json(libraries);
};

// Get a single library
exports.show = function(req, res) {

    var library = _.find(libraries, {name:req.params.name});
    if(!thing) { return res.status(404).send('Not Found'); }
    return res.json(library);

};


function handleError(res, err) {
  return res.status(500).send(err);
}
