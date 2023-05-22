import React, { useEffect, useState } from 'react';

//Components
import CustomerDetails from '../components/CustomersDetails'

const Home = () => {
    const [customers, setCustomers] = useState(null)

    useEffect(() => {
        const fetchCustomers = async () => {
            const response = await fetch('http://localhost:4000/api/customers');
            const json = await response.json();

            console.log(json)

            if (response.ok) {
                setCustomers(json);
                console.log(json);
            }
        };

        fetchCustomers()
    }, []);

    return (
        <div className="home">
            <div className="customers">
                {customers && customers.map((customer) => (
                    <CustomerDetails key={customer.cust_id} customer={customer} />
                    //<p key={customer.cust_id}>{customer.cust_name}</p>
                ))}
            </div>
        </div>
    )
}

export default Home