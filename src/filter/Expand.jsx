import React, {
  useState,
} from 'react';
import classNames from 'classnames/bind';
import Inline from './Inline';
import selectData from './mock-select.js';
import {
  withDisclosureManager,
} from '../disclosure-manager';

import styles from './Expand.module.scss';

const cx = classNames.bind(styles);

const Expand = ({ disclosureManager }) => {
  const [selectedKeys, setSelectedKeys] = useState([]);

  const onClose = (event, keys) => {
    // const keys = metaArray.map((metaData) => {
    //   return metaData.key;
    // })
    setSelectedKeys(keys);
  };

  return (
    <button
      aria-haspopup
      tabIndex="0"
      role="select"
      className={cx('frame')}
      onClick={() => {
        disclosureManager.disclose({
          preferredType: 'modal',
          dimensions: { height: '420', width: '640' },
          content: {
            key: 'magic-muffin-filter',
            component: <Inline onChange={onClose} data={selectData} selected={selectedKeys} />,
          },
        });
      }}
    >
      <div
        className={cx('display')}
      >
        {selectedKeys.join(' ')}
      </div>
      <div className={cx('arrow-icon')} />
    </button>
  );
};

export default withDisclosureManager(Expand);
