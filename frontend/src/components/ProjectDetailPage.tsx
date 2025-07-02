import React from 'react';
import { useParams } from 'react-router-dom';

// Project data - in a real app, this would come from an API or database
const projectsData = {
    neuromove: {
        title: 'NeuroMove - Solving Parkinson\'s',
        description: 'Our 2024-25 Flagship Project developing a solution for Parkinson\'s patients using neural implant data and cortex-level information.',
        longDescription: `NeuronMove is a groundbreaking initiative and the first-ever project at the University of Toronto Engineering Society aimed at developing a solution for patients suffering from Parkinson's disease. This pioneering project seeks to address the debilitating tremors and movement initiation difficulties experienced by Parkinson's patients by leveraging neural implant data and cortex-level information.

The project brings together undergraduate engineering students and leading research institutions such as the CRANIA Neuromodulation Institute, Krembil Centre for NeuroInformatics, CAMH, Kite UHN, and the University of Toronto Institute of Medical Science in a first-of-its-kind collaboration within the U of T engineering community.

The project begins with extensive scoping and framing, followed by the design and development of both hardware and software systems. Key components include EEG headsets from OpenBCI and NeuroSky, a Cyton Biosensing Board from OpenBCI, and a deep learning model built with machine learning frameworks like TensorFlow and PyTorch to accurately classify tremor events. The system will interact with a bioprosthetic arm to stabilize and assist patients during tremor episodes, helping them regain control of their movement.

By combining cutting-edge technology with real-world insights from healthcare professionals and Parkinson's patients, NeuronMove aims to deliver a transformative solution that can significantly improve the quality of life for those living with Parkinson's disease. This project sets a precedent for future undergraduate-led neurotechnology innovations and will eventually transition into clinical trials with partner hospitals.`,
        tags: ['EEG', 'Machine Learning', 'Neuroscience'],
        team: ['CRANIA Neuromodulation Institute', 'Krembil Centre for NeuroInformatics', 'CAMH', 'Kite UHN', 'University of Toronto Institute of Medical Science'],
        status: 'In Progress',
        startDate: 'January 2024',
        expectedCompletion: 'December 2025'
    },
    bioprosthetic: {
        title: 'NTUT Bioprosthetic Arm',
        description: '2023-24 Flagship Project: A robotic prosthetic arm controlled by EEG brain signals for intuitive movement control.',
        longDescription: `Neurotech UofT designed a robotic prosthetic arm that could move in flexion and contraction, controlled by EEG brain signals. The project aimed to provide a more intuitive interface for users by allowing them to control the arm with their brain activity, mimicking natural movements. The system used real-time EEG data to detect the user's intention to move, offering a promising solution for individuals with upper limb disabilities.`,
        tags: ['EEG', 'Robotics', 'Rehabilitation'],
        team: ['NeurotechUofT Research Team'],
        status: 'Completed',
        startDate: 'September 2023',
        expectedCompletion: 'April 2024'
    },
    mindtype: {
        title: 'MindType',
        description: 'A mind-controlled keyboard using imagined sign language gestures for efficient character selection.',
        longDescription: `MindType is a mind-controlled keyboard designed for individuals with neuromuscular degeneration. Unlike current systems that require multiple actions to select a character, MindType uses imagined sign language gestures to directly select characters in a single operation. By simplifying the process, this project significantly increases typing speed and efficiency, providing a potential breakthrough in communication tools for people with limited mobility.`,
        tags: ['EEG', 'Accessibility', 'Communication'],
        team: ['NeurotechUofT Accessibility Team'],
        status: 'In Development',
        startDate: 'May 2023',
        expectedCompletion: 'August 2024'
    },
    walleeg: {
        title: 'WallEEG',
        description: 'A mind-controlled quidditch robot developed as part of Neurotech UofT\'s interdisciplinary approach to neurotechnology.',
        longDescription: `WallEEG is a mind-controlled quidditch robot developed as part of Neurotech UofT's interdisciplinary approach to neurotechnology. This project integrates concepts from electrical engineering, computer science, neuroscience, and mathematics to create a robot controlled entirely by EEG signals. Participants can control the robot using their brainwaves, showcasing the potential for neurotechnology applications in gaming and robotics. This project was a submission for Part 2 of the NeuroTechX Student Competition.`,
        tags: ['EEG', 'Robotics', 'Gaming'],
        team: ['NeurotechUofT Competition Team'],
        status: 'Completed',
        startDate: 'January 2023',
        expectedCompletion: 'April 2023'
    },
    headset: {
        title: 'Headset',
        description: 'A comfortable, easy-to-use EEG headset tailored for researchers and users.',
        longDescription: `The Headset project aimed to create a comfortable, easy-to-use EEG headset tailored for researchers and users. Developed for integration with the OpenBCI board, the project focused on improving signal quality and wearability, allowing for more accurate data collection and enhancing user comfort during prolonged sessions. This work was driven by the need for accessible EEG technology in research and practical applications in neurotechnology.`,
        tags: ['EEG', 'Hardware', 'Research'],
        team: ['NeurotechUofT Hardware Team'],
        status: 'Completed',
        startDate: 'September 2022',
        expectedCompletion: 'December 2022'
    },
    neurostack: {
        title: 'Neurostack',
        description: 'An open-source, real-time EEG processing service hosted on the cloud.',
        longDescription: `Neurostack is an open-source, real-time EEG processing service hosted on the cloud. Designed to simplify the development of neurotech applications, this project allows users to easily collect and process EEG data. By offering a user-friendly platform, Neurostack empowers developers and researchers to create innovative neurotechnology solutions, reducing the complexity of EEG data handling and fostering the growth of the neurotech ecosystem.`,
        tags: ['EEG', 'Cloud Computing', 'Open Source'],
        team: ['NeurotechUofT Software Team'],
        status: 'Completed',
        startDate: 'May 2022',
        expectedCompletion: 'August 2022'
    }
};

const ProjectDetailPage: React.FC = () => {
    const { projectId } = useParams<{ projectId: string }>();
    const project = projectId ? projectsData[projectId as keyof typeof projectsData] : null;

    if (!project) {
        return (
            <div className="min-h-screen bg-[#e7e7e7] py-24 px-6">
                <div className="max-w-7xl mx-auto">
                    <h1 className="text-4xl font-garamond font-bold text-[#562c81] mb-8">Project Not Found</h1>
                    <p className="text-lg text-[#562c81]">The project you're looking for doesn't exist.</p>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-[#e7e7e7] py-24 px-6">
            <div className="max-w-7xl mx-auto">
                {/* Project Title */}
                <h1 className="text-5xl font-garamond font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#373683] to-[#5b2c81] mb-12">
                    {project.title}
                </h1>

                {/* Project Description */}
                <div className="mb-12">
                    <h2 className="text-3xl font-garamond font-bold text-[#562c81] mb-6">Project Description</h2>
                    <p className="text-lg text-[#562c81] mb-6">{project.description}</p>
                    <div className="prose prose-lg text-[#562c81]">
                        {project.longDescription.split('\n\n').map((paragraph, index) => (
                            <p key={index} className="mb-4">{paragraph}</p>
                        ))}
                    </div>
                </div>

                {/* Project Details */}
                <div className="mb-12">
                    <h2 className="text-3xl font-garamond font-bold text-[#562c81] mb-6">Project Details</h2>
                    <div className="space-y-4">
                        <div>
                            <h3 className="text-xl font-medium text-[#562c81] mb-2">Status</h3>
                            <p className="text-lg text-[#562c81]">{project.status}</p>
                        </div>

                        <div>
                            <h3 className="text-xl font-medium text-[#562c81] mb-2">Timeline</h3>
                            <p className="text-lg text-[#562c81]">Started: {project.startDate}</p>
                            <p className="text-lg text-[#562c81]">Expected Completion: {project.expectedCompletion}</p>
                        </div>

                        <div>
                            <h3 className="text-xl font-medium text-[#562c81] mb-2">Team Members</h3>
                            <ul className="list-disc list-inside text-lg text-[#562c81]">
                                {project.team.map((member) => (
                                    <li key={member}>{member}</li>
                                ))}
                            </ul>
                        </div>

                        <div>
                            <h3 className="text-xl font-medium text-[#562c81] mb-2">Technologies</h3>
                            <ul className="list-disc list-inside text-lg text-[#562c81]">
                                {project.tags.map((tag) => (
                                    <li key={tag}>{tag}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectDetailPage; 