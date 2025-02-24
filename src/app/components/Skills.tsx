import React from 'react'

const Skills = (props: any) => {
  return (
    <div>
        <div className="bg-gray-900/50 p-6 rounded-lg backdrop-blur-sm">
            <h3 className="text-blue-400 mb-3 text-center">{props.title}</h3>
            <div className="flex flex-wrap gap-2">
            {[...props.sk].map(skill => (
                <span key={skill} className="px-3 py-1 bg-blue-900/30 rounded-full text-sm text-white">
                {skill}
                </span>
            ))}
            </div>
        </div>
    </div>
  )
}

export default Skills