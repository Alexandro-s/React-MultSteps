import {
    BsFillEmojiHeartEyesFill,
    BsFillEmojiSmileFill,
    BsFillEmojiFrownFill,
    BsFillEmojiNeutralFill
} from "react-icons/bs"
import './ReviewForm.css'


// ReviewForm vai receber aas props data: essa que guarda valores de review e comment 
// E UpdateFieldHanler essa que uma funcao que vai atualizar o valor de algum campo do formulario 
const ReviewForm = ({data, updateFieldHandler}) => {
    return (
        <div className="review-form">

            {/* Parte dos icones de avalicao
            Dentro desse div, voce tem quatro opcoes de avaliacao, cada um com:
             - Um botao radio para selecionar 
             - Um icone correspondenete 
             - Um texto explicativo 
            */}
            <div className="form-control score-container">
                <label className="radio-container">

                    {/* Define que e uma opcao unica (radio button) */}
                    <input type="radio"

                    // Valor que sera enviado quando essa opcao for escolhida 
                        value="unsatisfiel"

                    // Agrupa todos os radios juntos - esse que so pode ser uma opcao     
                        name="review"
                    // Obriga o Usuario a esoolher uma opcao para avancar 
                        required
                    // O Botao fica marcado se e somente se data.review tiver o mesmo valor que o value
                        checked={data.review === "unsatisfiel"}
                    // Quando houver uma medanca, ele chama o funcao passando review como a chave e o e.targe.value como o novo valor. 
                        onChange={((e) => updateFieldHandler("review", e.target.value))}
                    />

                    {/* emoji */}
                    <BsFillEmojiFrownFill />
                    <p>Dissatisfied</p>
                </label>
                <label className="radio-container">
                    <input type="radio"
                        value="neutral"
                        name="review"
                        required
                        checked ={data.review === "neutral"}
                        onChange={((e) => updateFieldHandler("review", e.target.value))}
                        />
                    <BsFillEmojiNeutralFill />
                    <p>Could be better </p>
                </label>
                <label className="radio-container">
                    <input type="radio"
                        value="satisfiel"
                        name="review"
                        required
                        checked={data.review === "satisfiel"}
                        onChange={((e) => updateFieldHandler("review", e.target.value))}
                    />
                    <BsFillEmojiSmileFill />
                    <p>Satisfild </p>
                </label>
                <label className="radio-container">
                    <input type="radio"
                        value="very_satisfild"
                        name="review"
                        required
                        checked={data.review === "very_satisfild"}
                        onChange={((e) => updateFieldHandler("review", e.target.value))}
                    />
                    <BsFillEmojiHeartEyesFill />
                    <p>Very satisfild</p>
                </label>
            </div>

            {/* Area de comentario 
                Tambem usa a fuction updateFielHandeler para atualizar o  campo comment dentro do data. 
                O valor e controlado value = {data.comment || ""}, ou seja o react sempre vai gerenciar oquqe esta dentro do textarea.
            
            */}
            <div className="form-control">
                <label htmlFor="comment">Comment:</label>
                <textarea
                 name="comment"
                 id="comment"
                 placeholder="Leave your feed back"
                 required
                 value={data.comment || ""}
                 onChange={((e) => updateFieldHandler("comment", e.target.value))}
                 ></textarea>
            </div>
        </div>
    );
};

export default ReviewForm