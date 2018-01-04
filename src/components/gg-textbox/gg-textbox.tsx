import { Component, Element, Event, EventEmitter, Prop, PropDidChange } from '@stencil/core';

@Component({
  tag: 'gg-textbox',
  styleUrl: 'gg-textbox.scss'
})
export class ggTextBox {

  @Prop() name: string;
  @Element() el: HTMLElement;
  @Prop({ mutable: true }) value: string;
  @Event() valueChange: EventEmitter;

  // propagate value change from model to view
  @PropDidChange('value')
  valueChanged() {
  	const inputEl = this.el.querySelector('input');
  	// only update if model and view differ
    if (inputEl.value !== this.value) {
      inputEl.value = this.value;
    }
  }

  // propagate value change from view to model
  inputChanged(ev: any) {
    let val = ev.target && ev.target.value;
    this.value = val;
    this.valueChange.emit(this.value);
  }

  render() {
    return (
      <input type="text"
             class="form__input"
             value={this.value}
             onInput={this.inputChanged.bind(this)}>
      </input>
    );
  }
}
