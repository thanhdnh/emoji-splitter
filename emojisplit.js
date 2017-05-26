var EmojiSpliter = function(){
	var json = '';
	var predic = new Array(); 
	
	this.loadData = function(){
		json = (function () {
		json = null;
		$.ajax({
			'async': false,
			'global': false,
			'url': 'emoji.json',
			'dataType': "json",
			'success': function (data) {
				json = data;
			}
		});
		return json;
		})(); 
	}
	
	this.create = function(){
		this.loadData();
		for(var i=0; i<5; i++) predic[i] = new Array();
		return this;
	}

	function decodeEntities(s){
		var str, temp = document.createElement('p');
		temp.innerHTML= s;
		str= temp.textContent || temp.innerText;
		temp=null;
		return str;
	}

	this.splitBySymbol = function(emojistr, symbol){
		$.each(json, function(k, v){
			if(v['code_decimal'].split('&zwj;').length===4 || v['code_decimal'].split('&#8205;').length===4)
				predic[4].push([decodeEntities(v['code_decimal']), v['unicode']]);
			else if(v['code_decimal'].split('&zwj;').length===3 || v['code_decimal'].split('&#8205;').length===3)
				predic[3].push([decodeEntities(v['code_decimal']), v['unicode']]);
			else if(v['code_decimal'].split('&zwj;').length===2 || v['code_decimal'].split('&#8205;').length===2)
				predic[2].push([decodeEntities(v['code_decimal']), v['unicode']]);
			else if(v['code_decimal'].indexOf('&#127995')>0 || v['code_decimal'].indexOf('&#127996')>0 || v['code_decimal'].indexOf('&#127997')>0 || v['code_decimal'].indexOf('&#127998')>0 || v['code_decimal'].indexOf('&#127999')>0)
				predic[1].push([decodeEntities(v['code_decimal']), v['unicode']]);
			else
				predic[0].push([decodeEntities(v['code_decimal']), v['unicode']]);
		});
		
		for(var i=4; i>=0; i--)
			$.each(predic[i], function(it, val){
				if(emojistr.indexOf(val[0])>=0)
					emojistr = emojistr.replace(RegExp(val[0], 'g'), symbol+val[0]+symbol);
			});
		
		return emojistr.split(RegExp(symbol, 'g'));
	}
}