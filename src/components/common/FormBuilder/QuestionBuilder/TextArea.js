import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import TextAreaInput from 'common/form/TextArea';
import styles from './TextArea.module.css';
import commonStyles from './styles.module.css';

const Textarea = ({
  page,
  title,
  description,
  dataKey,
  required,
  defaultValue,
  value,
  onChange,
  footnote,
  warning,
  validator,
}) => (
  <div>
    <div className={styles.container}>
      <div
        className={cn(
          styles.warnableContainer,
          commonStyles.warnableContainer,
          { [commonStyles.hasWarning]: !!warning },
        )}
      >
        <TextAreaInput
          wrapperClassName={styles.wrapper}
          className={cn(styles.textarea)}
          value={value}
          onChange={e => onChange(e.target.value)}
        />
      </div>
      <p
        className={cn(styles.footnote, commonStyles.warning, {
          [commonStyles.isFill]: !!warning,
        })}
      >
        {warning ||
          (typeof footnote === 'function' ? footnote(value) : footnote)}
      </p>
    </div>
  </div>
);

Textarea.propTypes = {
  page: PropTypes.number.isRequired,
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.func]).isRequired,
  description: PropTypes.string,
  dataKey: PropTypes.string.isRequired,
  required: PropTypes.bool,
  defaultValue: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  footnote: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
  warning: PropTypes.string,
  validator: PropTypes.func,
};

export default Textarea;
