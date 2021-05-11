import React from 'react'
import { CFooter } from '@coreui/react'

const TheFooter = () => {
  return (
    <CFooter fixed={false}>
      <div>
        <span>EBAZZAR</span>
        <span className="ml-1">&copy; 2021 Techling.</span>
      </div>
      <div className="mfs-auto">
        <span className="mr-1">Powered by</span>
        <a href="https://techling.netlify.app/" target="_blank" rel="noopener noreferrer">Techling</a>
      </div>
    </CFooter>
  )
}

export default React.memo(TheFooter)
