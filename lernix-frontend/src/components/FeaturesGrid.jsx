import React from 'react';
import { BookOpen, Brain, Users } from 'lucide-react';

const features = [
  {
    icon: <BookOpen className="w-8 h-8 text-purple-400" />,
    title: "Smart Organization",
    description: "Automatically categorize and link your notes across subjects for seamless learning."
  },
  {
    icon: <Brain className="w-8 h-8 text-purple-400" />,
    title: "AI-Enhanced Learning",
    description: "Get personalized insights and suggestions to improve your study materials."
  },
  {
    icon: <Users className="w-8 h-8 text-purple-400" />,
    title: "Collaborative Study",
    description: "Share and collaborate on notes with classmates in real-time."
  }
];

const FeaturesGrid = () => (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
    {features.map((feature, index) => (
      <div 
        key={index}
        className="group bg-gray-800/40 backdrop-blur-sm p-8 rounded-2xl border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300"
      >
        <div className="bg-purple-500/10 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:bg-purple-500/20 transition-colors">
          {feature.icon}
        </div>
        <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
        <p className="text-gray-300 leading-relaxed">{feature.description}</p>
      </div>
    ))}
  </div>
);

export default FeaturesGrid;
