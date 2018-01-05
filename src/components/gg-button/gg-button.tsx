import { Component, Prop } from '@stencil/core';

@Component({
  tag: 'gg-button',
  styleUrl: 'gg-button.scss'
})
export class ggButton {

  @Prop() primary: boolean;
  @Prop() large: boolean;

  render() {
    const classNames = `btn ${this.primary ? 'btn-primary' : '' } ${this.large ? 'btn-large' : '' }`;
    return (
      <button class={ classNames }>
        <slot></slot>
      </button>
    );
  }
}
