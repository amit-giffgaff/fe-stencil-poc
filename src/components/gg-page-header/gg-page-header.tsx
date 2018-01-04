import { Component, Prop } from '@stencil/core';

@Component({
  tag: 'gg-page-header',
  styleUrl: 'gg-page-header.scss',
})
export class ggPageHeader {

  @Prop() header: string;

  render() {
    return (
      <header class="page-header-hero page-header-hero--large">
        <div class="page-header-hero__title">
           <gg-copybox>
              <h1 class="txt--display">{ this.header }</h1>
          </gg-copybox>
        </div>
      </header>
    );
  }
}
