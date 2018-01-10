import { Component } from '@stencil/core';

@Component({
  tag: 'ggc-copybox',
  styleUrl: 'ggc-copybox.scss',
  shadow: true
})
export class ggcCopyBox {

  render() {
    return (
      <div class="copy-box">
        <img class="copy-box__boing" src="../../assets/svg/copy-box.svg" />
        <div class="copy-box__outline">
          <div class="copy-box__body">
            <slot></slot>
          </div>
        </div>
        <div class="copy-box__dots"></div>
      </div>
    );
  }
}
