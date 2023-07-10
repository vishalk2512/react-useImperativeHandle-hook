import { forwardRef, useImperativeHandle, useRef } from 'react'

const Model = ({ isOpen, setIsOpen }, ref) => {
  const yesRef = useRef()
  const noRef = useRef()

  useImperativeHandle(
    ref,
    () => {
      return {
        yesFocus: () => yesRef.current.focus(),
        noFocus: () => noRef.current.focus(),
      }
    },
    []
  )

  return (
    <div
      className='model'
      style={{ display: isOpen ? 'block' : 'none' }}
      ref={ref}
    >
      <p>Are you Happy?</p>
      <button ref={yesRef} onClick={() => setIsOpen(false)}>
        Yes
      </button>
      <button ref={noRef} onClick={() => setIsOpen(false)}>
        No
      </button>
    </div>
  )
}
export default forwardRef(Model)
