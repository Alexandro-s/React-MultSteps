// importar icones de navegacao e envio
import { GrFormNext, GrFormPrevious } from 'react-icons/gr'
import {FiSend} from "react-icons/fi"

// Components 
import UserForm from './components/UserForm'
import ReviewForm from './components/ReviewForm'
import Thanks from './components/Thanks'
import './App.css'
import TesteIcone from './components/TesteIcone'


// Hooks
import { useForm } from './hooks/useForm'
import Steps from './components/Steps'
import { useState } from 'react'

// Definindo dados iniciais do formulario 
// Cria um objeto modelo para armazena os dados do formulario, comecando tudo vazio 
const formTemplate = {
  name: "",
  email:"",
  review:"",
  comment:""
};

function App() {
 

  // UseState para armazenamento de dados 
  // Onde data guarda ad informacoes preenchidas pelo usuario 
  // SetData e uma funcao que atualiza/Modifica o data
 const [data, setData] = useState(formTemplate);


  // Aqui os campos do formulario sera atualizado 
  // Function vai receber um key(nome do campo) e value(novo valor)
  // Ele vai atualizar apenas aquele campo sem perder os outros valores preenchidos 
  // Usa spread operator (...prev) para copiar o estado anterior 
  const updateFieldHandler = (key, value) => {
    setData ((prev) => {
      return {...prev, [key]: value};
    })
  }

  // Cria components do step e coloca eles em uma array para manipulacao
  const formComponents = [
    <UserForm data={data} updateFieldHandler={updateFieldHandler}/>,
    <ReviewForm  data={data} updateFieldHandler={updateFieldHandler} />,
    <Thanks  data={data} />
  ];


  // Hooks perrsonalizados para geranciar os passos  Sendo-> 
  // currentStep ->  Qual etapa estamos agora ()
  // currentComponent -> O component da etapa atual 
  // chageStep -> Funcao para mudar de etapa 
  // isLastStep -> Verifica se estamos na ultima etapa
  // isFirtSteo -> Verifica se estamos na primeira etapa
  const {currentStep,  currentComponent, changeStep, isLastStep, isFirtStep} = useForm( formComponents)

  return (

    <div className='App'>

      {/* Cabecalho */}
      <div className="header">
        <h2>Leave your review</h2>
        <p>
          We are happy with your purchase, use the form below to evaluate the product.
        </p>
      </div>

      {/* Container do form  */}

       {/*Mostra o componente de progresso (Step), indicando em qual etapa esta */}
      <div className='form-container'>
        <Steps currentStep={currentStep}/>

          {/* Formulario */}

          {/* Quando o formulario for enviado, ele chama a funcao ChageStep para  ir para o proximo compoente (proximo passo) */}
        <form onSubmit={(e) => changeStep(currentStep + 1 , e )}>

          {/* Conteudo dinamico do formulario  */}
          <div className='inputs-container'>{currentComponent}</div>

          {/* Botoes de Navegacao  */}
          <div className="actions">

            {/* Se nao for a primeira etapa, exibe o botaoa de voltar  */}
            {!isFirtStep && (  <button type='button' onClick={() => changeStep(currentStep - 1)}>
              <GrFormPrevious className="icon" />
              <span>Back</span>

              {/* Botaoa de Avancar e Enviar  */}
            </button>)}

            {/* Se nao for a ultima etapa, exibi o botao de Avancar | Se for a ultima etapa, , mostra o botao de ENVIAR  */}
            {!isLastStep ? (  <button type='submit'>
              <span>Advance</span>
                 <GrFormNext className="icon" />
            </button>) : (<button type='button'><span>to send</span> <FiSend className="icon"/></button>) }
          </div>
        </form>
      </div>
    </div>


  )
}

export default App
