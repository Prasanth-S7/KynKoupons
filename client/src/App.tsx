import './App.css'
import Dashboard from './pages/dashboard'
import { Route, BrowserRouter, Routes } from 'react-router-dom'
import { DashboardComponent } from './components/custom/dashboard'
import { AchievementsComponent } from './components/custom/achivementsComponent'
import { LeaderboardComponent } from './components/custom/leaderboardComponent'
import { LevelsComponent } from './components/custom/levelsComponent'
import { TitlesComponent } from './components/custom/titlesComponent'
import { CouponsComponent } from './components/custom/couponsComponent'
function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Dashboard MainComponent={DashboardComponent} />}></Route>
        <Route path='/insights' element={<Dashboard MainComponent={<DashboardComponent />} />}></Route>
        <Route path='/reports' element={<Dashboard MainComponent={<DashboardComponent />} />}></Route>
        <Route path='/create-coupon' element={<Dashboard MainComponent={CouponsComponent} />}></Route>
        <Route path='/achievements' element={<Dashboard MainComponent={AchievementsComponent} />}></Route>
        <Route path='/titles' element={<Dashboard MainComponent={TitlesComponent} />}></Route>
        <Route path='/levels' element={<Dashboard MainComponent={LevelsComponent} />}></Route>
        <Route path='/leaderboard' element={<Dashboard MainComponent={LeaderboardComponent} />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
