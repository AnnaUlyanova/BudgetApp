import React from 'react'
import { Modal, Button } from 'react-bootstrap'
import { Control, Errors, Form } from 'react-redux-form'

const AddSpendingModal = props => {
  return (
    <Modal show={props.show} onHide={props.close}>
      <Form model='forms.addSpending' onSubmit={props.onSubmit}>
        <Modal.Header closeButton>
          <Modal.Title>Add New Spending</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
            <label>Category</label>
            <Control model='.newCategory' />
          </div>
          <div>
            <label>Amount</label>
            <Control model='.amount' />
          </div>
          <Errors model='forms.addSpending' />
        </Modal.Body>
        <Modal.Footer>
          <Button type='submit'>Add new spending</Button>
        </Modal.Footer>
      </Form>
    </Modal>
  )
}

export default AddSpendingModal
