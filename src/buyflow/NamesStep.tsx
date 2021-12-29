import React, { ChangeEvent, useState } from 'react'

interface NamesStepProps {
  cb: (field: string, value: string) => void
}

const NamesStep: React.FC<NamesStepProps> = (props) => {
  const [names, setNames] = useState<string>('')

  const handleSubmit = () => {
    props.cb('names', names.trim())
  }

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setNames(e.target.value)
  }

  return (
    <>
      <div>
        Name:{' '}
        <input
          placeholder="Enter your first and last name"
          onChange={handleChange}
          value={names}
        />
      </div>
      <button onClick={handleSubmit}>Next</button>
    </>
  )
}

export default NamesStep
