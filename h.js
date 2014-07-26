/*
 * Generate nested html easily with the h() function.
 *
 * Format: h({
 *   tag: "a",
 *   att: [[""], []],
 *   cnt: [
 *     {...},
 *     {...}
 *   ] 
 * })
 */
function h(obj) {
    if (typeof obj == "string")
        return obj;

    if( Object.prototype.toString.call( obj ) === '[object Array]' ) {
        var cnt = "";

        for (var i = 0; i < obj.length; i++) {
            cnt += h(obj[i]);            
        }
        return cnt;
    }
    
    var html = "<{$tag}{$atts}>{$cnt}</{$tag}>";

    html = html.replace(RegExp("\\{\\$tag\\}", 'g'), obj.tag);

    var att_str = "";
    if (obj.att) {
        for (var k in obj.att) {
            att_str += " {$att}=\"{$val}\"".replace("{$att}", k).replace("{$val}", obj.att[k]);
        }        
    }
    html = html.replace("{$atts}", att_str);
    html = html.replace("{$cnt}", h(obj.cnt));        

    return html;
}

if (module) {
    module.exports = h;
}
