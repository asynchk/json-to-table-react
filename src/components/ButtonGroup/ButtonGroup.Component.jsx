import React from 'react';
import { Button } from 'semantic-ui-react';
import PropTypes from 'prop-types';

const ButtonGroup = ({ onReset, onSubmit }) => (
  <Button.Group>
    <Button
      content="Reset"
      icon="refresh"
      onClick={onReset}
    />
    <Button
      content="Submit"
      icon="angle double right"
      onClick={onSubmit}
    />
  </Button.Group>
);

ButtonGroup.propTypes = {
  onReset: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default ButtonGroup;
