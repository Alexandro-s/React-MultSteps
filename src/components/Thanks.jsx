import {
    BsFillEmojiHeartEyesFill,
    BsFillEmojiSmileFill,
    BsFillEmojiFrownFill,
    BsFillEmojiNeutralFill
} from "react-icons/bs"
import './Thanks.css'

const emojiData = {
    unsatisfiel: <BsFillEmojiFrownFill />,
    neutral: <BsFillEmojiNeutralFill />,
    satisfiel: <BsFillEmojiSmileFill />,
    very_satisfild: <BsFillEmojiHeartEyesFill />,
}


// componet Thanks, esse que recebe "data" como props 
const Thanks = ({ data }) => {
    return (
        <div className="thanks-container">
            <h2>Almost there...</h2>
            <p>
                Your opinion is very important, and soon you will receive a 10% discount coupon for purchases.
            </p>
            <p>To complete your review, click the Submit button below</p>
            <h3>Here is the summary of your evaluation {data.name}</h3>
            <p className="review-data">
                <span>Satisfaction with the product: </span>
                {emojiData[data.review]}
            </p>
            <p className="review-data">
                <span>Comment: </span>
                {data.comment}
            </p>
        </div>
    )


}

export default Thanks