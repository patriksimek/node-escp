map = {
	'&': '&amp;',
    '<': '&lt;',
    '>': '&gt;'
}

module.exports = function(string) {
	return string.replace(/[&<>]/g,function(tag){return map[tag] || tag});
}