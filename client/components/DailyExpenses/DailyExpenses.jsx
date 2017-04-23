import React from 'react'

import { Modal, Button, ControlLabel, FormControl } from 'react-bootstrap'

import ExpensesSpreadSheet from './ExpensesSpreadSheet'
import AddCategoryButton from './AddCategoryButton'
import AddSpendingButton from './AddSpendingButton'
import AddSpendingModal from './AddSpendingModal'

export default React.createClass({

  getInitialState() {
    return { showModal: false };
  },

  close() {
    this.setState({ showModal: false });
  },

  open() {
    this.setState({ showModal: true });
  },

  render() {
    return (
      <div>
        <h1>My Daily Expenses</h1>
        <div>
          <ExpensesSpreadSheet />
          <Button onClick={this.open}>Add Spending</Button>
            <Modal show={this.state.showModal} onHide={this.close}>
              <Modal.Header closeButton>
                <Modal.Title>Add New Spending</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <div>
                  <ControlLabel>Category</ControlLabel>
                  <FormControl model='.newCategory' />
                </div>
                <div>
                  <ControlLabel>Amount</ControlLabel>
                  <FormControl model='.amount' />
                </div>
              </Modal.Body>
              <Modal.Footer>
                <Button onClick={this.close}>Close</Button>
                <Button type='submit'>Add new spending</Button>
              </Modal.Footer>
            </Modal>
        </div>
      </div>
    );
  }
})
