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
    image:'http://i.imgur.com/YUbiO1u.png',
    size:'~80KB',
    features:['free','sorting','filtering','plugins','pagination','themeable','row selection','jquery'],
    description:'DataTables is a plug-in for the jQuery Javascript library. It is a highly flexible tool, based upon the foundations of progressive enhancement, and will add advanced interaction controls to any HTML table.'
  },
  {
    name:'uiTableFilter',
    src:'https://github.com/gregwebs/jquery-uitablefilter',
    image:'http://imgur.com/UFDkywb.png',
    size:'~3.48KB',
    features:['free','row selection','jquery'],
    description:'small plugin for filtering (hiding) table rows based on their text content'
  },
  {
    name:'Tablesorter',
    src:'http://tablesorter.com/docs/',
    image:'http://imgur.com/dvaRhGE.png',
    size:'~16.62KB',
    features:['free','sorting','filtering','plugins','sorting', 'jquery', 'themeable'],
    description:'tablesorter is a jQuery plugin for turning a standard HTML table with THEAD and TBODY tags into a sortable table without page refreshes. tablesorter can successfully parse and sort many types of data including linked data in a cell. It has many useful features including:'
  },
  {
    name:'Ingrid',
    src:'http://reconstrukt.com/ingrid/',
    image:'http://imgur.com/7MfNVFs.png',
    size:'~25KB',
    features:['free'],
    description:' Ingrid is an unobtrusive jQuery component that adds datagrid behaviors (column resizing, paging, sorting, row and column styling, and more) to your tables.'
  },
  {
    name:'Dynatable',
    src:'http://www.dynatable.com/',
    image:'http://imgur.com/TuxGCeF.png',
    size:'~58KB',
    features:['free', 'pagination', 'sorting', 'filtering', 'jquery'],
    description:'Dynatable is a funner, semantic, interactive table plugin using jQuery, HTML5, and JSON. And it\'s not just for tables.'
  },
  {
    name:'jqGrid',
    src:'http://www.trirand.com/',
    image:'http://imgur.com/255NmMf.png',
    size:'~302KB',
    features:['free'],
    description:'jqGrid is an Ajax-enabled JavaScript control that provides solutions for representing and manipulating tabular data on the web.'
  },
  {
    name:'slickGrid',
    src:'https://github.com/mleibman/SlickGrid',
    image:'http://imgur.com/jdwTdG8.png',
    size:'~13KB',
    features:['free'],
    description:'A lightning fast JavaScript grid/spreadsheet'
  },
  {
    name:'dhtmlxGrid',
    src:'http://dhtmlx.com/docs/products/dhtmlxGrid/',
    image:'http://imgur.com/86iRRm6.png',
    size:'~491KB',
    features:['free', 'pay'],
    description:'dhtmlxGrid is a full-featured JavaScript grid control that provides cutting-edge functionality, powerful data binding, and fast performance with large data sets.'
  },
  {
    name:'extjs',
    src:'https://www.sencha.com/products/extjs/#overview',
    image:'http://imgur.com/UerJT9A.png',
    size:'~700KB',
    features:['pay'],
    description:'Non-Free JavaScript application framework that includes extensive table library.'
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
