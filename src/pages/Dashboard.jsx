import { useState } from 'react'
import './Dashboard.css'

function Dashboard() {
    return (
        <>
            <div className='container'>
                <div className='left-container'>
                    <div className='left-header'>

                    </div>
                    <div className='nav-container'>
                        <ul>
                            <li>
                                Dashboard
                            </li>
                            <li>
                                Flowchart
                            </li>
                            <li>
                                Cards
                            </li>
                        </ul>
                    </div>
                </div>
                <div className='right-container'>
                    <div className='right-header-container'>

                    </div>
                    <div className='right-body-container'>
                        <div className='credit-card-container'>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Dashboard
