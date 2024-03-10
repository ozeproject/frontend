import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import '../../app/globals.css';

const HomePage = () => {
  return (
    <div className="">
      <Navbar />
      <div className="border-b-2 border-gray-500">
        <div className="p-12">
          <div className="text-center text-4xl font-semibold">CONTACT US</div>
        </div>
      </div>
      <div className="">
        <div className="w-2/6 px-12 my-20 mx-auto">
          <div className="font-semibold text-xl mb-4">Project background</div>
          <div className="mb-4 pl-4">
            With an interest in doing business and are interested in fashion, clothes, and dressing, but when looking for or buying what we want, we find that many websites have beautiful UIs, but the steps to use them have many steps, so we want to try our hand at a web shop, buying and selling formats. new That reduces the purchasing process to be convenient, easy, and safe.
          </div>
          <div className="font-semibold text-xl mb-4">Members</div>
            <div className="mb-4">
            <table className="table-auto">
                <tbody>
                <tr>
                    <td className="px-4 py-2">1. 63130500072</td>
                    <td className="px-4 py-2">Nithi Lampay</td>
                </tr>
                <tr>
                    <td className=" px-4 py-2">2. 63130500112</td>
                    <td className=" px-4 py-2">Sarida Buakaew</td>
                </tr>
                <tr>
                    <td className=" px-4 py-2">3. 63130500156</td>
                    <td className=" px-4 py-2">Thanat Leeruengkij</td>
                </tr>
                </tbody>
            </table>
            </div>
          <div className="font-semibold text-xl mb-4">University information</div>
          <div className="mb-4 pl-4">
            <div className="font-semibold">School of Information Technology</div>
            King Mongkut's University of Technology Thonburi,
            126 Pracha-U-Thit Rd., Bangmod, Thungkru, Bangkok 10140, Thailand
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;
