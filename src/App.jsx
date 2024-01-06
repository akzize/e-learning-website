


import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Accueil from './Chaines/Accueil';
import Videos from './Chaines/Videos';
import Login from './Chaines/Login';

const App=()=>{

const router = createBrowserRouter([
  {
    path: "/accueil",
    element: <Accueil />,
  },
  {
    path: "/videos/:id",
    element: <Videos />,
  },
  {
    path: "/",
    element: <Login />
  }

]);


return (
  <div className='App text-light'>
    <RouterProvider router={router}>
    </RouterProvider>
  </div>
)
}

export default App
// import React, { useEffect, useState } from 'react';
// import OpenAI from 'openai';

// const App = () => {

//   const [question,Setquestion]=useState('');
//   const [response,Setresponse]=useState('');


//   // useEffect(() => {
//     const openai = new OpenAI({
//       apiKey: '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',
//       dangerouslyAllowBrowser: true,
//     });

//     async function main() {
//       try {
//         const completion = await openai.chat.completions.create({
//           messages: [{ role: 'system', content: question }],
//           model: 'gpt-3.5-turbo',
//         });

//         Setresponse(completion.choices[0].message.content);
//       } catch (error) {
//         console.error('Error fetching OpenAI completion:', error);
//       }
//     }

//     // main();
//   // }, []); // Empty dependency array ensures the effect runs only once

//   return (
//     <div>
//       <input type="text" onChange={(e)=>Setquestion(e.target.value)} />
//       <button onClick={main}>search</button>
//       <div>
//         {response}
//       </div>
//     </div>
//   );
// };

// export default App;


