import { Component, Prop, State, Element } from '@stencil/core';

@Component({
  tag: 'ggc-button',
  styleUrl: 'ggc-button.scss'
})
export class ggcButton {

  @Element() el: HTMLElement;

  @Prop() type: string;

  @Prop() primary: boolean;
  @Prop() large: boolean;

  componentDidLoad() {
    const btnElm = this.el.querySelector('button');
    btnElm.addEventListener('click', () => {
        btnElm.blur();
    });
  }

  render() {
    this.type = this.type || 'button';
    const classNames = `c-btn ${this.primary ? 'c-btn--primary' : '' } ${this.large ? 'c-btn--large' : '' }`;



    return (
      <button type={this.type} class={classNames}>
        <slot></slot>
      </button>
    );
  }
}
