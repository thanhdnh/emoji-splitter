# emojiSplit
This javascript library allows you perform splitting emoji string. If you want to extend this project to work with almost unicode string, you just need to extend the data file (append data into emoji.json). <br/>
This project is a part of [https://www.emojionline.org](https://www.emojionline.org) <br/>
====================== <br/>
*Required library: jquery. <br/> 
*Required other data: emoji.json. <br/>
----------------------  <br/>
In order to use this library, you need:
1) Include jquery library before including this library.
2) In your code editor, at the point you want to split emojis string, you need to do as following  
var emojisplit = new EmojiSplit().create(); <br/>
var result = emojisplit.splitBySymbol('I ❤ you 💏', '//'); <br/> 
Hints:    <br/>
+ You need call the method create before using splitBySymbol method.
+ The splitBySymbol method has two parameters: the first parameter is input emoji string that you need split, the second parameter is the pattern symbol that you want to separate (this parameter is optional). This symbol need no appear in your emoji string. You can choose any symbols you want, just mismatch with any symbols in your input emoji string. <br/>
=======================   <br/>
Here are some examples:  <br/>
'I ❤ you 💏' ==> I ,❤, you ,💏, <br/>
'This 🎄🎅🏼, my 👨‍👩‍👧‍👦 will go to 🗽'  ==>  This ,🎄,,🎅🏼,, my ,👨‍👩‍👧‍👦, will go to ,🗽, <br/>
''👨🏾‍🎓👷🏿👸🏻👢👨‍👨‍👦👩‍👩‍👦💑🤦🏼🙋''  ==>  ,👨🏾‍🎓,,👷🏿,,👸🏻,,👢,,👨‍👨‍👦,,👩‍👩‍👦,,💑,,🤦🏼,,🙋, <br/>

This library works well on allmost browsers.
