import React, { useState, Fragment } from "react";
import PersonalInfo from './PersonalInfo';
import Address from './Address';
import Payment from './Payment';

function Form() {
  const [page, setPage] = useState(0);
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phone:"",
    address1:"",
    address2:"",
    state:"",
    city:"",
    pincode:"",
    country:"",
    cardnum:"",
    nameoncard:"",
    cvv:"",

  });

  const FormTitles = ["Personal Details", "Address", "Payment Details"];

  const PageDisplay = () => {
    if (page === 0) {
      return <PersonalInfo formData={formData} setFormData={setFormData} />;
    } else if (page === 1) {
      return <Address formData={formData} setFormData={setFormData} />;
    } else {
      return <Payment formData={formData} setFormData={setFormData} />;
    }
  };

  return (
    <Fragment>
      <section className="container">
        <div className="header">
          <h1>{FormTitles[page]}</h1>
        </div>
        <div className="body">{PageDisplay()}</div>
        <div className="footer">
          <button className="btn btn-primary"
            disabled={page == 0}
            onClick={() => {
              setPage((currPage) => currPage - 1);
            }}
          >
            Prev
          </button>
          <button className="btn btn-success"
            onClick={() => {
              if (page === FormTitles.length - 1) {
                alert("FORM SUBMITTED");
                console.log(formData);
              } else {
                setPage((currPage) => currPage + 1);
              }
            }}
          >
            {page === FormTitles.length - 1 ? "Submit" : "Next"}
          </button>
        </div>
      </section>
    </Fragment>
  );
}

export default Form;