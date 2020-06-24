class Input extends HtmlElement {
    set onInput(fn){
        this._target.addEventListener('input', fn)
    }

    set onFocus(fn){
        this._target.addEventListener('focus', fn)
    }
}
