define(['jade'], function(jade) { if(jade && jade['runtime'] !== undefined) { jade = jade.runtime; }

this["JST"] = this["JST"] || {};

this["JST"]["stats"] = function anonymous(locals) {
var buf = [];
var locals_ = (locals || {}),popcornMakes = locals_.popcornMakes,thimbleMakes = locals_.thimbleMakes;buf.push("<section class=\"stats\"><ul><li>" + (jade.escape((jade.interp = popcornMakes) == null ? '' : jade.interp)) + " Popcorn Makes</li><li>" + (jade.escape((jade.interp = thimbleMakes) == null ? '' : jade.interp)) + " Thimble Makes</li></ul></section>");;return buf.join("");
};

this["JST"]["tiles"] = function anonymous(locals) {
var buf = [];
buf.push("<ul class=\"tiles\"><li></li><li></li><li></li><li></li><li></li><li></li><li></li></ul>");;return buf.join("");
};

this["JST"]["header"] = function anonymous(locals) {
var buf = [];
var locals_ = (locals || {}),name = locals_.name,username = locals_.username;buf.push("<header><h1>" + (jade.escape((jade.interp = name) == null ? '' : jade.interp)) + "</h1><h2>" + (jade.escape((jade.interp = username) == null ? '' : jade.interp)) + "</h2></header>");;return buf.join("");
};

return this["JST"];

});