class Anchor {
	constructor(
		selector,
		btnId,
		btnText,
		insertMethod,
		btnStyle = '',
		iconClass = ''
	) {
		this.selector = selector;
		this.btnId = btnId;
		this.btnText = btnText;
		this.btnStyle = btnStyle;
		this.iconClass = iconClass;
		this.insertMethod = insertMethod;
	}

	get answer() {
		return body.querySelector(this.selector);
	}

	get __answerPosition() {
		const answerTopPosition = this.answer.offsetTop;
		const headerHeight = header.clientHeight;
		return answerTopPosition - headerHeight;
	}

	inject() {
		if (this.answer) {
			const button = document.createElement('button');
			button.setAttribute('id', this.btnId);
			button.setAttribute('class', `ws-nowrap s-btn ${this.btnStyle}`);

			this.insertMethod(questionHeader, button);

			const text = document.createElement('div');
			text.setAttribute('class', 'text');
			text.innerText = this.btnText;

			button.appendChild(text);

			if (this.iconClass) {
				const icon = document.createElement('div');
				icon.setAttribute('class', 'icon bulb');
				button.appendChild(icon);
			}

			button.addEventListener('click', () => this.__jump());
		}
	}

	remove() {
		if (this.answer) {
			const button = questionHeader.querySelector(`#${this.btnId}`);
			button.remove();
		}
	}

	__jump() {
		const position = this.__getAnswerPosition();
		window.scrollTo(0, position);
	}
}
