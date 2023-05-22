const express = require('express')
const {
    createCustomer, 
    getAllCustomers, 
    getCustomer, 
    deleteCustomer, 
    updateCustomer,
} = require('../controllers/customerController')

const router = express.Router()


// CUSTOMER ROUTES

// Create a new customer
router.post('/', createCustomer);
// Get all customers
router.get('/', getAllCustomers);
// Get a single customer
router.get('/:cust_id', getCustomer);
// Update a customer
router.put('/:cust_id', updateCustomer);
// Delete a customer
router.delete('/:cust_id', deleteCustomer);


module.exports = router