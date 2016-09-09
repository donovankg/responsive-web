# chapter 7 book work for Elaquent

problem 1.
```javascript
//code
<!doctype html>
<style>  /* Defines a cleaner look for tables */  
table{
	border-collapse: collapse;
}
td, th {
	border: 1px solid black; 
	padding: 3px 8px;
}
th{
	text-align: left;
}
</style>
<body>
<script>
var MOUNTAINS = [
  {name: "Kilimanjaro", height: 5895, country: "Tanzania"},
  {name: "Everest", height: 8848, country: "Nepal"},
  {name: "Mount Fuji", height: 3776, country: "Japan"},
  {name: "Mont Blanc", height: 4808, country: "Italy/France"},
  {name: "Vaalserberg", height: 323, country: "Netherlands"},
  {name: "Denali", height: 6168, country: "United States"},
  {name: "Popocatepetl", height: 5465, country: "Mexico"}
];

if (typeof module != "undefined" && module.exports)
  module.exports = MOUNTAINS;

function buildTable(data) {
	var table = document.createElement("table");
	var fields = Object.keys(data[0]);
	var headRow = document.createElement("tr");
	fields.forEach(function(field) {
		var headCell = document.createElement("th");
		headCell.textContent = field;
		headRow.appendChild(headCell);
	});
	table.appendChild(headRow);
	data.forEach(function(object) {
		var row = document.createElement("tr");
		fields.forEach(function(field) {
			var cell = document.createElement("td");
			cell.textContent = object[field];
			if (typeof object[field] == "number")
				cell.style.textAlign = "right";
				row.appendChild(cell);
			});
		table.appendChild(row);
	});
	return table;
}  
document.body.appendChild(buildTable(MOUNTAINS));</script>
</body>
//output
/*
name	height	country
Kilimanjaro	5895	Tanzania
Everest	8848	Nepal
Mount Fuji	3776	Japan
Mont Blanc	4808	Italy/France
Vaalserberg	323	Netherlands
Denali	6168	United States
Popocatepetl	5465	Mexico
*/
```
problem 2
```javascript
//code
<html>
  <head>
    <meta charset="UTF-8">
    <title></title>
  </head>
  <body>
    <h1>Heading with a <span>span</span>.</h1>
    <p>A paragraph with <span>one</span>, <span>two</span>  spans.</p>
  <script type="text/javascript">
    function byTagName(node, tagName) {
      var found = [];    
      tagName = tagName.toUpperCase();    
    function explore(node) {
      for (var i = 0; i < node.childNodes.length; i++){        
        var child = node.childNodes[i];        
        if (child.nodeType == document.ELEMENT_NODE) {
          if (child.nodeName == tagName)            
            found.push(child);          
            explore(child);        
          }
        }
      }
      explore(node);
      return found;
    }
    console.log(byTagName(document.body, "h1").length);  
  </script>
  </body>
</html>
//output
//Heading with a span.
//A paragraph with one, two spans.
```

