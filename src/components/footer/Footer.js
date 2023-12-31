import React from "react";
import "./footer.css";

import { motion } from "framer-motion";

const Animation = {
  hidden: {
    x: -100,
    opacity: 0,
  },
  visible: (custom) => ({
    x: 0,
    opacity: 1,
    transition: { delay: custom * 0.3 },
  }),
};

const Footer = () => {
  return (
    <motion.section initial="hidden" whileInView="visible" className="footer">
      <div className="container">
        <div className="footer__wrapper">
          <motion.div custom={1} variants={Animation} className="footer__left">
            <a className="footer__logo" href="#!">
              fashion
            </a>
            <p className="footer__text">
              Complete your style with awesome clothes from us.
            </p>
            <ul className="social">
              <li className="fb">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="52"
                  height="53"
                  viewBox="0 0 52 53"
                >
                  <rect
                    y="0.395996"
                    width="52"
                    height="52"
                    rx="15"
                    // fill="#EBD96B"
                  />
                  <path
                    d="M31.5122 27.4585L32.2065 22.9341H27.8652V19.998C27.8652 18.7603 28.4717 17.5537 30.416 17.5537H32.3896V13.7017C32.3896 13.7017 30.5986 13.396 28.8862 13.396C25.311 13.396 22.9741 15.563 22.9741 19.4858V22.9341H19V27.4585H22.9741V38.396H27.8652V27.4585H31.5122Z"
                    fill="black"
                  />
                </svg>
              </li>
              <li className="instagram">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="52"
                  height="53"
                  viewBox="0 0 52 53"
                  fill="none"
                >
                  <rect
                    y="0.395996"
                    width="52"
                    height="52"
                    rx="15"
                    // fill="#EBD96B"
                  />
                  <path
                    d="M25.946 20.7268C22.8406 20.7268 20.3357 23.2317 20.3357 26.3372C20.3357 29.4426 22.8406 31.9475 25.946 31.9475C29.0515 31.9475 31.5564 29.4426 31.5564 26.3372C31.5564 23.2317 29.0515 20.7268 25.946 20.7268ZM25.946 29.9846C23.9392 29.9846 22.2986 28.3489 22.2986 26.3372C22.2986 24.3254 23.9343 22.6897 25.946 22.6897C27.9578 22.6897 29.5935 24.3254 29.5935 26.3372C29.5935 28.3489 27.9529 29.9846 25.946 29.9846ZM33.0945 20.4973C33.0945 21.2249 32.5085 21.8059 31.7859 21.8059C31.0584 21.8059 30.4773 21.22 30.4773 20.4973C30.4773 19.7747 31.0632 19.1887 31.7859 19.1887C32.5085 19.1887 33.0945 19.7747 33.0945 20.4973ZM36.8103 21.8254C36.7273 20.0725 36.3269 18.5198 35.0427 17.2405C33.7634 15.9612 32.2107 15.5608 30.4578 15.4729C28.6511 15.3704 23.2361 15.3704 21.4294 15.4729C19.6814 15.5559 18.1287 15.9563 16.8445 17.2356C15.5603 18.5149 15.1648 20.0676 15.0769 21.8206C14.9744 23.6272 14.9744 29.0422 15.0769 30.8489C15.1599 32.6018 15.5603 34.1545 16.8445 35.4338C18.1287 36.7131 19.6765 37.1135 21.4294 37.2014C23.2361 37.304 28.6511 37.304 30.4578 37.2014C32.2107 37.1184 33.7634 36.718 35.0427 35.4338C36.322 34.1545 36.7224 32.6018 36.8103 30.8489C36.9128 29.0422 36.9128 23.6321 36.8103 21.8254ZM34.4763 32.7874C34.0955 33.7444 33.3582 34.4817 32.3962 34.8674C30.9558 35.4387 27.5378 35.3069 25.946 35.3069C24.3542 35.3069 20.9314 35.4338 19.4958 34.8674C18.5388 34.4866 17.8015 33.7493 17.4158 32.7874C16.8445 31.3469 16.9763 27.929 16.9763 26.3372C16.9763 24.7454 16.8494 21.3225 17.4158 19.887C17.7966 18.9299 18.5339 18.1926 19.4958 17.8069C20.9363 17.2356 24.3542 17.3674 25.946 17.3674C27.5378 17.3674 30.9607 17.2405 32.3962 17.8069C33.3533 18.1877 34.0906 18.925 34.4763 19.887C35.0476 21.3274 34.9158 24.7454 34.9158 26.3372C34.9158 27.929 35.0476 31.3518 34.4763 32.7874Z"
                    fill="black"
                  />
                </svg>
              </li>
              <li className="tw">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="52"
                  height="53"
                  viewBox="0 0 52 53"
                  fill="none"
                >
                  <rect
                    y="0.395996"
                    width="52"
                    height="52"
                    rx="15"
                    // fill="#EBD96B"
                  />
                  <path
                    d="M38.4302 21.4563C38.446 21.6783 38.446 21.9004 38.446 22.1225C38.446 28.8959 33.2906 36.7005 23.868 36.7005C20.9651 36.7005 18.2684 35.8598 16 34.4004C16.4125 34.448 16.809 34.4639 17.2373 34.4639C19.6326 34.4639 21.8375 33.6549 23.5983 32.2748C21.3458 32.2272 19.4581 30.752 18.8077 28.7215C19.125 28.769 19.4422 28.8008 19.7754 28.8008C20.2354 28.8008 20.6955 28.7373 21.1237 28.6263C18.776 28.1504 17.0152 26.0882 17.0152 23.5978V23.5343C17.6973 23.915 18.4905 24.153 19.3312 24.1847C17.9511 23.2646 17.0469 21.6942 17.0469 19.9175C17.0469 18.9658 17.3007 18.0933 17.7449 17.3319C20.2671 20.441 24.0583 22.4714 28.3096 22.6936C28.2303 22.3128 28.1827 21.9163 28.1827 21.5197C28.1827 18.6961 30.4669 16.396 33.3064 16.396C34.7816 16.396 36.1141 17.0146 37.05 18.014C38.208 17.7919 39.3184 17.3636 40.302 16.7767C39.9212 17.9665 39.1122 18.9658 38.0494 19.6003C39.0805 19.4893 40.0799 19.2037 40.9999 18.8072C40.302 19.8224 39.4295 20.7265 38.4302 21.4563Z"
                    fill="black"
                  />
                </svg>
              </li>
              <li className="in">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="52"
                  height="53"
                  viewBox="0 0 52 53"
                  fill="none"
                >
                  <rect
                    y="0.395996"
                    width="52"
                    height="52"
                    rx="15"
                    // fill="#EBD96B"
                  />
                  <path
                    d="M20.875 34.396H17.4766V21.7163H20.875V34.396ZM17.2773 18.4351C17.2773 17.9272 17.4453 17.5093 17.7812 17.1812C18.125 16.853 18.5898 16.689 19.1758 16.689C19.7539 16.689 20.2148 16.853 20.5586 17.1812C20.9023 17.5093 21.0742 17.9272 21.0742 18.4351C21.0742 18.9507 20.8984 19.3726 20.5469 19.7007C20.2031 20.0288 19.7461 20.1929 19.1758 20.1929C18.6055 20.1929 18.1445 20.0288 17.793 19.7007C17.4492 19.3726 17.2773 18.9507 17.2773 18.4351Z"
                    fill="black"
                  />
                  <path
                    d="M27.273 21.7163L27.3784 23.1812C28.2847 22.0483 29.4995 21.4819 31.023 21.4819C32.3667 21.4819 33.3667 21.8765 34.023 22.6655C34.6792 23.4546 35.0152 24.6343 35.0308 26.2046V34.396H31.6441V26.2866C31.6441 25.5679 31.4878 25.0483 31.1753 24.728C30.8628 24.3999 30.3433 24.2358 29.6167 24.2358C28.6636 24.2358 27.9487 24.6421 27.4722 25.4546V34.396H24.0855V21.7163H27.273Z"
                    fill="black"
                  />
                </svg>
              </li>
            </ul>
          </motion.div>

          <motion.div custom={2} variants={Animation} className="footer__hight">
            <ul className="footer__social-right">
              <li className="footer__hight-title">Company</li>
              <li className="footer__hight-text">About</li>
              <li className="footer__hight-text">Contact us</li>
              <li className="footer__hight-text">Support</li>
              <li className="footer__hight-text">Careers</li>
            </ul>
            <ul className="footer__social-right">
              <li className="footer__hight-title">Quick Link</li>
              <li className="footer__hight-text">Share Location</li>
              <li className="footer__hight-text">Orders Tracking</li>
              <li className="footer__hight-text">Size Guide</li>
              <li className="footer__hight-text">FAQs</li>
            </ul>
            <ul className="footer__social-right">
              <li className="footer__hight-title">Legal</li>
              <li className="footer__hight-text">Terms & conditions</li>
              <li className="footer__hight-text">Privacy Policy</li>
            </ul>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Footer;
