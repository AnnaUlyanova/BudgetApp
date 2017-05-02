import React from 'react'

import { Modal, Button, ControlLabel, FormControl } from 'react-bootstrap'

import ExpensesSpreadSheet from './ExpensesSpreadSheet'
import AddCategoryButton from './AddCategoryButton'
import AddSpendingButton from './AddSpendingButton'
import AddSpendingModal from './AddSpendingModal'

export default React.createClass({

  getInitialState() {
    return {
      showAddSpending: false,
      showAddCategory: false,
      input: {} };
  },

  closeSpending() {
    this.setState({
      showAddSpending: false,
      });
  },

  openSpending() {
    this.setState({
      showAddSpending: true });
  },

  closeCategory() {
    this.setState({
      showAddCategory: false,
      });
  },

  openCategory() {
    this.setState({
      showAddCategory: true });
  },

  updateCategory(event) {
    this.setState({category: event.target.value})
    console.log(event.target.value)
  },

  render() {
    return (
      <div>
        <h1>My Daily Expenses</h1>
        <div>
          <ExpensesSpreadSheet />

          <Button onClick={this.openSpending}>Add Spending</Button>

          <Modal show={this.state.showAddSpending} onHide={this.closeSpending}>
            <Modal.Header closeButton>
              <Modal.Title>Add New Spending</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <div>
                <ControlLabel>Category</ControlLabel>
                  <FormControl componentClass="select" placeholder="category">
                   <option value="category 1">Category 1</option>
                   <option value="category 2">Category 2</option>
                 </FormControl>
              </div>
              <div>
                <ControlLabel>Amount</ControlLabel>
                <FormControl model='.amount' />
              </div>
            </Modal.Body>
            <Modal.Footer>
              <Button onClick={this.closeSpending}>Close</Button>
              <Button type='submit'>Add new spending</Button>
            </Modal.Footer>
          </Modal>

          <Button onClick={this.openCategory}>Add Category</Button>
            <Modal show={this.state.showAddCategory} onHide={this.closeCategory}>
              <div>
                <Modal.Header closeButton>
                  <Modal.Title>Add New Category</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <div>
                    <ControlLabel>Category: </ControlLabel>
                    <input name='newCategory' onChange={this.updateCategory}/>
                  </div>
                </Modal.Body>
                <Modal.Footer>
                  <Button onClick={this.closeCategory}>Close</Button>
                  <Button onClick={() => this.props.addNewCategory(this.state.category)} type='submit'>Add new category</Button>
                </Modal.Footer>
              </div>
            </Modal>

        </div>
      </div>
    );
  }
})
