'use client';

const Programs = () => {
    const programs = [
        {
          title: "Parenting Excellence",
          description: "Comprehensive parenting strategies and child development guidance",
          topics: ["Child Psychology", "Discipline Techniques", "Communication", "Emotional Intelligence"]
        },
        {
          title: "Marriage & Relationships",
          description: "Strengthen bonds and improve communication in relationships",
          topics: ["Communication Skills", "Conflict Resolution", "Intimacy", "Trust Building"]
        },
        {
          title: "Addiction Recovery",
          description: "Evidence-based approach to addiction recovery and mental wellness",
          topics: ["Recovery Strategies", "Relapse Prevention", "Support Systems", "Healthy Coping"]
        }
      ];
  
  return (
    <section id="programs" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Structured Programs
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive programs designed by professionals to address specific life challenges and promote family or personal growth.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {programs.map((program, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-bold text-gray-900">{program.title}</h3>
                  </div>
                  <p className="text-gray-600 mb-6">{program.description}</p>
                  <div className="space-y-2">
                    <h4 className="font-semibold text-gray-900">Topics Covered:</h4>
                    <ul className="space-y-1">
                      {program.topics.map((topic, topicIndex) => (
                        <li key={topicIndex} className="flex items-center space-x-2 text-gray-600">
                          <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                          <span>{topic}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="px-6 pb-6">
                  <button className="w-full px-4 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 font-medium">
                    Learn More
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
  );
}
export default Programs;