import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';

const Sidebar = () => {
    const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

    // early return option

    if(!isMenuOpen) return null;
  return (
    <div className='p-6 w-28'>
        <ul>
           <Link to={'/'}> <li className='text-xs h-16'> <img alt="home logo"  className='w-8 h-6 mr-20'  src="https://d1b1fjiwh8olf2.cloudfront.net/icon/premium/png-256/2236261.png?token=eyJhbGciOiJoczI1NiIsImtpZCI6ImRlZmF1bHQifQ__.eyJpc3MiOiJkMWIxZmppd2g4b2xmMi5jbG91ZGZyb250Lm5ldCIsImV4cCI6MTY4MTM0NDAwMCwicSI6bnVsbCwiaWF0IjoxNjgxMTI1MDExfQ__.a86a2da53adad34e5fc1f59846d6665503b998cffb4920eee5e43b5e1a811180" /> Home</li></Link>
            <li className='text-xs h-20'> <img alt="shorts logo"  className='w-12 h-10 mr-20'  src="https://logowik.com/content/uploads/images/youtube-shorts-black3609.jpg" /> Shorts</li>
            <li className='text-xs h-20'> <img alt="subscriptions logo"  className='w-10 h-8 mr-10 text-left'  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnId1oiOjWXbglJRNrNojVP9JB99DR6epaIGkog7W_KQ&usqp=CAU&ec=48665699" />Subscription</li>
            <li className='text-xs h-20'><img alt="subscriptions logo"  className='w-8 h-8 mr-20'  src="https://static.vecteezy.com/system/resources/previews/011/994/022/original/simple-video-library-icon-sign-design-free-png.png" />Library</li>
            <li className='text-xs h-20'><img alt="subscriptions logo"  className='w-8 h-8 mr-20'  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbfCYLn-WXT3RBe7GcK7rJO0An21wpinZlvmF-5XAN3w&usqp=CAU&ec=48665699" />History</li>
        </ul>
    </div>
  )
}

export default Sidebar