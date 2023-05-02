import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import '../../assets/style.css'
import Avatar from '../../components/common/Avatar'
import { Link } from 'react-router-dom'

const EachProject = () => {


  return (
    <>
      <tr className='position-relative'>
        <td className='fw-bold'>15</td>
        <td>sharket</td>
        <td><div className='badge rounded-pill bg-dark'>Running</div></td>
        <td>13</td>
        <td>
          <Avatar image='https://randomuser.me/api/portraits/men/57.jpg' id='123' name='John.Id' />
          <Avatar image='https://randomuser.me/api/portraits/men/58.jpg' id='123' name='John.Id' />
          <Avatar image='https://randomuser.me/api/portraits/men/59.jpg' id='123' name='John.Id' />
          <Avatar image='https://randomuser.me/api/portraits/men/60.jpg' id='123' name='John.Id' />
          <Avatar image='https://randomuser.me/api/portraits/men/61.jpg' id='123' name='John.Id' />
        </td>
        <td className='fw-bold'>IT</td>
      </tr>
    </>

  )
}

export default EachProject
