import React, { useState } from 'react';
import data from './data'
import Categories from './Components/Categories'
import Menu from './Components/Menu'
const allCategorys = ['All',...new Set(data.map(item => item.category))]

function App() {

  const [allMenus,setAllMenus] = useState(data)

  const [categorys,setCategorys] = useState(allCategorys)
  // console.log(allCategorys);
  const filterMenus = (category)=>{
    if (category === 'All'){
      setAllMenus(data)
      return
    }
    let filteredMenus = data.filter(item => item.category === category)
    setAllMenus(filteredMenus)
  }
  return (
    <main>
      <section className="menu section">
        <div className="title">
          <h2>our menu</h2>
          <div className="underline"></div>
        </div>
        <Categories categories={categorys} filterMenus={filterMenus} />
        <Menu allMenus={allMenus} />
      </section>
    </main>
  );
}

export default App;
