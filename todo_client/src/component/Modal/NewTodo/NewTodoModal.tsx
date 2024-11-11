import React from 'react'
import ReactModal from 'react-modal'
import { MyReactModal } from '../Login/LoginJoinModalStyle.tsx'
import NewTodoInputComponent from './NewTodoInputComponent.tsx'

function NewTodoModal() {
  return (
    <ReactModal
    isOpen={true}
    style={MyReactModal}
    shouldCloseOnOverlayClick={true}
    >
      <NewTodoInputComponent/>
    </ReactModal>
  )
}

export default NewTodoModal