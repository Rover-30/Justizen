import React from 'react'
import { MdComputer } from 'react-icons/md'

const Thinking = () => {
  return (
    <div className='message'>
      <div className='message__wrapper flex'>
        <div className="message__pic">
          <MdComputer />
        </div>
        <div className='text-left message__createdAt'>
          <div className="message__thinking">
          Nothing is an offence which is done by a person who, at the time of doing it, by reason of unsoundness of mind, is incapable of knowing the nature of the act, or that he is doing what is either wrong or contrary to law.          </div>
        </div>
      </div>
    </div>
  )
}

export default Thinking