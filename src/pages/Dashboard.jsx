import './Dashboard.css'

function Dashboard() {
    return (
        <div className='container'>
            <div className='left-container'>
                <div className='left-header'>
                    <div className="logo">Credit Compass</div>
                </div>
                <div className='nav-container'>
                    <ul>
                        <li>Overview</li>
                        <li>Flowchart</li>
                        <li>Cards</li>
                    </ul>
                </div>
            </div>
            <div className='right-container'>
                <div className='right-header-container'>
                    <h1>Dashboard</h1>
                    <p>Get summary of your point totals here.</p>
                </div>
                <div className='right-body-container'>
                    <div className='card-and-stats-wrapper'>
                        <div className='credit-card-section'>
                            <div className='credit-card-container'>
                                <div className='card-details'>
                                    <div className='card-number'>
                                        <p>cloudcash</p>
                                        <span>5789 **** **** 2847</span>
                                    </div>
                                    <p className='card-holder'>Cardholder: Mike Smith</p>
                                    <p className='expiry'>Expires: 06/21</p>
                                </div>
                            </div>
                            <div className='progress-container'>
                                <p>Quarterly Point Limit</p>
                                <div className='progress-bar'>
                                    <div className='progress-fill' style={{ width: '3.56%' }}></div>
                                </div>
                                <span>2850 / 80000</span>
                            </div>
                        </div>
                        <div className='stats'>
                            <h2>2850</h2>
                            <p>Current Points</p>
                            <div className='income'>
                                <p>Income</p>
                                <span className="income-text">$1500.50</span>
                            </div>
                            <div className='outcome'>
                                <p>Outcome</p>
                                <span className="outcome-text">$350.60</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Dashboard;
