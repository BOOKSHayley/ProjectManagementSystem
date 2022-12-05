// These are helpers for use in the Handlebars.
// Feel free to add more than is here

Handlebars.registerHelper("ifvalue", function(conditional, options) {
    if (conditional == options.hash.equals) {
        return options.fn(this);
    } else {
        return options.inverse(this);
    }
});

Handlebars.registerHelper('lt', function( a, b ){
	var next =  arguments[arguments.length-1];
	return (a < b) ? next.fn(this) : next.inverse(this);
});

Handlebars.registerHelper('currentTimeFormat', function(format) {
    return moment().format(format);
});

Handlebars.registerHelper('timeFormat', function(time, format) {
    return moment(time).format(format);
});

Handlebars.registerHelper('ifInObj', function(elem, list, objKey, options) {
    var elt = list.find(e => e[objKey] == elem);
    if(elt) {
      return options.fn(this);
    }
    return options.inverse(this);
  });