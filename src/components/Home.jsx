import Landing from "./Landing"
import Form from "./Form"
import Thanks from "./Thanks"
import Error from "./Error"

const Home = (props) => {
  // Most all of your work for this lab will be done here in the HomePage component.

  // Set up conditional rendering below to determine which component to show on our home page!

  let comp

  switch (props.currentPage) {
    case 0:
      comp = <Landing incrementPage={props.incrementPage}/>
      break
    case 1:
      comp = <Form name={props.name} email={props.email} age={props.age} handleChange={props.handleChange} incrementPage={props.incrementPage} />;
      break
    case 2:
      console.log(props.age)
      if (parseInt(props.age) >= 18) {
        comp = <Thanks />
      } else {
        comp = <Error />
      }
      break
    default:
      comp = <h1>Something went wrong!</h1>
  }

  return (
    <div className="home">
      {/* We'll want to render some component here based on a condition that we determine above! */}
      { comp }
    </div>
  )
}

export default Home
