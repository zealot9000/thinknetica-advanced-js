class HtmlElement {
    constructor() {
        this._variables = {};
        this._styleVariables = {};
        this._replacePattern = /\{\{(\w+)\}\}/;
        this._isRendered = false;
    }

    set target(element) {
        if (!(element instanceof HTMLElement))
            throw new Error('HTMLElement required');
        this._target = element;
    }

    set template(value) {
        this._template = value;
        if (this._isRendered) this._render();
    }

    unrender() {
        this._isRendered = false;
        this._render();
    }

    render() {
        this._isRendered = true;
        this._render();
    }

    _render() {
        if (this._isRendered) {
          const pattern = this._replacePattern;
          let out = this._template;
          while (pattern.test(out)) {
            out = out.replace(pattern, this._replaceFunction.bind(this));
          }
          this._target.innerHTML = out;
          this._target.firstElementChild.style.cssText = this._prepareCssStyle();
        } else {
          this._target.innerHTML = '';
        }
    }

    set styles(params) {
        this._styleVariables = {};
        for (const [key, value] of Object.entries(params)) {
          this._styleVariables[key] = value;
        }
        if (this._isRendered) this._render();
    }

    _prepareCssStyle() {
        const out =[];
        for (const [key, value] of Object.entries(this._styleVariables)) {
          out.push(`${key}: ${value}`);
        }
        return out.join('; ');
    }

    _replaceFunction(_s, p1, _o, _s2) {
        return this._variables[p1];
    }

    set variables(params) {
        for (const [key, value] of Object.entries(params)) {
          if (value instanceof Function) {
            this._variables[key] = value();
          } else {
            this._variables[key] = value;
          }
        }
        if (this._isRendered) this._render();
    }
}