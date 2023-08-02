import React, { useEffect, useState } from 'react';
import Loader from '../../Components/Loader/Loader';

const Dashboard = () => {
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/data')
            .then(res => res.json())
            .then(info => {
                setData(info);
                setLoading(false);
            })
    }, [])

    if (loading) {
        return <div className='mt-28'>
            <Loader></Loader>
        </div>
    }

    return (
        <section className='container mx-auto'>
            <h1 className='text-2xl text-center font-semibold my-10'>Total Information: {data.length}</h1>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Intensity</th>
                            <th>Likelihood</th>
                            <th>Relevance</th>
                            <th>Start Year</th>
                            <th>End Year</th>
                            <th>Country</th>
                            <th>Topic</th>
                            <th>Region</th>
                            <th>City</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data.map((d, idx) =>
                                <tr className="hover">
                                    <th>{idx + 1}</th>
                                    <td>{d?.intensity}</td>
                                    <td>{d?.likelihood}</td>
                                    <td>{d?.relevance}</td>
                                    <td>{d?.start_year}</td>
                                    <td>{d?.end_year}</td>
                                    <td>{d?.country}</td>
                                    <td>{d?.topic}</td>
                                    <td>{d?.region}</td>
                                    <td>{d?.city}</td>
                                </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </section>
    );
};

export default Dashboard;