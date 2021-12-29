import React, { useState } from 'react'

interface EmailStepProps {
  cb: (field: string, value: string) => void
}

const EmailStep: React.FC<EmailStepProps> = (props) => {
  const [email, setEmail] = useState('')
  return (
    <>
      <div>
        Email:{' '}
        <input
          type="email"
          placeholder="Enter your email"
          onChange={({ target: { value } }) => {
            setEmail(value)
          }}
          value={email}
        />
      </div>
      <button onClick={() => props.cb('email', email)}>Next</button>
    </>
  )
}

export default EmailStep
