import { useEffect, useState } from 'react'
import { fetchDataFromAPI } from './utils/api'
import { useDispatch,useSelector } from 'react-redux'
import { getApiConfiguration } from './store/homeSlice';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Home from './pages/home/Home';
import SearchResult from './pages/searchResult/SearchResult';
import Details from './pages/details/Details';
import Explore from './pages/explore/Explore';
import PageNotFound from './pages/404/PageNotFound'
function App() {
  const dispatch = useDispatch();
  const url = useSelector((state)=>state.home);
  console.log(url)
  useEffect(()=>{
    apiTesting();
  },[])
  const apiTesting = () => {
    fetchDataFromAPI('/movie/popular')
    .then((res)=>{
      console.log(res);
      dispatch(getApiConfiguration(res))
    })
  }
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home />}></Route>
      <Route path='/:mediaType/:id' element={<Details />}></Route>
      <Route path='/search/:query' element={<SearchResult />}></Route>
      <Route path='/explore/:mediaType' element={<Explore />}></Route>
      <Route path='*' element={<PageNotFound />}></Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App
