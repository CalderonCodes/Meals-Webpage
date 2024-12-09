import Link from 'next/link'
import React from 'react'
Link
function Meals() {
  return (
    <div>
        <h1>
            Meals
        </h1>
        <p>
        <Link href={'/meals/share'}>Share</Link>
      </p>
      <p>
        <Link href={'/meals/pupusas'}>Pupusas</Link>
      </p>
    </div>
  )
}

export default Meals