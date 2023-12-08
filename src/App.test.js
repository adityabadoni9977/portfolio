// import React, { useEffect, useRef, useState } from 'react'
// import "./Eventmanagement.css";
// import { Dialog } from "@mui/material";
// import Button from '@mui/material/Button'
// import { addDocument } from '../../Firebase/cloudFirestore/setData';

// import {
//   Box,
//   Table,
//   TableBody,
//   TableCell,
//   TableHead,
//   TableRow,
//   Grid,
// } from "@mui/material";
// import { getCollectionData } from '../../Firebase/cloudFirestore/getData';
// import { UploadImage } from '../../Firebase/cloudStorage/UploadImage';


// export default function EventMangement() {
//   const[open ,setOpen]=useState(false);
// const [img1, setImg1]=useState("")  
// const [img, setImg]=useState("")

//   const datingData=useRef({
//     theme_of_event:"",
//     location:"",
//     name_of_cafe:"",
//     downloadURL:""
//   })
  
//   const addEvent=async(e)=>{
//     e.preventDefault()
//       let downloadURL =await UploadImage(img1)
//       await addDocument("Events",{...datingData.current ,downloadURL})
//       window.location.reload()
//   }
//   const[data, setData]= React.useState([])



  

//     const getEvent=async()=>{

//       let data=await getCollectionData("Events");
//       console.log(data)
//       setData(data)
//     }
// useEffect(()=>{
//   getEvent()
// },[])

// // console.log(data , "***************************************")

//   return (
//     <div>

//         <div className='w-100 d-flex justify-content-end'>
//             <button className=' button-background1 '      onClick={() => setOpen(true)}>Add Event</button>
//         </div>


//         <Dialog
//           open={open}
//           maxWidth={"xs"}
//           fullWidth
//           aria-labelledby="modal-modal-title"
//           aria-describedby="modal-modal-description"
//         >
//           <Box className="p-4">
//             <form onSubmit={addEvent}>
//               <div className="row">
//                 <div className="col-md-12">
//                   <label htmlFor="denomination">Theme of Event</label>
//                   <input
//                     type="text"
//                     size={40}
//                     className="form-control"
//                     required
//                     onChange={(e)=>{
//                         datingData.current.theme_of_event=e.target.value
//                     }}
//                     // value={qrData.qr_purpose}
//                     // onChange={inpChange}
//                   />
//                   <br />
//                   <label htmlFor="denomination">Location</label>
//                   <input
//                     type="text"
//                     // size={40}
//                     className="form-control"
//                     // value={qrData.qr_purpose}
//                     // onChange={inpChange}
//                     onChange={(e)=>{
//                         datingData.current.location=e.target.value
//                     }}
//                     name="qr_purpose"
//                     required
//                   />
//                   <br />
//                   <label className="">Name of Cafe </label>
//                   <input
//                     type="text"
//                     className="form-control"
//                     name="product_count"
//                     // value={qrData.product_count}
//                     onChange={(e)=>{
//                         datingData.current.name_of_cafe=e.target.value
//                     }}
//                     required
//                     // max={10}
//                   />
//                   <br />
//                   <label className="">Images Upload </label>
//                   <input
//                   size="xl"
//                   type="file"
//                   onChange={(e)=>setImg1(e.target.files[0])}
//                   name="select_image"
//                   required 
//                   />
//                   <div className="create mt-4 h d-flex justify-content-end">
//                     <Button
//                       className=' mt-3 button-background0'
//                       // variant="contained"
                      
//                       onClick={(e)=> {
                        
                        
                      
//                         addEvent(e)
//                         setOpen(false)
                        
                        
                      
                      
//                       } }
//                     >
//                       Save
//                     </Button>
//                     <Button
//                       className="button-background0 ms-4 mt-3"
//                       variant=""
//                       type='button'
//                       onClick={() => setOpen(false)}
//                     >
//                       Cancel
//                     </Button>
//                   </div>
//                 </div>
//               </div>
//             </form>
//           </Box>
//         </Dialog>

//         <div class="container-fluid">
//         <div class="col mt-2 d-flex justify-content-between">
//           <h1 class="d-inline-block">Event Management</h1>
//         </div>
//       </div>
//       {/* <Box className="pb-3 d-flex justify-content-between mx-3">
//         <Grid container>
//           <Grid item md={6} xs={12}>
//             <input
//               className="w-75 form-control"
//               type="search"
//               placeholder="Search"
             
//             />
//           </Grid>
//         </Grid>
//       </Box> */}
//       <Box sx={{ m: 2 }} className="border">
//         <Table>
//           <TableHead>
//             <TableRow>
//               {/ <TableCell className="w-12"><b>S.No</b></TableCell> /}
//               <TableCell className="w-20">
//                 <b>Theme of event</b>
//               </TableCell>
//               <TableCell>
//                 <b>Location</b>
//               </TableCell>
//               <TableCell>
//                 <b>Name of cafe</b>
//               </TableCell>
//               <TableCell>
//                 <b>Images upload</b>
//               </TableCell>
//             </TableRow>
//           </TableHead>
//           <TableBody>
//             {data.map((res, index) => {
//               return (
//                 <TableRow key={index}>
//                   <TableCell>{res.theme_of_event}</TableCell>
//                   <TableCell>{res.location}</TableCell>
//                   <TableCell>{res.name_of_cafe}</TableCell>
//                   <TableCell><img src={res.downloadURL} className='image-size' /></TableCell>
//                 </TableRow>
//               );
//             })}
//           </TableBody>
//         </Table>
//       </Box>


//     </div>

    
//   )
// }











