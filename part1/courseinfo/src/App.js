// exercise 1.1.-1.2.
// exercise1.1. Header takes care of rendering the name of the course
const Header = (props) => {
  console.log(props)  
  return (
    <div>
      <p>{props.course}</p>
    </div>
  )
}

/** 
// exercise 1.1. Content renders the parts and their number of exercises
const Content = (props) => {
  console.log(props)
  const {myList} = props

  return (
    <div>
      <p>{myList[0].part}, {myList[0].num_of_ex}</p>
      <p>{myList[1].part}, {myList[1].num_of_ex}</p>
      <p>{myList[2].part}, {myList[2].num_of_ex}</p>
    </div>
  )
}
*/

// exercise 1.2. Refactor Content component which only renders three Part 
// components of which each renders the name and number of exercises of one part

const Content = (props) => {
  console.log(props)
  const {myList} = props

  const Part = (props) => {
    return (
      <div>
        <p>{props.part}, {props.num_of_ex}</p>
      </div>
    )
  }
  return (
    <div>
      <Part part={myList[0].part} num_of_ex={myList[0].num_of_ex}/>
      <Part part={myList[1].part} num_of_ex={myList[1].num_of_ex}/>
      <Part part={myList[2].part} num_of_ex={myList[2].num_of_ex}/>
    </div>
  )
}
// exercise 1.1. Total renders the total number of exercises
const Tool = (props) => {
  console.log(props)
  const {myList} = props

  return (
    <div>
      <p>{myList[0].num_of_ex + myList[1].num_of_ex + myList[2].num_of_ex}</p>
    </div>
  )
}

const App = () => {
  // const-definitions
  const course = 'Half Stack application development'
  const myList=[
    {part: 'Fundamentals of React', num_of_ex: 10},
    {part: 'Using props to pass data', num_of_ex: 7},
    {part: 'State of a component', num_of_ex: 14}]
    
  return (
    <div>
      <Header course={course}/>
      <Content myList={myList}/>
      <Tool myList={myList}/>
    </div>
  )
}

export default App
