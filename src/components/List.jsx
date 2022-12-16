import React from 'react';
import PropTypes from 'prop-types';

export default class List extends React.PureComponent {
  render() {
    const { children, separator, ...props } = this.props;

    return (
      // eslint-disable-next-line react/jsx-props-no-spreading
      <ul {...props}>
        {React.Children.map(children, (child, index) => (
          <>
            <li key={child.key}>
              {child}
            </li>
            {index < children.length - 1 && separator ? separator : null}
          </>
        ))}
      </ul>
    );
  }
}

List.propTypes = {
  children: PropTypes.node.isRequired,
  separator: PropTypes.node,
};

List.defaultProps = {
  separator: null,
};