import React, { useState } from 'react';
import tools from '../content/tools.json';
import useInView from '../hooks/useInView';
import '../App.css';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Typography from '@mui/material/Typography';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: '#D9D9D9',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

// Import images dynamically
const images = require.context('../images/tools', false, /\.(png|jpe?g|svg|webp)$/);
const imageMap = {};
images.keys().forEach((key) => {
  const imageName = key.replace('./', '').replace(/\.[^/.]+$/, '');
  imageMap[imageName] = images(key);
});

function ToolSkills() {
  const [ref, isInView] = useInView(0.5);
  const [selectedSkill, setSelectedSkill] = useState(null);

  const [open, setOpen] = React.useState(false);
  const handleOpen = (toolName) => {
    setSelectedSkill(toolName);
    setOpen(true);
  }
  const handleClose = () => { 
    setSelectedSkill(null);
    setOpen(false);
  }

  return (
    <div 
      className={`bg-grey p-4 rounded-lg md:max-w-6xl transform transition-transform duration-1000 ease-in-out md:m-4 ${isInView ? 'scale-100' : 'scale-75'}`} 
      ref={ref}
    >
      <h1 className="text-4xl font-bold mb-6 text-white text-center">Programming Languages, Frameworks, Libraries, and Tools</h1>
      <div className="flex flex-wrap justify-center gap-8 text-lg max-w-screen">
        {Object.keys(tools).map((toolName, index) => (
          <div key={index} className="flex flex-col items-center scale-100 hover:scale-125 transition ease-in-out duration-300">
            <img
              src={imageMap[toolName]}
              alt={toolName}
              className="h-24 cursor-pointer"
              onClick={() => handleOpen(toolName)}
            />
            <p className="mt-2 text-white text-center">{toolName}</p>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedSkill && (
        <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 300,
          },
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <Typography variant="h6" component="h5">
              Where I learnt
            </Typography>
            <Typography id="transition-modal-title" variant="h5" component="h2">
              <b>{selectedSkill}</b>
            </Typography>
            <Typography id="transition-modal-description" sx={{ mt: 2 }}>
                <ul>
                    {tools[selectedSkill].experience.map((exp, idx) => (
                        <li key={idx} className="mb-2">{exp}</li>
                    ))}
                </ul>
            </Typography>
          </Box>
        </Fade>
      </Modal>
        
      )}
    </div>
  );
}

export default ToolSkills;
