
import React from 'react';
import './participant.css';
import Dropdown from 'react-bootstrap/Dropdown';
import Button from 'react-bootstrap/Button';
import { Collapse } from 'react-bootstrap';
import { useState } from 'react';
export default function Participant_screening() {

    // return (
        // <div className='container '>
        //     <div className="card ">
        //         <div className='mb-3'>
        //             <img className="vector" src='vector.png'></img><button className="back-button"> Back</button>
        //         </div>
        //         <div className="row">
        //             <div>
        //                 <h3>Participant Screening</h3>
        //             </div>
        //             <div className='mt-3 d-flex justify-content-between '>
        //                 {/* <Dropdown className='Quota-limits'>
        //                     <Button variant="">Split Button</Button><Dropdown.Toggle split variant="" id="dropdown-split-basic" /> 

        //                     <Dropdown.Menu>
        //                         <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
        //                         <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
        //                         <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
        //                     </Dropdown.Menu>
        //                 </Dropdown> */}

        //                 <button className='Quota-limits d-flex justify-content-between align-items-center'>&nbsp;Quota Limits<img src='dropdown.png' className='dropdown '></img>
        //                 </button>
        //                 <div className='b1' >
        //                     <button className='manage me-4'>Manage Applicants</button>
        //                     <button className='preview'>Preview</button>
        //                 </div>
        //             </div>

        //             <div className="content mt-5 d-flex gap-2 ">
        //                 <img src='info.png' className='info'></img><content className='info-paragraph'>Screening questions are Participant Profile Fields used to qualify and Group people for participation in this study. Add any existing profile field and then customize which choices trigger disqualification and/or assign Gro</content>
        //             </div>
        //             <div className='mt-5'>
        //                 <div className="form-check d-flex ">
        //                     <input className="" type="checkbox" value="" id="flexCheckDefault" />
        //                     <label className="form-check-label ms-5" for="flexCheckDefault">
        //                         Allow applicants to be screened prior to account registration
        //                     </label>
        //                 </div>
        //                 <div className="form-check mt-3 d-flex">
        //                 <input className="" type="checkbox" value="" id="flexCheckDefault" />
        //                     <label className="form-check-label ms-5" for="flexCheckDefault">
        //                     Require existing participants to complete new screening questions
        //                     </label>
                    
                            
        //                 </div>



        //             </div>
        //             <div className='profile mt-4 d-flex justify-content-between'>
        //                 <h4>Profile Fields</h4>
        //                 <div className='expandall'>
        //                     <a className='expand '>Expand all</a>
        //                     <a className='expand'>Collapse all</a>
                        
        //                 </div>

        //             </div>
        //             <div className='d-flex gap-4 mt-4 align-items-center'>
        //                 <img className='dots' src='dots.png'></img>
        //                 <img className='gap-4 hash' src='hash.png'></img>
        //                 <h5>What is your current age?</h5>
        //             </div>

        //             <div className='d-flex gap-4 mt-4 align-items-center'>
        //                 <img className='dots' src='dots.png'></img>
        //                 <img className='gap-4 hash' src='hash.png'></img>
        //                 <h5>What is your current household income?</h5>
        //             </div>

        //             <div className='d-flex gap-4 mt-4 align-items-center'>
        //                 <img className='dots' src='dots.png'></img>
        //                 <img className='gap-4 hash' src='bar.png'></img>
        //                 <h5>What gender do you identify as?</h5>
        //             </div>

        //             <div className='d-flex gap-4 mt-4 align-items-center'>
        //                 <img className='dots' src='dots.png'></img>
        //                 <img className='gap-4 hash' src='bar.png'></img>
        //                 <h5>What is your current education level?</h5>
        //             </div>

        //             <div className='d-flex gap-4 mt-4 align-items-center'>
        //                 <img className='dots' src='dots.png'></img>
        //                 <img className='gap-4 hash' src='bar.png'></img>
        //                 <h5>What gender do you identify as?</h5>
        //             </div>

        //             <div className='d-flex gap-4 mt-4 align-items-center'>
        //                 <img className='dots' src='dots.png'></img>
        //                 <img className='gap-4 hash' src='bar.png'></img>
        //                 <h5>What gender do you identify as? </h5>
        //             </div>

        //             <Button className='question mt-4'>Add Question</Button>

        //             <div className='d-flex justify-content-end mt-4' >
        //                 <button className='btn-1 me-3'>Cancel</button>
        //                 <button className='preview'>Save</button>
        //             </div>



        //         </div>
        //         .
        //     </div>

        // </div>
        
    // )



    const [openState, setOpenState] = useState(null);

    const toggleAccordion = (accordionId) => {
      setOpenState((prevOpenState) => (prevOpenState === accordionId ? null : accordionId));
    };
  
    return (
      <div className="accordion">
        <div className="accordion-item">
          <div className="accordion-head" onClick={() => toggleAccordion("1")}>
            <h6 className="title">What is Dashlite?</h6>
            <span className="accordion-icon"></span>
          </div>
          <Collapse
            className="accordion-body"
            isOpen={openState === "1"}
          >
            <div className="accordion-inner">
              <div className='d-flex justify-content-between'> 
                <span>Convert to Shopify Script</span>
                <div className="custom-control custom-control-sm custom-switch">
                  <input type="checkbox" className="custom-control-input" id="customSwitch12" />
                  <label className="custom-control-label" htmlFor="customSwitch12"></label>
                </div>
              </div>
            </div>
          </Collapse>
        </div>
      </div>
    )
}
