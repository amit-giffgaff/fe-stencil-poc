import { Component, Prop } from '@stencil/core';

@Component({
  tag: 'gg-button',
  styleUrl: 'gg-button.scss'
})
export class ggButton {

  @Prop() type: string;

  @Prop() primary: boolean;
  @Prop() large: boolean;

  render() {
    this.type = this.type || 'button';
    const classNames = `btn ${this.primary ? 'btn--primary' : '' } ${this.large ? 'btn--large' : '' }`;
    return (
      <button type={this.type} class={classNames}>
        <slot></slot>
      </button>
    );
  }
}
