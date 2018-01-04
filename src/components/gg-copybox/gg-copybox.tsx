import { Component } from '@stencil/core';

@Component({
  tag: 'gg-copybox',
  styleUrl: 'gg-copybox.scss',
  shadow: true
})
export class ggCopyBox {

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
