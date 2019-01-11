import React from "react";
import { hogwarts } from "./hogwarts-data";
import HatFormQuestion from "./HatFormQuestion";

const HatForm = props => {
  return (
    <form onSubmit={this.handleFormSubmit} className="main-form">
      <HatFormQuestion
        questionClassName="question-1"
        question={hogwarts[0].question[0]}
        questionAnswer1={hogwarts[0].questionAnswer[0]}
        questionAnswer2={hogwarts[1].questionAnswer[0]}
        questionAnswer3={hogwarts[2].questionAnswer[0]}
        questionAnswer4={hogwarts[3].questionAnswer[0]}
        checked={props.isChecked}
        button="one"
      />
      <HatFormQuestion
        questionClassName="question-2"
        question={hogwarts[0].question[1]}
        questionAnswer1={hogwarts[0].questionAnswer[1]}
        questionAnswer2={hogwarts[1].questionAnswer[1]}
        questionAnswer3={hogwarts[2].questionAnswer[1]}
        questionAnswer4={hogwarts[3].questionAnswer[1]}
        button="two"
      />
      <HatFormQuestion
        questionClassName="question-3"
        question={hogwarts[0].question[2]}
        questionAnswer1={hogwarts[0].questionAnswer[2]}
        questionAnswer2={hogwarts[1].questionAnswer[2]}
        questionAnswer3={hogwarts[2].questionAnswer[2]}
        questionAnswer4={hogwarts[3].questionAnswer[2]}
        button="three"
      />
      <HatFormQuestion
        questionClassName="question-4"
        question={hogwarts[0].question[0]}
        questionAnswer1={hogwarts[0].questionAnswer[3]}
        questionAnswer2={hogwarts[1].questionAnswer[3]}
        questionAnswer3={hogwarts[2].questionAnswer[3]}
        questionAnswer4={hogwarts[3].questionAnswer[3]}
        button="four"
      />
      <HatFormQuestion
        questionClassName="question-5"
        question={hogwarts[0].question[0]}
        questionAnswer1={hogwarts[0].questionAnswer[4]}
        questionAnswer2={hogwarts[1].questionAnswer[4]}
        questionAnswer3={hogwarts[2].questionAnswer[4]}
        questionAnswer4={hogwarts[3].questionAnswer[4]}
        button="five"
      />
      <HatFormQuestion
        questionClassName="question-6"
        question={hogwarts[0].question[0]}
        questionAnswer1={hogwarts[0].questionAnswer[5]}
        questionAnswer2={hogwarts[1].questionAnswer[5]}
        questionAnswer3={hogwarts[2].questionAnswer[5]}
        questionAnswer4={hogwarts[3].questionAnswer[5]}
        button="six"
      />
    </form>
  );
};

export default HatForm;
