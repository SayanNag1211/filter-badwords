<!--
This README describes the package. If you publish this package to npmjs.com,
this README's contents appear on the landing page for your package.
-->
## Languages
- English
- Hindi
- বাংলা 
- spanish
- More

## Installation
```cmd  
    npm i filter-badwords
```
## Import
```js
    import filterWord from 'filter-badwords-anylan'
```
## Usage
```js
    const wordList = ["Ass", "badword2", "bitch","বাল","भोस्डिके"];
    const str="hello Ass বাল are you भोस्डिके.";
    const result = filterWord(str,wordList,true); //Sentence , ListOfBadword , if you want to show "*" then pass true else false
    console.log(result);
```

