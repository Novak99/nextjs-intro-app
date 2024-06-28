'use client'

const ErrorUI = ({ error, reset }: { error: Error, reset: () => void }) => {
    console.log('Error bre',error)
  return (
    <div>Ooops, I did it again!!!</div>
  )
}

export default ErrorUI