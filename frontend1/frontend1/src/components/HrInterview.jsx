import React, { useState } from 'react';

const Interview = () => {
  // Sample data for questions and replies
  const [questions] = useState([
    {
      id: 1,
      question: ' Tell me about yourself.',
      replies: ["Best Answer: Start with a brief summary of your background, focusing on your education, key experiences, and how they relate to the job you're interviewing for. Keep it concise and professional.", "Example: I have a degree in Your Degree and over X years of experience in Your Field. I’m passionate about mention a relevant skill or industry, and I've worked on projects that align with the role, like [mention a project]. I’m excited about this opportunity to bring my skills to your team."],
    },
    {
      id: 2,
      question: 'Why do you want to work here?',
      replies: ["Best Answer: Highlight the company’s culture, products, or reputation and explain how they align with your values and career goals", "Example: I admire your company’s commitment to innovation and sustainability. Your recent initiatives in mention relevant initiative really stand out to me, and I believe my skills in [your relevant skill] will contribute to that mission."],
    },
    
    {
      id: 3,
      question: " What are your strengths?",
      replies: ["Best Answer: Mention 2-3 key strengths that are relevant to the job, provide specific examples, and explain how they’ve helped in previous roles.","Example: I’m very detail-oriented, which has helped me successfully manage complex projects. I’m also a strong communicator, which ensures smooth collaboration with teams."],
    },
    {
        id: 4,
        question: " What are your weaknesses?",
        replies: ["Best Answer: Choose a weakness that won’t affect your ability to do the job and explain how you’re working to improve it.","Example: I tend to be a perfectionist, so sometimes I spend more time than necessary on a project. However, I’m learning to balance quality with deadlines by prioritizing tasks more effectively."],
      },
    {
      id: 5,
      question: "Why should we hire you?",
      replies: ["Best Answer: Summarize your qualifications, and connect them to the role’s needs. Highlight your value.","Example: With my experience in [relevant experience] and my proven ability to [mention a skill or achievement], I’m confident I can contribute positively to your team and help drive results."],
    },
    {
      id: 6,
      question: "Tell me about a time you faced a challenge at work.",
      replies: ["Best Answer: Use the STAR method (Situation, Task, Action, Result) to describe a situation where you overcame a challenge.","Example: At my last job, we faced a tight deadline on a major project. I stepped up by [action], and we successfully delivered on time with positive client feedback."],
    },
    {
      id: 7,
      question: " How do you handle stress?",
      replies: ["Best Answer: Talk about how you remain calm under pressure and the strategies you use to manage stress.","Example: I stay organized by prioritizing tasks and breaking them into smaller steps. When I feel overwhelmed, I take a step back, refocus, and tackle the most pressing tasks first."],
    },
    {
      id: 8,
      question: " Where do you see yourself in 5 years?",
      replies: ["Best Answer: Show that you have ambition but remain flexible and open to growth within the company.","Example: In five years, I hope to grow within this company, taking on more leadership responsibilities and continuing to develop my skills in [a relevant area]."],
    },
    {
      id: 9,
      question: "What motivates you?",
      replies: ["Best Answer: Focus on things that align with the job and the company’s culture.","Example: I’m motivated by challenges and learning opportunities. I love being able to solve problems and see the impact of my work."],
    },
    {
      id: 10,
      question: "How do you prioritize your work?",
      replies: ["Best Answer: Explain your organizational methods and how you handle multiple tasks.","Example: I prioritize based on deadlines and the importance of each task. I also communicate with team members to ensure alignment on priorities."],
    },
  ]);

  // State to track which question is clicked
  const [selectedQuestion, setSelectedQuestion] = useState(null);

  // Function to handle question click
  const handleQuestionClick = (question) => {
    setSelectedQuestion(question);
  };

  // Function to go back to the list of questions
  const handleBackClick = () => {
    setSelectedQuestion(null);
  };

  return (

        <div className="interview-container bg-gray-100 dark:bg-[#1f2a38] p-6 rounded-lg shadow-lg max-w-3xl mx-auto mt-10 transition-colors duration-300">
      <h1 className="text-3xl font-bold text-center mb-6 text-indigo-600 dark:text-indigo-400"> HR Interview Questions</h1>

      {/* If no question is selected, show the list of questions */}
      {selectedQuestion === null ? (
        <div>
          {questions.map((q) => (
            <div
              key={q.id}
              className="question-block mb-4 bg-white dark:bg-gray-700 dark:text-white p-4 rounded-lg shadow-sm hover:shadow-lg transition-shadow cursor-pointer"
              onClick={() => handleQuestionClick(q)}
            >
              <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-100">{q.question}</h3>
            </div>
          ))}
        </div>
      ) : (
        <div>
          {/* Back Button */}
          <button
            onClick={handleBackClick}
            className="mb-4 text-white bg-indigo-600 dark:bg-indigo-500 px-4 py-2 rounded-md hover:bg-indigo-700 dark:hover:bg-indigo-600 transition-colors"
          >
            Back to Questions
          </button>

          {/* Selected question and its replies */}
          <div className="question-block bg-white dark:bg-gray-700 dark:text-white p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100 border-b pb-2 border-indigo-300 dark:border-indigo-500">
              {selectedQuestion.question}
            </h3>
            <ul className=" text-xl list-disc pl-5 text-gray-700 dark:text-gray-300 space-y-2">
              {selectedQuestion.replies.map((reply, index) => (
                <li key={index} className="hover:bg-indigo-100 dark:hover:bg-indigo-900 p-2 rounded transition-colors">
                  {reply}
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
    
  );
};

export default Interview;
