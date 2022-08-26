import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className='bg-neutral text-neutral-content text-center font-bold text-xl  pb-6 '>

   
    <footer className="footer p-10 bg-neutral text-neutral-content">
      <div>
        <span className="footer-title text-xl  text-warning">যোগাযোগ তথ্য</span>
        <Link to="" className="link link-hover">চট্টগ্রাম, বাংলাদেশ</Link>
        <Link to="" className="link link-hover">example@Gmail.Com</Link>
        <Link to="" className="link link-hover"> +123-456-7890</Link>
        <Link to="" className="link link-hover"> +123-456-7890</Link>
      </div>
      <div>
        <span className="footer-title text-xl  text-warning">শাখার অবস্থান</span>
        <Link to="" className="link link-hover">চট্টগ্রাম</Link>
        <Link to="" className="link link-hover">ঢাকা</Link>
        <Link to="" className="link link-hover">সিলেট</Link>
        <Link to="" className="link link-hover">রাজশাহী</Link>
      </div>
      <div>
        <span className="footer-title text-xl  text-warning">সরাসরি লিঙ্ক</span>
        <Link to="" className="link link-hover">হোম</Link>
        <Link to="" className="link link-hover">আমাদের </Link>
        <Link to="" className="link link-hover">ক্যাটাগরি</Link>
        <Link to="" className="link link-hover">নিবন্ধন</Link>
        <Link to="" className="link link-hover">যোগাযোগ</Link>
      </div>
      <div>
        <span className="footer-title text-xl  text-warning ">আমাদের অনুসরণ করুন</span>
        <Link to="" className="link link-hover">ইনস্টাগ্রাম</Link>
        <Link to="" className="link link-hover">ফেসবুক</Link>
        <Link to="" className="link link-hover">টুইটার</Link>
        <Link to="" className="link link-hover">লিঙ্কডইন</Link>
      </div>
      {/* <div>
        
        <span className="footer-title">Newsletter</span>
        <div className="form-control w-80">
          <label className="label">
            <span className="label-text">Enter your email address</span>
          </label>
          <div className="relative">
            <input type="text" placeholder="username@site.com" className="input input-bordered w-full pr-16" />
            <button className="btn btn-primary absolute top-0 right-0 rounded-l-none">Subscribe</button>
          </div>
        </div>
      </div> */}
    </footer>

    <h3 className="text-center"> <span className="special-text text-warning">তাজা জিনিস</span> দ্বারা নির্মিত &copy;<span className="special-text text-warning"> কপিরাইট </span> সর্বস্বত্ব সংরক্ষিত</h3>
    </div>
  );
};

export default Footer;
 