import React, { Component } from 'react'
import classNames from 'classnames'

export class ButtonContinue extends Component {
  /**
   * Render method for ButtonContinue component
   * @returns {*}
   */
  render() {
    const { status, type } = this.props
    const submitButtonClass = classNames('button', 'button_fill', 'button_no_border', {
      button_disabled: !status
    })

    return (
      <button type={type} disabled={!status} className={submitButtonClass}>
        Continue
      </button>
    )
  }
}