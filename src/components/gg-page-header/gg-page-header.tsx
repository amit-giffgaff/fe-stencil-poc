import { Component, Prop } from '@stencil/core';

@Component({
  tag: 'gg-page-header',
  styleUrl: 'gg-page-header.scss',
})
export class ggPageHeader {

  @Prop() header: string;
  @Prop() image: string;

  render() {
    let css = `
      .page-header-hero {
        background-image: url(${this.image});
      }
    `

    return (
      <header class="page-header-hero page-header-hero--large">
        <style>{css}</style>
        <div class="page-header-hero__title">
          <gg-copybox>
            <h1 class="txt--display">{ this.header }</h1>
          </gg-copybox>
        </div>
      
      </header>

    );
  }
}
