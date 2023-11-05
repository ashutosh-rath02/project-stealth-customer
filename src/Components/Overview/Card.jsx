import { FaMapMarker, FaMoneyBillWave } from 'react-icons/fa';
import './OverviewCard.css';

const OverviewCard = () => {
  return (
    <div className='outer-div bg-white rounded-lg shadow-lg p-8 max-w-xl mx-auto my-16 '>
      <div className='header'>
        <h3 className='text-3xl font-bold text-gray-700 mb-2'>Basic Details</h3>
        <button className='edit-btn px-4 py-2 bg-blue-500 text-white rounded-md'>Edit</button>
      </div>
      <div className='main-div space-x-4 space-y-4 '>
        <div className='userdetails'>
          <div className='image'>
            <img
              src='https://imgs.search.brave.com/uyA_EfHeVrK6TtNYrqdiZ5Ja0DYTr5fXzs2WbTL0wOo/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9zdDMu/ZGVwb3NpdHBob3Rv/cy5jb20vNjY3Mjg2/OC8xMzcwMS92LzQ1/MC9kZXBvc2l0cGhv/dG9zXzEzNzAxNDEy/OC1zdG9jay1pbGx1/c3RyYXRpb24tdXNl/ci1wcm9maWxlLWlj/b24uanBn'
              alt='Profile '
              className='profile-image'
            />
          </div>
          <div className='box'>
            <div className='credentials'>
              <h3 className='name text-xl'>User Name</h3>
              <h3 className='email'>example@gmail.com</h3>
            </div>
            <h3 className='designation'>Owner</h3>
          </div>
        </div>
        <div className='single-row'>
          <FaMapMarker className='mr-3 text-xl' />
          <h3 className='key'>Location</h3>
          <h3 className='value'>Delhi</h3>
        </div>
        <div className='single-row'>
          <FaMoneyBillWave className='mr-3 text-xl' />
          <h3 className='key'>Price Plan</h3>
          <h3 className='value'>Yearly</h3>
        </div>
        <div className='single-row'>
          <FaMoneyBillWave className='mr-3 text-xl' />
          <h3 className='key'>Pricing Start Date</h3>
          <h3 className='value'>StartDate</h3>
        </div>
        <div className='single-row'>
          <FaMoneyBillWave className='mr-3 text-xl' />
          <h3 className='key'>Pricing End Date</h3>
          <h3 className='value'>EndDate</h3>
        </div>
        <div className='single-row'>
          <FaMoneyBillWave className='mr-3 text-xl' />
          <h3 className='key'>Color Theme</h3>
          <input className='value' type='color' id='favcolor' name='favcolor' value='#ff0000' />
        </div>
      </div>
    </div>
  );
};

export default OverviewCard;