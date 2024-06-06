import React from 'react';
import ShopItemFunc from './ShopItemFunc';
import ShopItemClass from './ShopItemClass';

const ContainerFunc = ({item, type}) => {
  return (
    <div className="container">
      <div className="background-element"></div>
      <div className="highlight-window">
        <div className='highlight-overlay'></div>
      </div>
      <div className="window">
        {type === 'Class' ? <ShopItemClass item={item} /> : <ShopItemFunc item={item} />}
      </div>
    </div>
  );
}

export default ContainerFunc;