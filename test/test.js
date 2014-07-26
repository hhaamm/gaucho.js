var assert = require("assert");

var h = require('../h.js');

describe('#h()', function() {
    it('should return literal content', function(){
        var hml = h("title");
        assert.equal(hml, "title");
    });

    it('should return a tag with content', function(){
        var hml = h({tag: "h1", cnt: "This is a title" });
        assert.equal(hml, "<h1>This is a title</h1>");
    });

    it('should return a tag with content and an attribute', function(){
        var hml = h({tag: "h1", cnt: "This is a title", att: {class: "red_title"} });
        assert.equal(hml, "<h1 class=\"red_title\">This is a title</h1>");
    });

    it('should return a tag with content and multiple attributes', function(){
        var hml = h({tag: "h1", cnt: "This is a title", att: {class: "red_title", id: "red_title_id"} });
        assert.equal(hml, "<h1 class=\"red_title\" id=\"red_title_id\">This is a title</h1>");
    });

    it('should return a tag a tag inside', function(){
        var hml = h({tag: "ul", cnt: {tag:"li",cnt:"1"} });
        assert.equal(hml, "<ul><li>1</li></ul>");
    });

    it('should return a list of tags', function(){
        var hml = h([{tag:"li",cnt:"1"}, {tag:"li",cnt:"2"}, {tag:"li",cnt:"3"}]);
        assert.equal(hml, "<li>1</li><li>2</li><li>3</li>");
    });

    it('should return a tag with nested content', function(){
        var hml = h({tag: "ul", cnt: [{tag:"li",cnt:"1"}, {tag:"li",cnt:"2"}, {tag:"li",cnt:"3"}] });
        assert.equal(hml, "<ul><li>1</li><li>2</li><li>3</li></ul>");
    });
});
