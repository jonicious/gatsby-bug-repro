import React from "react"
import PropTypes from 'prop-types';

const _MyComponent = ({ children, name }) => (
  <div>{children} {name}</div>
)

_MyComponent.propTypes = {
  children: PropTypes.node
}

export default () => <_MyComponent>Hello World</_MyComponent>
