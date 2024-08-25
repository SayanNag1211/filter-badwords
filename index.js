function filterWord(str,wordList,isStar=true) {
    return str.replace(new RegExp(`${wordList.join('|')}`, 'gi'), match => {
        return !isStar?'':"*".repeat(
            match.length
        ); 
    }).replace(/\s{1,}/g, ' ').trim();       
}

export default filterWord;
