import { Component, Element, Event, EventEmitter, Prop, PropDidChange } from '@stencil/core';

@Component({
  tag: 'ggc-textbox',
  styleUrl: 'ggc-textbox.scss'
})
export class ggcTextBox {

  @Prop() name: string;
  @Prop() label: string;
  @Prop() placeholder: string;
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
      <div class="form__element">
        <label class="form__label" htmlFor={this.name}>{ this.label }</label>
        <input type="text"
               class="form__input"
               id={this.name}
               name={this.name}
               value={this.value}
               placeholder={ this.placeholder }
               onInput={this.inputChanged.bind(this)}>
        </input>
      </div>
    );
  }
}
