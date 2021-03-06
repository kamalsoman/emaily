//SurveyFormReview
import React from 'react';
import { connect } from 'react-redux';

const SurveyFormReview = ({ onCancel, formValues }) => {
    return (
        <div>
            <h5>Please confirm the entries</h5>
            <button className="yellow darken-3 btn-flat" onClick={onCancel}>Back</button>
        </div>
    );
};


function mapStateToProps(state) {
    console.log(state);
    //return {formValues: state.form.SurveyForm.values };
}

export default connect(mapStateToProps)(SurveyFormReview);