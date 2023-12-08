import React from 'react';
import './Add.css';

export default function Add() {
  return (
    <div className='container'>
      <div className='card card mt-5' style={{ border: 'none' }}>
        <div className="row ms-2 ">
          <h3>Add Participant</h3>
        </div>
        <div className='row mt-2 card-container '>
          <div className="col-md-4 col-sm-6 mb-3">
            <div className="card card1">
              <span className="d-flex align-items-center justify-content-between">Participant Screening <img src="logo.png" alt="Logo" className='img-fluid icon'></img></span>
              <p className='p-screening'>Qualify and limit participants invited to join this study</p>
            </div>
          </div>

          <div className="col-md-4 col-sm-6 mb-3">
            <div className="card card2">
              <span className="d-flex align-items-center justify-content-between">Import Participant List <img src='download.png' alt="Download Icon" className=' img-fluid '></img></span>
              <p>Import and group many participants in one step by uploading a CSV file</p>
            </div>
          </div>

          <div className="col-md-4 col-sm-6 mb-3 ">
            <div className="card card3">
              <span className="d-flex align-items-center justify-content-between">Send Email Invitations <img src='message.png' alt="Message Icon" className=' img-fluid'></img></span>
              <p>Send and track invitation messages delivered by email</p>
            </div>
          </div>
        
          <div className="col-md-4 col-sm-6 ">
            <div className="card card4">
              <span className="d-flex align-items-center justify-content-between">Share Invitation Link <img src='clip.png' alt="Clip Icon" className='img-fluid '></img></span>
              <p>Send or share a static link that enables study registration.</p>
            </div>
          </div>
          
          <div className="col-md-4 col-sm-6">
            <div className="card card5">
              <span className="d-flex align-items-center justify-content-between">Add Existing Participants <img src='group.png' alt="Group Icon" className='img-fluid'></img></span>
              <p>Add all or left panelists not assigned to this study</p>
            </div>
          </div>
        
        </div>
        <div className="row me-2">
          <div className='col-md-12 d-flex justify-content-end mt-4'>
            <button className='btn-1 me-3'>Cancel</button>
            <button className='btn-2'>Continue</button>
          </div>
        </div>
      </div>
    </div>
  );
}
