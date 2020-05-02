import React from 'react';

import Search from './components/search/Search'
import Filter from './components/filter/Filter'
import ArticlesGrid from './components/articles-grid/ArticlesGrid'
import Footer from './components/footer/Footer'

import s from './App.module.css';

function App() {
  return (
    <div className={s.App}>
        <Search />
        <Filter></Filter>
        <ArticlesGrid></ArticlesGrid>
        <Footer></Footer>

    </div>
  );
}

export default App;
