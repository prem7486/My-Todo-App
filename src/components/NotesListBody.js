import React from 'react'
import ListMenu from './ListMenu'
import NoteContainer from './NoteContainer'



function NotesListBody({ minimizedMenu }) { 

  return (
    <div className='flex pt-20'>
      <ListMenu minimizedMenu={minimizedMenu}/>
      <NoteContainer />
    </div>
  );
}

export default NotesListBody;


