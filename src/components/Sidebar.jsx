import myPicture from '../assets/me_cropped.jpeg'
import profile from '../../data/profile.js'
import links from '../../data/links.js'

import Curtains from './Curtains.jsx'

function Sidebar() {
  console.log(links)

  const linkItems = links.map((link) => {
    return (
      <a key={link.id} href={link.url} className='link-item text-tertiary'>
        <img src={link.img} alt={link.name} />
        <div className=''>{link.name}</div>
        {/* <div className=''>@{link.url.split('/').pop()}</div> */}
        {/* <div className=''>{link.url}</div> */}
      </a>
    )
  })
  return (
    <div className='sidebar bg-primary'>
      <div className='profile-picture'>
        <img src={myPicture} alt='My Picture' className='border' />
        <Curtains />
      </div>
      <div className='border text-bg bg-secondary text-primary profile-name'>
        {profile.name}
        <Curtains />
      </div>
      <div className='bg-tertiary text-secondary profile-description'>
        {profile.description}
        <Curtains />
      </div>
      <div className='link-list'>
        {linkItems}
        <Curtains />
      </div>

      {/* <Curtains /> */}
    </div>
  )
}

export default Sidebar
