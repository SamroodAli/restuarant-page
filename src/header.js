import {header,nav,ul,li,a} from './tags'


const navLinks = [
  li(a('hello world'))
]

const pageHeader = () => {
  return header(
    [
      nav(
        ul(
          navLinks
        )
      )
    ],"bg-primary"
  )
}

export default pageHeader
