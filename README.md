<!DOCTYPE html>
<html lang="en" class="scroll-smooth">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Sanjib Maity - Interactive Resume</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&display=swap" rel="stylesheet">
    <!-- Chosen Palette: Calm Harmony -->
    <!-- Application Structure Plan: A single-page application with a sticky top navigation bar for seamless scrolling between sections (Summary, Experience, Projects, Skills, Leadership). This structure was chosen for its intuitive user flow, allowing recruiters to quickly access specific information non-linearly. The core of the design is to present traditional resume content in a more engaging, web-native format, with interactive charts for skills to break up text and provide a quick visual summary. This enhances usability over a static document. -->
    <!-- Visualization & Content Choices: 
        - Report Info: Skills List -> Goal: Compare/Inform -> Viz/Presentation Method: Multiple Bar Charts (Chart.js) -> Interaction: Tooltips on hover -> Justification: Visually separates and quantifies skill sets, making them easier to digest than a simple list. It adds an interactive element that encourages user engagement.
        - Report Info: Experience/Projects/Leadership -> Goal: Organize/Inform -> Viz/Presentation Method: Styled Cards (HTML/Tailwind) -> Interaction: Subtle hover effects -> Justification: Cards provide a clean, modular way to present distinct blocks of information, improving scannability.
        - Report Info: Navigation -> Goal: Organize -> Viz/Presentation Method: Sticky Header (HTML/Tailwind) -> Interaction: Click to scroll -> Justification: Provides persistent navigation, which is a standard usability best practice for single-page sites.
    -->
    <!-- CONFIRMATION: NO SVG graphics used. NO Mermaid JS used. -->
    <style>
        body {
            font-family: 'Inter', sans-serif;
            background-color: #f8f7f4;
            color: #1f2937;
        }
        .chart-container {
            position: relative;
            width: 100%;
            max-width: 600px;
            margin-left: auto;
            margin-right: auto;
            height: 320px;
            max-height: 350px;
        }
        @media (min-width: 768px) {
            .chart-container {
                height: 350px;
                max-height: 400px;
            }
        }
        .nav-link {
            transition: color 0.3s, border-bottom-color 0.3s;
            border-bottom: 2px solid transparent;
        }
        .nav-link:hover, .nav-link.active {
            color: #2563eb;
            border-bottom-color: #2563eb;
        }
        .card {
            background-color: #ffffff;
            border-radius: 0.75rem;
            box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
            transition: transform 0.3s, box-shadow 0.3s;
        }
        .card:hover {
            transform: translateY(-5px);
            box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
        }
    </style>
</head>
<body class="antialiased">

    <header class="bg-white/80 backdrop-blur-lg shadow-sm sticky top-0 z-50">
        <nav class="container mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex items-center justify-between h-16">
                <div class="flex-shrink-0">
                    <h1 class="text-2xl font-bold text-gray-800">Sanjib Maity</h1>
                </div>
                <div class="hidden md:block">
                    <div class="ml-10 flex items-baseline space-x-4">
                        <a href="#summary" class="nav-link px-3 py-2 rounded-md text-sm font-medium text-gray-700">Summary</a>
                        <a href="#experience" class="nav-link px-3 py-2 rounded-md text-sm font-medium text-gray-700">Experience</a>
                        <a href="#projects" class="nav-link px-3 py-2 rounded-md text-sm font-medium text-gray-700">Projects</a>
                        <a href="#skills" class="nav-link px-3 py-2 rounded-md text-sm font-medium text-gray-700">Skills</a>
                        <a href="#leadership" class="nav-link px-3 py-2 rounded-md text-sm font-medium text-gray-700">Leadership</a>
                        <a href="#contact" class="nav-link px-3 py-2 rounded-md text-sm font-medium text-gray-700">Contact</a>
                    </div>
                </div>
                <div class="md:hidden">
                    <button id="mobile-menu-button" class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500">
                        <span class="sr-only">Open main menu</span>
                        <span class="block h-6 w-6" aria-hidden="true">&#9776;</span>
                    </button>
                </div>
            </div>
        </nav>
        <div id="mobile-menu" class="md:hidden hidden">
            <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                <a href="#summary" class="block nav-link px-3 py-2 rounded-md text-base font-medium text-gray-700">Summary</a>
                <a href="#experience" class="block nav-link px-3 py-2 rounded-md text-base font-medium text-gray-700">Experience</a>
                <a href="#projects" class="block nav-link px-3 py-2 rounded-md text-base font-medium text-gray-700">Projects</a>
                <a href="#skills" class="block nav-link px-3 py-2 rounded-md text-base font-medium text-gray-700">Skills</a>
                <a href="#leadership" class="block nav-link px-3 py-2 rounded-md text-base font-medium text-gray-700">Leadership</a>
                <a href="#contact" class="block nav-link px-3 py-2 rounded-md text-base font-medium text-gray-700">Contact</a>
            </div>
        </div>
    </header>

    <main class="container mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">

        <section id="summary" class="mb-16 scroll-mt-16">
            <div class="text-center max-w-3xl mx-auto">
                <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Professional Summary</h2>
                <p class="mt-4 text-lg text-gray-600">
                    A highly motivated and detail-oriented Metallurgical and Materials Engineering student with experience in research and project-based work, possessing strong analytical and documentation skills. Eager to leverage a foundational understanding of project workflows, data analysis, and technical reporting to support a Project Manager in defining execution guidelines, monitoring progress, and ensuring compliance with established policies and standards. Proficient in key software and simulation tools and skilled in collaborative team environments.
                </p>
                <div class="mt-6">
                    <h3 class="text-xl font-semibold text-gray-800">Education</h3>
                    <p class="mt-2 text-gray-600">
                        <strong>Bachelor of Technology in Metallurgical and Materials Engineering</strong><br>
                        National Institute of Technology, Durgapur, West Bengal (Nov 2022 – Present)<br>
                        CGPA: 7.76/10 (Up to 6th Sem)
                    </p>
                </div>
            </div>
        </section>

        <section id="experience" class="mb-16 scroll-mt-16">
            <div class="text-center mb-12">
                <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Professional Experience</h2>
                <p class="mt-4 max-w-2xl mx-auto text-lg text-gray-600">This section details my hands-on experience through internships, where I applied engineering principles to real-world challenges, focusing on documentation, data analysis, and collaborative project execution.</p>
            </div>
            <div class="grid gap-8 md:grid-cols-2 max-w-4xl mx-auto">
                <div class="card p-6">
                    <h3 class="text-xl font-bold text-gray-800">Summer Intern</h3>
                    <p class="text-md font-medium text-blue-600">CSIR-CMERI, Durgapur</p>
                    <p class="text-sm text-gray-500 mb-4">May 2025 – July 2025</p>
                    <ul class="list-disc list-inside space-y-2 text-gray-600">
                        <li>Contributed to the analysis of deformation characteristics of aluminum alloys, supporting a research project with a focus on high-temperature applications.</li>
                        <li>Monitored and documented experimental data, preparing technical reports and observations for team review, ensuring accuracy and clarity.</li>
                        <li>Collaborated with a research team to achieve project milestones and align findings with research objectives.</li>
                    </ul>
                </div>
                <div class="card p-6">
                    <h3 class="text-xl font-bold text-gray-800">Research and Development Intern</h3>
                    <p class="text-md font-medium text-blue-600">TATA STEEL</p>
                    <p class="text-sm text-gray-500 mb-4">May 2024 – July 2024</p>
                    <ul class="list-disc list-inside space-y-2 text-gray-600">
                        <li>Assisted in the analysis of thermodynamic models for material behavior, supporting project documentation and data collection efforts.</li>
                        <li>Utilized tools like MATLAB and Excel for data analysis and optimization, demonstrating effective resource utilization.</li>
                        <li>Prepared structured reports and data presentations, facilitating clear communication and internal stakeholder updates.</li>
                    </ul>
                </div>
            </div>
        </section>

        <section id="projects" class="mb-16 scroll-mt-16">
            <div class="text-center mb-12">
                <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Key Projects</h2>
                <p class="mt-4 max-w-2xl mx-auto text-lg text-gray-600">Here are some key academic and collaborative projects where I managed documentation, performed in-depth analysis, and contributed to achieving project goals through systematic investigation.</p>
            </div>
            <div class="grid gap-8 md:grid-cols-2 max-w-4xl mx-auto">
                <div class="card p-6">
                    <h3 class="text-xl font-bold text-gray-800">Metallurgical Investigation of Side Link Failure</h3>
                    <p class="text-md font-medium text-blue-600">Collaboration with MRF Limited & CSIR-CMERI</p>
                    <ul class="mt-4 list-disc list-inside space-y-2 text-gray-600">
                        <li>Managed the documentation of brittle fracture behavior using SEM-EDS and inclusion analysis.</li>
                        <li>Generated structured failure analysis reports and corrective suggestions, contributing to a formal project close-out.</li>
                        <li>Coordinated with team members and external partners to ensure project tasks were completed on schedule.</li>
                    </ul>
                </div>
                <div class="card p-6">
                    <h3 class="text-xl font-bold text-gray-800">Product Research (DP & CAL)</h3>
                    <p class="text-md font-medium text-blue-600">Academic Research Project</p>
                    <ul class="mt-4 list-disc list-inside space-y-2 text-gray-600">
                        <li>Documented the effects of temperature/holding time on material formation, demonstrating a systematic approach to project tasks.</li>
                        <li>Correlated research results with performance data, summarizing key findings for publication and providing a comprehensive project overview.</li>
                    </ul>
                </div>
            </div>
        </section>

        <section id="skills" class="mb-16 scroll-mt-16">
            <div class="text-center mb-12">
                <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Skills Overview</h2>
                <p class="mt-4 max-w-2xl mx-auto text-lg text-gray-600">This section provides a dynamic overview of my technical and soft skills, categorized for clarity. These visualizations represent my competencies relevant to project support and engineering.</p>
            </div>
            <div class="grid gap-12 md:grid-cols-1 lg:grid-cols-2">
                <div class="card p-6">
                    <h3 class="text-xl font-bold text-center text-gray-800 mb-4">Project Management Support</h3>
                    <div class="chart-container">
                        <canvas id="pmSkillsChart"></canvas>
                    </div>
                </div>
                <div class="card p-6">
                    <h3 class="text-xl font-bold text-center text-gray-800 mb-4">Technical & Analytical Tools</h3>
                    <div class="chart-container">
                        <canvas id="techSkillsChart"></canvas>
                    </div>
                </div>
                <div class="card p-6">
                    <h3 class="text-xl font-bold text-center text-gray-800 mb-4">Software Proficiency</h3>
                     <div class="chart-container">
                        <canvas id="softwareSkillsChart"></canvas>
                    </div>
                </div>
                <div class="card p-6">
                     <h3 class="text-xl font-bold text-center text-gray-800 mb-4">Compliance & Collaboration</h3>
                     <div class="chart-container">
                        <canvas id="complianceSkillsChart"></canvas>
                    </div>
                </div>
            </div>
        </section>

        <section id="leadership" class="mb-16 scroll-mt-16">
            <div class="text-center mb-12">
                <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Leadership & Responsibilities</h2>
                <p class="mt-4 max-w-2xl mx-auto text-lg text-gray-600">Beyond academics, I have actively participated in campus organizations, taking on leadership roles that have honed my coordination, communication, and management skills.</p>
            </div>
            <div class="grid gap-8 md:grid-cols-2 max-w-4xl mx-auto">
                <div class="card p-6">
                    <h3 class="text-xl font-bold text-gray-800">Logistics Head</h3>
                    <p class="text-md font-medium text-blue-600">Radio NITroz – NIT Durgapur</p>
                    <ul class="mt-4 list-disc list-inside space-y-2 text-gray-600">
                        <li>Coordinated and allocated tasks for technical content creation, demonstrating team leadership and resource management.</li>
                    </ul>
                </div>
                <div class="card p-6">
                    <h3 class="text-xl font-bold text-gray-800">Head of Operations & Video Editing</h3>
                    <p class="text-md font-medium text-blue-600">Students' Alumni Interaction Cell – NIT Durgapur</p>
                    <ul class="mt-4 list-disc list-inside space-y-2 text-gray-600">
                        <li>Facilitated outreach and event organization, emphasizing collaboration and communication with internal and external stakeholders.</li>
                        <li>Managed reporting and documentation, ensuring project information was accurately captured and shared.</li>
                    </ul>
                </div>
            </div>
        </section>

    </main>

    <footer id="contact" class="bg-gray-800 text-white scroll-mt-16">
        <div class="container mx-auto py-8 px-4 sm:px-6 lg:px-8 text-center">
            <h2 class="text-2xl font-bold">Get In Touch</h2>
            <p class="mt-2 text-gray-400">Feel free to reach out via email or connect with me on LinkedIn.</p>
            <div class="mt-6 flex justify-center items-center space-x-6">
                <a href="mailto:sanjibnitdgp7@gmail.com" class="text-gray-300 hover:text-blue-400 transition">sanjibnitdgp7@gmail.com</a>
                <span class="text-gray-500">|</span>
                <a href="tel:+919883297925" class="text-gray-300 hover:text-blue-400 transition">+91 9883297925</a>
                <span class="text-gray-500">|</span>
                <a href="https://www.linkedin.com/in/sanjib-speaks/" target="_blank" rel="noopener noreferrer" class="text-gray-300 hover:text-blue-400 transition">LinkedIn</a>
            </div>
            <p class="mt-8 text-sm text-gray-500">&copy; 2025 Sanjib Maity. All Rights Reserved.</p>
        </div>
    </footer>

    <script>
        document.addEventListener('DOMContentLoaded', function () {
            const mobileMenuButton = document.getElementById('mobile-menu-button');
            const mobileMenu = document.getElementById('mobile-menu');
            
            mobileMenuButton.addEventListener('click', function () {
                mobileMenu.classList.toggle('hidden');
            });

            const navLinks = document.querySelectorAll('.nav-link');
            const sections = document.querySelectorAll('section');

            const observerOptions = {
                root: null,
                rootMargin: '0px',
                threshold: 0.4
            };

            const observer = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        navLinks.forEach(link => {
                            link.classList.remove('active');
                            if (link.getAttribute('href').substring(1) === entry.target.id) {
                                link.classList.add('active');
                            }
                        });
                    }
                });
            }, observerOptions);

            sections.forEach(section => {
                observer.observe(section);
            });
            
            navLinks.forEach(link => {
                link.addEventListener('click', () => {
                   if(!mobileMenu.classList.contains('hidden')) {
                       mobileMenu.classList.add('hidden');
                   }
                });
            });

            const skillsData = {
                pmSkills: {
                    labels: ['Documentation', 'Resource Monitoring', 'Task Allocation', 'Stakeholder Comms', 'Reporting', 'Risk Identification'],
                    data: [90, 80, 75, 85, 90, 70]
                },
                techSkills: {
                    labels: ['MATLAB', 'Excel (Advanced)', 'Python (Basic)', 'Power BI (Basic)', 'ImageJ'],
                    data: [85, 95, 60, 65, 80]
                },
                softwareSkills: {
                    labels: ['MS Office 365', 'PTC Windchill (Basic)', 'ANSYS (Basic)'],
                    data: [90, 70, 60]
                },
                complianceSkills: {
                    labels: ['ISO/ASTM Standards', 'Quality Control', 'Team Leadership', 'Stakeholder Engagement'],
                    data: [80, 75, 85, 90]
                }
            };

            const chartOptions = {
                indexAxis: 'y',
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    x: {
                        beginAtZero: true,
                        max: 100,
                        grid: {
                            color: 'rgba(200, 200, 200, 0.2)'
                        },
                        ticks: {
                            color: '#6b7280'
                        }
                    },
                    y: {
                        grid: {
                            display: false
                        },
                        ticks: {
                            color: '#1f2937',
                            font: {
                                weight: '500'
                            }
                        }
                    }
                },
                plugins: {
                    legend: {
                        display: false
                    },
                    tooltip: {
                        backgroundColor: '#1f2937',
                        titleFont: {
                            size: 14,
                            weight: 'bold'
                        },
                        bodyFont: {
                            size: 12
                        },
                        callbacks: {
                            label: function(context) {
                                return `Proficiency: ${context.raw}%`;
                            }
                        }
                    }
                }
            };

            function createChart(canvasId, labels, data) {
                const ctx = document.getElementById(canvasId).getContext('2d');
                new Chart(ctx, {
                    type: 'bar',
                    data: {
                        labels: labels,
                        datasets: [{
                            label: 'Proficiency',
                            data: data,
                            backgroundColor: 'rgba(37, 99, 235, 0.7)',
                            borderColor: 'rgba(37, 99, 235, 1)',
                            borderWidth: 1,
                            borderRadius: 4
                        }]
                    },
                    options: chartOptions
                });
            }

            createChart('pmSkillsChart', skillsData.pmSkills.labels, skillsData.pmSkills.data);
            createChart('techSkillsChart', skillsData.techSkills.labels, skillsData.techSkills.data);
            createChart('softwareSkillsChart', skillsData.softwareSkills.labels, skillsData.softwareSkills.data);
            createChart('complianceSkillsChart', skillsData.complianceSkills.labels, skillsData.complianceSkills.data);
        });
    </script>

</body>
</html>
