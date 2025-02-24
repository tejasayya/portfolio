// import { li } from 'framer-motion/client'
// import React from 'react'

// const Expcomp = (props: any) => {
//   return (
//     <div className="space-y-8">
//     {/* Add similar structured divs for each experience */}
//         <div className="bg-gray-900/50 p-6 rounded-lg backdrop-blur-sm">
//             <h3 className="text-xl text-blue-400 mb-2">{props.role}</h3>
//             <p className="text-gray-400 text-sm mb-4">{props.tenure}</p>
//             <ul className="list-disc pl-6 space-y-2 text-gray-300">
//                 {[...props.descriptions].map(des => (
//                     <li>{des}</li>
//                 ))}
//             <li>End Test</li>
//             </ul>
//         </div>
//     {/* Add other experiences following same pattern */}
//     </div>
//   )
// }

// export default Expcomp

import React from 'react';

interface ExpcompProps {
  role: string;
  tenure: string;
  descriptions: string[];
}

const Expcomp: React.FC<ExpcompProps> = ({ role, tenure, descriptions }) => {
  console.log('descriptions:', descriptions); // Debug log

  return (
    <div className="space-y-8">
      <div className="bg-gray-900/50 p-6 rounded-lg backdrop-blur-sm">
        <h3 className="text-xl text-blue-400 mb-2">{role}</h3>
        <p className="text-gray-400 text-sm mb-4">{tenure}</p>
        <ul className="list-disc pl-6 space-y-2 text-gray-300">
          {Array.isArray(descriptions) ? (
            descriptions.map((des, index) => (
              <li key={index}>{des}</li>
            ))
          ) : (
            <li>{String(descriptions)}</li>
          )}
          {/* <li>End Test</li> */}
        </ul>
      </div>
    </div>
  );
};

export default Expcomp;
