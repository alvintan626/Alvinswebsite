import Enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

Enzyme.configure({adapter: new Adapter()})


/* Enzyme Api - airbnb.io/enzyme
static : render the given component and return plain HTML
shallow: render 'just' the given component and none of its children
full DOM:  render the component and all of its children + allowed to modify afterwards

*/ 