# emojiSplit
This is a javascript library to allow you split emoji string. If you want to extend this project to work with almost unicode string, you just need extend the data file. <br/>
Required library: jquery.  
Required other data: emoji.json.  
----------------------  <br/>
In order to use this library, you need:
1) Include jquery library before including this library.
2) In your code editor, at the point you want to split emojis string, you need do as following  
var emojisplit = new EmojiSplit().create(); <br/>
var result = emojisplit.splitBySymbol('I ❤ you 💏', '//'); <br/> 
Hints:    <br/>
+ You need call the method create before using splitBySymbol method.
+ The splitBySymbol method has two parameters: the first parameter is input emoji string that you need split, the second paramenter is the pattern symbol that you want. This symbol need no appear in your emoji string. You can choose any symbols you want, just mismatch with any symbol in your input emojji string. <br/>
=======================   <br/>
Here are some examples:  <br/>
'I ❤ you 💏' ==> I ,❤, you ,💏,
