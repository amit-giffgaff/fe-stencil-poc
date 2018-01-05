import { Component, Prop } from '@stencil/core';

@Component({
  tag: 'gg-button',
  styleUrl: 'gg-button.scss'
})
export class ggButton {

  @Prop() primary: boolean;
  @Prop() large: boolean;

  render() {
    return (
      <button class="btn"><slot></slot></button>
    );
  }
}
