const pool = require("../database/db.js");


// Get all customers
const getAllCustomers = async (req, res) => {
    try {
        const allCust = await pool.query('SELECT * FROM customer');
        res.status(200).json(allCust.rows)
    } catch (err) {
        res.status(400).json({error: err.message})
    }
}


// Get a single customer
const getCustomer = async(req, res) => {
    try {
        const { cust_id } = req.params;
        const cust = await pool.query('SELECT * FROM customer WHERE cust_id = $1', [cust_id])
        
        res.status(200).json(cust.rows[0]);
    } catch (err) {
        res.status(400).json({error: err.message})
    }
}


// Create a customer
const createCustomer = async (req, res) => {
    try {
        const { date_created, cust_name } = req.body;
        const newCust = await pool.query('INSERT INTO customer (date_created, cust_name) VALUES($1, $2) RETURNING *',
        [date_created, cust_name]
        );

        res.status(200).json(newCust.rows[0]);
    } catch (err) {
        res.status(400).json({error: err.message})
    }
}


// Update a customer
const updateCustomer = async(req, res) => {
    try {
        const { cust_id } = req.params;
        const { cust_name } = req.body;
        const updateCust = await pool.query(
            'UPDATE customer SET cust_name = $1 WHERE cust_id = $2', 
            [cust_name, cust_id]
        );

        res.status(200).json('Customer name was updated');
    } catch (err) {
        res.status(400).json({error: err.message})
    }
}


// Delete a customer
const deleteCustomer = async(req, res) => {
    try {
        const { cust_id } = req.params;
        const deleteCust = await pool.query('DELETE FROM customer WHERE cust_id = $1', 
        [cust_id]);
        res.status(200).json('Customer was deleted');
    } catch (err) {
        res.status(400).json({error: err.message})
    }
}


module.exports = {
    createCustomer,
    getAllCustomers,
    getCustomer,
    updateCustomer,
    deleteCustomer,
}