import React, { useState, useEffect } from 'react';

const Placement = ({ userRole = 'student' }) => {
    const [placementUpdates, setPlacementUpdates] = useState([]);
    const [formData, setFormData] = useState({
        companyName: '',
        jobDescription: '',
        file: null,
    });
    const [loading, setLoading] = useState(true);
    const [submissionStatus, setSubmissionStatus] = useState(null);

    // Fetch placement updates only for students
    useEffect(() => {
        if (userRole === 'student') {
            const fetchUpdates = async () => {
                setLoading(true);
                try {
                    const response = await fetch('/api/placement-updates');
                    const data = await response.json();
                    setPlacementUpdates(data);
                } catch (error) {
                    console.error('Error fetching placement updates:', error);
                } finally {
                    setLoading(false);
                }
            };
            fetchUpdates();
        }
    }, [userRole]);

    const handleChange = (e) => {
        const { name, value, files } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: files ? files[0] : value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const dataToSend = new FormData();
        dataToSend.append('companyName', formData.companyName);
        dataToSend.append('jobDescription', formData.jobDescription);
        dataToSend.append('file', formData.file);

        try {
            const response = await fetch('/api/submit-placement', {
                method: 'POST',
                body: dataToSend,
            });

            if (!response.ok) {
                throw new Error('Failed to submit placement details');
            }

            setSubmissionStatus('success');
            setFormData({ companyName: '', jobDescription: '', file: null });
        } catch (error) {
            console.error(error);
            setSubmissionStatus('error');
        }
    };

    return (
        <div className="min-h-screen p-8 bg-gray-100 dark:bg-gray-900 transition duration-300">
            <div className="container mx-auto bg-white dark:bg-gray-800 rounded-lg shadow-xl p-8">
                {userRole === 'student' ? (
                    <div>
                        <h2 className="text-3xl font-bold mb-6 text-gray-800 dark:text-white">Placement Updates</h2>
                        {loading ? (
                            <p className="text-gray-600 dark:text-gray-400">Loading updates...</p>
                        ) : placementUpdates.length > 0 ? (
                            placementUpdates.map((update) => (
                                <div key={update.id} className="mb-4 p-4 border border-gray-300 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600">
                                    <h3 className="text-xl font-semibold text-gray-700 dark:text-gray-200">{update.companyName}</h3>
                                    <p className="text-gray-600 dark:text-gray-400">{update.jobDescription}</p>
                                    <a href={update.fileUrl} download className="mt-2 inline-block text-blue-600 dark:text-blue-400 hover:underline">
                                        Download File
                                    </a>
                                </div>
                            ))
                        ) : (
                            <p className="text-gray-600 dark:text-gray-400">Currently, there are no placement updates available.</p>
                        )}
                    </div>
                ) : (
                    <form onSubmit={handleSubmit} className="bg-gray-50 dark:bg-gray-700 rounded-lg shadow-md p-8">
                        <h2 className="text-3xl font-bold mb-6 text-gray-800 dark:text-white">Submit Placement Details</h2>
                        {submissionStatus === 'success' && <p className="text-green-600">Placement details submitted successfully!</p>}
                        {submissionStatus === 'error' && <p className="text-red-600">Failed to submit placement details. Please try again.</p>}
                        
                        <div className="mb-4">
                            <label htmlFor="companyName" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Company Name</label>
                            <input
                                type="text"
                                id="companyName"
                                name="companyName"
                                value={formData.companyName}
                                onChange={handleChange}
                                required
                                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-800 dark:text-white transition duration-200"
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="jobDescription" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Job Description</label>
                            <textarea
                                id="jobDescription"
                                name="jobDescription"
                                value={formData.jobDescription}
                                onChange={handleChange}
                                required
                                rows="4"
                                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-800 dark:text-white transition duration-200"
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="file" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Upload File</label>
                            <input
                                type="file"
                                id="file"
                                name="file"
                                onChange={handleChange}
                                required
                                className="border border-gray-300 rounded-lg py-2 px-3 dark:border-gray-600 dark:bg-gray-800 dark:text-white transition duration-200"
                            />
                        </div>
                        <button type="submit" className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-400 transition duration-200">
                            Submit
                        </button>
                    </form>
                )}
            </div>
        </div>
    );
};

export default Placement;
