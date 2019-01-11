import React from "react";

const HatFormQuestion = props => {
  return (
    <div>
      <div className={`question ${props.questionClassName}`}>
        <h2>{props.question}</h2>
        <div className="question-container">
          <div className="form-check">
            <label>
              <input
                type="radio"
                name="react-tips"
                value="Gryffindor"
                className="form-check-input"
                checked={props.isChecked}
                onChange={props.handleOptionChange}
              />
              {props.questionAnswer1}
            </label>
          </div>

          <div className="form-check">
            <label>
              <input
                type="radio"
                name="react-tips"
                value="Ravenclaw"
                className="form-check-input"
                checked={props.isChecked}
                onChange={props.handleOptionChange}
              />
              {props.questionAnswer2}
            </label>
          </div>
          <div className="form-check">
            <label>
              <input
                type="radio"
                name="react-tips"
                value="Hufflepuff"
                className="form-check-input"
                checked={props.isChecked}
                onChange={props.handleOptionChange}
              />
              {props.questionAnswer3}
            </label>
          </div>

          <div className="form-check">
            <label>
              <input
                type="radio"
                name="react-tips"
                value="Slytherin"
                className="form-check-input"
                checked={props.isChecked}
                onChange={props.handleOptionChange}
              />
              {props.questionAnswer4}
            </label>
          </div>
        </div>
      </div>
      <div className="form-group">
        <button
          className={`btn ${props.button}`}
          type="submit"
          onClick={props.handleFormSubmit}
        >
          Submit
        </button>
      </div>{" "}
    </div>
  );
};

export default HatFormQuestion;
