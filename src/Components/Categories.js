import React, { useState } from "react";

const Categories = ({categories,filterMenus}) => {
  const [mainCategory,setMainCategory] = useState('All')
  return (
    <div className="btn-container">
      {categories.map((item,index) => (
              <button
              key={index}
              type="button"
              className={item === mainCategory ? 'filter-btn highlight' : 'filter-btn'}
              onClick={()=>{
                setMainCategory(item)
                filterMenus(item)
              }}
            >
              {item}
            </button>
      ))}

    </div>
  );
};

export default Categories;
