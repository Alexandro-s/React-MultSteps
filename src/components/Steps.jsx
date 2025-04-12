// Importa o CSS dos steps
import "./Steps.css";

// Importa os ícones que serão usados em cada passo
import { AiOutlineUser, AiOutlineStar } from 'react-icons/ai';
import { FiSend } from 'react-icons/fi';

// Cria um array com todos os passos
const steps = [
  { 
    icon: <AiOutlineUser />, // Ícone de usuário
    label: "Identification"  // Texto que aparece no passo
  },
  { 
    icon: <AiOutlineStar />, // Ícone de estrela
    label: "Assessment"      // Texto do segundo passo
  },
  { 
    icon: <FiSend />,         // Ícone de envio
    label: "Shipping"         // Texto do terceiro passo
  }
];


const Steps = ({ currentStep }) => {
  return (

    <div className="steps">
    
      {steps.map((step, index) => (
        <div key={index} className={`step ${currentStep >= index ? "active" : ""}`}>
          {step.icon}
          <p>{step.label}</p>
        </div>
      ))}
    </div>
  );
};


export default Steps;


// // 1 --> Preciso saber passo atual 
// // 2 --> 3 div com os 3 passos - Identificacao , Avaliacao, Envio 
// import "./Steps.css"
// import {AiOutlineUser, AiOutlineStar} from 'react-icons/ai';
// import {FiSend} from 'react-icons/fi';


// const Steps = ({currentStep}) => {
//     return ( <div className="steps"> 
//         <div className="step active">
//             <AiOutlineUser/>
//             <p>Identification</p>
//             </div>
//         <div className={`step ${currentStep  >= 1 ? "active" : ""}`}>
//             <AiOutlineStar /> 
//             <p>Assessment</p>
//             </div>
//         <div className={`step ${currentStep >= 2 ? "active" : "" }`}>
//             <FiSend />
//             <p>Shipping</p>
//         </div>
//     </div>
//     );
// };

// export default Steps
