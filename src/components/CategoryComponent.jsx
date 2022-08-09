import React, { useState } from 'react';

function Category() {
  const [activeIndex, setActiveIndex] = useState(1);

  const categories = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые', 'Другое'];

  const OnClickCategory = (index) => {
    setActiveIndex(index);
  };

  return (
    <div className="categories">
      <ul>
        {categories.map((value, i) => (
          <li
            key={i}
            onClick={() => OnClickCategory(i)}
            className={activeIndex === i ? 'active' : 'passive'}>
            {value}
          </li>
        ))}
      </ul>
    </div>
  );
}
export default Category;
