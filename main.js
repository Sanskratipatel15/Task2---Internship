document.addEventListener('DOMContentLoaded', function() {
    // Show course details
    function showDetails(course) {
        const details = {
            'web-dev': {
                title: 'Web Development',
                content: `
                    <p>Learn HTML, CSS, JavaScript, and modern frameworks like React and Angular.</p>
                    <ul class="list-disc text-left mx-auto" style="max-width: 600px;">
                        <li>Module 1: Introduction to Web Development</li>
                        <li>Module 2: HTML & CSS Basics</li>
                        <li>Module 3: JavaScript Essentials</li>
                        <li>Module 4: Advanced JavaScript</li>
                        <li>Module 5: Modern Frontend Frameworks</li>
                    </ul>
                `
            },
            'ai-ml': {
                title: 'AI and Machine Learning',
                content: `
                    <p>Master the fundamentals and advanced concepts of AI and ML.</p>
                    <ul class="list-disc text-left mx-auto" style="max-width: 600px;">
                        <li>Module 1: Introduction to AI</li>
                        <li>Module 2: Machine Learning Basics</li>
                        <li>Module 3: Deep Learning</li>
                        <li>Module 4: Natural Language Processing</li>
                        <li>Module 5: AI in Practice</li>
                    </ul>
                `
            },
            'databases': {
                title: 'Databases',
                content: `
                    <p>Get in-depth knowledge of SQL and NoSQL databases.</p>
                    <ul class="list-disc text-left mx-auto" style="max-width: 600px;">
                        <li>Module 1: Introduction to Databases</li>
                        <li>Module 2: SQL Basics</li>
                        <li>Module 3: Advanced SQL</li>
                        <li>Module 4: NoSQL Databases</li>
                        <li>Module 5: Database Design</li>
                    </ul>
                `
            }
        };

        document.getElementById('course-title').innerText = details[course].title;
        document.getElementById('course-content').innerHTML = details[course].content;
        document.getElementById('course-details').classList.remove('hidden');
        document.querySelector('.courses').classList.add('hidden');
    }

    // Hide course details
    function hideDetails() {
        document.getElementById('course-details').classList.add('hidden');
        document.querySelector('.courses').classList.remove('hidden');
    }

    window.showDetails = showDetails;
    window.hideDetails = hideDetails;
});
