// Rubysh style function intended to be used in this way:

// Requires jQuery

// var character = {...};
// css_scope("#confirm-character", function(container) {
//     container(".name").text(character.name);
//     container(".strength").text(character.strength);
//     container(".photo img").attr("src", character.photo);
// });

function css_scope(scope, callback) {
    var $container = function(selector) {
        return $(scope + " " + selector);
    };
    callback.call(scope, $container);
}
