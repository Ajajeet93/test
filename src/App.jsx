import Header from "./header.jsx";
import Qualification from "./education_qualification.jsx";
import "./style.css"
function Skill(props) {
  return (
    <div className="text-left text-[1.3rem] leading-[1.5] mt-6">
      <h1 className="text-2xl font-semibold text-blue-700 mb-2">
        Technical Skill
      </h1>
      <ol className="list-decimal list-inside space-y-1">
        <li>Language : {props.lang}</li>
        <li>Software : {props.devlang}</li>
        <li>Tools : {props.tools}</li>
      </ol>
    </div>
  );
}

function App() {
  return (
      <div className="w-[210mm] h-[297mm] mx-auto my-4 bg-white text-black shadow-lg p-8 rounded-lg">
        {/* Your content here */}
        <div className="max-w-[1280px] mx-auto text-center px-4 py-6">
          {/* Header Section */}
          <Header
            name="Ajeet Yadav"
            address="Phagwara"
            email="ajeet123@gmail.com"
            phoneno="930575637"
          />

          <hr className="my-6 border-gray-300" />

          {/* Career Objective */}
          <div className="text-left">
            <h1 className="text-2xl font-semibold text-green-600">
              Career Objectives
            </h1>
            <p className="mt-2 text-white-700 leading-relaxed">
              Motivated and hardworking individual seeking an entry-level position
              to apply academic knowledge, learn new skills, and grow professionally.
              I aim to contribute positively to organizational goals through dedication,
              teamwork, and continuous improvement while building a strong foundation
              for a successful career.
            </p>
          </div>

          <hr className="my-6 border-gray-300" />

          {/* Qualification Section */}
          <Qualification />

          <hr className="my-6 border-gray-300" />

          {/* Skill Section */}
          <Skill
            lang="C++, JavaScript"
            devlang="HTML, CSS, JavaScript, React"
            tools="Git, GitHub, Jira"
          />
        </div>
      </div>
  );
}

export default App;
