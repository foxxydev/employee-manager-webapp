import React from 'react';
import InputComponent from "./InputComponent"

const Dashboard = (props) => {
    return (
        <div>
            <InputComponent {...props}/>
        </div>
    );
};

export default Dashboard;