import { Component, Prop, State, Element } from '@stencil/core';

@Component({
  tag: 'gg-button',
  styleUrl: 'gg-button.scss'
})
export class ggButton {

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
    const classNames = `btn ${this.primary ? 'btn--primary' : '' } ${this.large ? 'btn--large' : '' }`;



    return (
      <button type={this.type} class={classNames} >
        <slot></slot>
      </button>
    );
  }
}
