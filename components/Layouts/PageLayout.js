import {Header} from '../Header'


export const PageLayout = (props) => (
  <div>
    <Header />
    {props.children}
  </div>
)
