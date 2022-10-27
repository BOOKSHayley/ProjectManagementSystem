// These are helpers for use in the Handlebars.
// Feel free to add more than is here

Handlebars.registerHelper("ifvalue", function(conditional, options) {
    if (conditional == options.hash.equals) {
        return options.fn(this);
    } else {
        return options.inverse(this);
    }
});

Handlebars.registerHelper('currentTimeFormat', function(format) {
    return moment().format(format);
});

Handlebars.registerHelper('timeFormat', function(time, format) {
    return moment(time).format(format);
});