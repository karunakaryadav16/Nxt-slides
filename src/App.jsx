import {Component} from 'react'
import './App.css'
import Header from './components/Header'
import NewButton from './components/NewButton'
import Slides from './components/Slides'

import SlideContext from './Context'

const initialSlidesList = [
  {
    id: 'cc6e1752-a063-11ec-b909-0242ac120002',
    heading: 'Welcome',
    description: 'Karunakar yadav',
  },
  {
    id: 'cc6e1aae-a063-11ec-b909-0242ac120002',
    heading: 'Agenda',
    description: 'Technologies in focus',
  },
  {
    id: 'cc6e1e78-a063-11ec-b909-0242ac120002',
    heading: 'HTML',
    description: 'web page creation',
  },
  {
    id: 'cc6e1fc2-a063-11ec-b909-0242ac120002',
    heading: 'CSS',
    description: 'styling the web page',
  },
  {
    id: 'cc6e20f8-a063-11ec-b909-0242ac120002',
    heading: 'JAVASCRIPT',
    description: 'Dynamic webpage interaction',
  },
  {
    id: 'cc6e2224-a063-11ec-b909-0242ac120002',
    heading: 'NOde js',
    description: 'server-side logic',
  },
  {
    id: 'cc6e233c-a063-11ec-b909-0242ac120002',
    heading: 'React',
    description: 'SPA/MPA',
  },
]

const insert = (arr, index, newItem) => [
  ...arr.slice(0, index),
  newItem,
  ...arr.slice(index),
]

// Replace your code here

class App extends Component {
  state = {
    initialList: initialSlidesList,
    activeIndex: 0,
  }

  changeHeading = value => {
    const {activeIndex} = this.state
    this.setState(prevState => {
      const {initialList} = prevState
      const newList = initialList.map((eachItem, index) => {
        if (activeIndex === index) {
          return {...eachItem, heading: value}
        }
        return eachItem
      })
      return {initialList: newList}
    })
  }

  ChangeDescription = value => {
    const {activeIndex} = this.state
    this.setState(prevState => {
      const {initialList} = prevState
      const newList = initialList.map((eachItem, index) => {
        if (activeIndex === index) {
          return {...eachItem, description: value}
        }
        return eachItem
      })
      return {initialList: newList}
    })
  }

  changeActiveTab = index => {
    this.setState({activeIndex: index})
  }

  addNewItem = item => {
    const {activeIndex} = this.state
    this.setState(prevState => {
      const {initialList} = prevState
      const newList = insert(initialList, activeIndex + 1, item)
      return {initialList: [...newList]}
    })
  }

  render() {
    const {initialList, activeIndex} = this.state
    console.log(activeIndex)
    return (
      <div>
        <Header />
        <SlideContext.Provider
          value={{
            initialList,
            activeIndex,
            changeActiveTab: this.changeActiveTab,
            addNewItem: this.addNewItem,
            changeHeading: this.changeHeading,
            ChangeDescription: this.ChangeDescription,
          }}
        >
          <>
            <NewButton />
            <Slides />
          </>
        </SlideContext.Provider>
      </div>
    )
  }
}

export default App