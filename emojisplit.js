var EmojiSpliter = function(){
	var json = '';
	var predic = new Array(); 
	var stack = '';
	
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
	
	function generateUID() {
	  function s4() {
		return Math.floor((1 + Math.random()) * 0x10000)
		  .toString(16)
		  .substring(1);
	  }
	  return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
		s4() + '-' + s4() + s4() + s4();
	}
	
	function getBackFromUID(eleID, st){
		return st[eleID];
	}

	this.splitBySymbol = function(emojistr, symbol){
		if(symbol='undefined')
			symbol = '/////';
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
		
		stack = "{";		
		for(var i=4; i>=0; i--)
			$.each(predic[i], function(it, val){
				if(emojistr.indexOf(val[0])>=0){
					var guid = generateUID();
					stack += '"'+guid+'":' + '"'+val[0]+'",';
					emojistr = emojistr.replace(RegExp(val[0], 'g'), symbol+guid+symbol);
				}
			});
		stack = stack.substring(0, stack.length-1)+'}';
		var stackUID = JSON.parse(stack);
			
		var splitUID = emojistr.split(RegExp(symbol, 'g'));
		var result = new Array();
		for(var i=0; i<splitUID.length; i++){
			if(stackUID[splitUID[i]]!=null)
				result.push(stackUID[splitUID[i]]);
			else
				result.push(splitUID[i]);
		}
		return result;
	}
}
