import { css, html, LitElement } from 'lit';
import { property } from 'lit/decorators.js';

export default class EditorPlugin extends LitElement {
  /** The document being edited as provided to plugins by [[`open-scd-core`]]. */
  @property({ attribute: false })
  doc!: XMLDocument;

  /** doc change indicator */
  @property({ type: Number })
  editCount = -1;

  render() {
    return html``;
  }

  static styles = css``;
}
