import { Component, Prop } from '@stencil/core';

@Component({
  tag: 'ggc-page-header',
  styleUrl: 'ggc-page-header.scss',
})
export class ggcPageHeader {

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
          <ggc-copybox>
            <h1 class="txt--display">{ this.header }</h1>
          </ggc-copybox>
        </div>
      
      </header>

    );
  }
}
