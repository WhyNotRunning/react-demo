function buildUrl(){
	var gs = "?debug=true";
	with(location){
		var url = href + gs;
	}
	return url;
}