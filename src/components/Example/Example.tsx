import React, { useEffect } from 'react'
import PropTypes from 'prop-types'

const Example = props => {
    console.log(1)

    useEffect(() => {
        console.log(2)
        return () => {
            console.log(3)
        }
    }, [])

    setTimeout(() => {
        console.log(4)
    }, 100);

    console.log(6)
  return (
    <>
    {console.log(5)}
        <div>Example</div>
    </>
  )
}

Example.propTypes = {}

export default Example