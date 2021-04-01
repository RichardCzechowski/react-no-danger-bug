import React from 'react'
import styled from 'styled-components'

const StyledDiv = styled.div``

// Uncomment this one and comment the one below to see error

// export const App = ()=>{
//     return <div
//         dangerouslySetInnerHTML={{__html: 'foo'}}  // This will be detected
//     ></div>
// }
export const App = ()=>{
    return <StyledDiv
        dangerouslySetInnerHTML={{__html: 'foo'}}  // This will not be detected
    ></StyledDiv>
}

export default App;
