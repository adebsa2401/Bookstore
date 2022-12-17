import React from 'react';
import PropTypes from 'prop-types';

export default function List({ children, separator, className }) {
  return (
    <ul className={className}>
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

List.propTypes = {
  children: PropTypes.node.isRequired,
  separator: PropTypes.node,
  className: PropTypes.string,
};

List.defaultProps = {
  separator: null,
  className: '',
};
