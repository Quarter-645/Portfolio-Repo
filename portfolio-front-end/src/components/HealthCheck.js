import React, { useEffect, useState } from 'react';
import { health } from '../api/health';

function HealthCheck() {
    const [healthStatus, setHealthStatus] = useState(null);

    useEffect(() => {
        const checkHealth = async () => {
            try {
                const result = await health();
                setHealthStatus(result);
            } catch (error) {
                setHealthStatus('API is not supported');
            }
        };

        checkHealth();
    }, []);

    return (
        <div className={`flex items-center justify-center p-4 transform transition-transform duration-1000 `}>
            <div className="bg-grey py-4 px-6 rounded-lg shadow-lg flex flex-col lg:flex-row items-center max-w-full md:max-w-6xl">
                <h2 className="text-xl text-center text-white mb-4">Health Check</h2>
                <div className="text-white">
                    {healthStatus ? (
                        <pre>{JSON.stringify(healthStatus, null, 2)}</pre>
                    ) : (
                        'Checking API health...'
                    )}
                </div>
            </div>
        </div>
    );
}

export default HealthCheck;
