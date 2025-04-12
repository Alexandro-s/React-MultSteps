// importar o useState para manipulacao de estados 
import { useState } from "react";


// Cria funcao para fazer a manipulcao do step atual e do seguinte isso com useState 
 export function useForm(steps) {
    const [currentStep, setCurrentStep] = useState(0)


// Função para mudar os steps

    function changeStep (i, e) {
      if(e) e.preventDefault();

        if( i < 0 || i >=  steps.length) return

        setCurrentStep(i)
    }

    // Vou retorna o step atual dependedo do step component

    return {
        currentStep, 
        currentComponent: steps[currentStep],
        changeStep,
        isLastStep: currentStep + 1 === steps.length ? true : false,
        isFirtStep: currentStep === 0 ? true : false,
    };
 }