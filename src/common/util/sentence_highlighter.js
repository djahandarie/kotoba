const highlighter = {
    BOLD: '**$&**',
    UNDERLINE: '__$&__',
    ITALIC: '*$&*',
    BOLD_ITALIC: '***$&***',
    UNDERLINE_BOLD: '__**$&**__'
}

function highlight(sentence, word, replacePattern = highlighter.BOLD) {
    let pattern = new RegExp(word, 'g');
    if (!pattern.test(sentence)) {
        pattern = new RegExp(word.slice(0, word.length-1), 'g');
    }

    return sentence.replace(pattern, replacePattern)
}

module.exports = {
    highlight,
    highlighter
}