import React from 'react';
import { listData } from '../../lib/data';
import Card from '../card/Card';

const List = () => {
  return (
    <div>
      {listData.map((item) => (
        <Card key={item.id} item={item} />
      ))}
    </div>
  );
};

export default List;
