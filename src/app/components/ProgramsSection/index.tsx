'use client';
import { Clock, Users } from "lucide-react";

const Programs = () => {
  const programs = [
    {
      category: "Core Programs",
      items: [
        {
          title: "Parenting With Purpose",
          duration: "6 weeks",
          format: "Group Cohort",
          description: "Biblical parenting strategies for modern challenges",
          topics: ["Discipline", "Communication", "Faith Development"]
        },
        {
          title: "Marriage Restoration",
          duration: "8 weeks", 
          format: "Private",
          description: "Rebuild trust and intimacy in your marriage",
          topics: ["Conflict Resolution", "Forgiveness", "Reconnection"]
        }
      ]
    },
    {
      category: "Specialty Tracks", 
      items: [
        {
          title: "Overcoming Addiction",
          duration: "12 weeks",
          format: "Group/Private",
          description: "Christ-centered recovery program",
          topics: ["Accountability", "Triggers", "Support Systems"]
        }
      ]
    }
  ];

  return (
    <section id="programs" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Our Family Enrichment Programs
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose from structured learning journeys or focused support sessions
          </p>
        </div>

        {programs.map((group, groupIndex) => (
          <div key={groupIndex} className="mb-12">
            <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">
              <span className="inline-flex items-center">
                <span className="w-3 h-3 bg-green-500 rounded-full mr-2"></span>
                {group.category}
              </span>
            </h3>
            <div className="flex flex-wrap justify-center gap-6">
              {group.items.map((program, index) => (
                <div 
                  key={index} 
                  className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow border border-gray-100 w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] max-w-md"
                >
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="text-xl font-bold text-gray-900">{program.title}</h3>
                      <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">
                        {program.format}
                      </span>
                    </div>
                    
                    <div className="flex items-center text-sm text-gray-500 mb-4 space-x-4">
                      <span className="flex items-center">
                        <Clock className="w-4 h-4 mr-1" />
                        {program.duration}
                      </span>
                      <span className="flex items-center">
                        <Users className="w-4 h-4 mr-1" />
                        {program.format.includes("Group") ? "Small Groups" : "1-on-1"}
                      </span>
                    </div>
                    
                    <p className="text-gray-600 mb-4">{program.description}</p>
                    
                    <div className="space-y-2">
                      <h4 className="text-sm font-semibold text-gray-900">Key Focus Areas:</h4>
                      <ul className="space-y-1">
                        {program.topics.map((topic, topicIndex) => (
                          <li key={topicIndex} className="flex items-center space-x-2 text-gray-600 text-sm">
                            <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                            <span>{topic}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div className="px-6 pb-6">
                    <button className="w-full px-4 py-2.5 bg-green-600 text-white rounded-lg hover:bg-green-700 font-medium text-sm">
                      View Program Details
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
        
        <div className="text-center mt-8">
          <button className="px-6 py-3 border border-green-600 text-green-600 rounded-lg hover:bg-green-50 font-medium">
            View All Programs
          </button>
        </div>
      </div>
    </section>
  );
}
export default Programs;