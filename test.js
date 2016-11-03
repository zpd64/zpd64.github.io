function print(text, style) {  
    var div = document.createElement('div');  
    div.innerHTML = text;  
    div.style.cssText = style;  
    document.body.appendChild(div);  
}  
function testBoxSizing() {  
    var div = document.createElement('div');  
    div.style.cssText = 'float: left; width: 200px; border-right: 100px solid red; background: green; color: yellow;';  
    div.innerHTML = 'box sizing test';  
    document.body.appendChild(div);  
}  
document.write('<style>body{margin:5px;font-size:12px;}iframe{width:100%;height:70px;}hr{clear:both}</style>');  
var doctype = document.doctype || document.firstChild;  
print(/[^\\\/]+$/.exec(decodeURI(window.location)), 'color: blue;');  
print('DOCTYPE/publicId: ' + (doctype.publicId || doctype.nodeValue || '(N/A)'), 'color: gray;');  
print('navigator: ' + window.navigator.userAgent, 'color: gray;');  
print('document.documentMode: ' + document.documentMode, 'float: left; width: 200px; color: green;');  
print('window.JSON: ' + window.JSON, 'float: left; width: 200px; color: red;');  
testBoxSizing();  