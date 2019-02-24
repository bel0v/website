import ReactRough from 'react-rough'
import React, { Component } from 'react'
import styled from 'styled-components'
const Relative = styled('div')`
  position: relative;
`

const Overlay = styled('div')`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
`

// const colorize = (rough) => {
//   rough.fill = 'green'
//   rough.strokeWidth = 0.5
//   rough.stroke = 'rgba(0,0,0,0.1)'
// }

// const animate = (rough) => {
//   setInterval(() => rough.requestDraw(), 200)
// }

export class Rough extends Component {
  componentDidMount() {
    const { isAnimated } = this.props
    if (isAnimated) {
      this.raf = requestAnimationFrame(this.redraw)
    }
  }

  componentWillUnmount() {
    this.raf && cancelAnimationFrame(this.raf)
  }
  reactRough = React.createRef()

  redraw = () => {
    // console.log(this.reactRough.current)
    // this.reactRough.current.redraw()
    // this.raf = requestAnimationFrame(this.redraw)
  }

  render() {
    const dimensions = this.container && {
      width: this.container.clientWidth,
      height: this.container.clientHeight,
    }
    return (
      <Relative ref={(node) => (this.container = node)}>
        <Overlay>
          {dimensions && (
            <ReactRough
              width={dimensions.width + 4}
              height={dimensions.height + 4}
              ref={this.reactRough}
            >
              <ReactRough.Rectangle
                roughness={0.5}
                points={[1, 1, dimensions.width - 1, dimensions.height - 1]}
              />
            </ReactRough>
          )}
        </Overlay>
        {this.props.children}
      </Relative>
    )
  }
}

//   <ReactRough width={200} height={400}>
// </ReactRough>
