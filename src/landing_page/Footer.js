import React from "react";

function Footer() {
  return (
    <footer
      className="border-top mt-5"
      style={{ backgroundColor: "rgb(250,250,250)" }}
    >
      <div className="container">
        <div className="row">
          <div className="col">
            <img src="media\logo.svg" style={{ width: "40%" }} alt="Logo" />
            <p style={{ marginTop: "1rem", fontSize: "13px" }}>
              &copy; 2010 - 2024, Zerodha Broking Ltd.
            </p>
            <p style={{ marginTop: "-1rem", fontSize: "13px" }}>
              All rights reserved. <br></br>
              <a href="" style={{ color: "black", textDecoration: "none" }}>
                <i
                  class="fa-brands fa-x-twitter fs-5 mt-2 "
                  style={{ marginLeft: "10px" }}
                ></i>{" "}
              </a>
              <a href="" style={{ color: "black", textDecoration: "none" }}>
                <i
                  class="fa-brands fa-square-facebook fs-5 mt-2"
                  style={{ marginLeft: "10px" }}
                ></i>
              </a>
              <a href="" style={{ color: "black", textDecoration: "none" }}>
                <i
                  class="fa-brands fa-instagram fs-5 mt-2"
                  style={{ marginLeft: "10px" }}
                ></i>{" "}
              </a>
              <a href="" style={{ color: "black", textDecoration: "none" }}>
                <i
                  class="fa-brands fa-linkedin-in fs-5 mt-2"
                  style={{ marginLeft: "10px" }}
                ></i>{" "}
              </a>
            </p>
          </div>
          <div className="col">
            <p className="fs-5 text-muted">Company</p>
            <a href="#" style={{ color: "black", textDecoration: "none" }}>
              About
            </a>{" "}
            <br></br>
            <a href="#" style={{ color: "black", textDecoration: "none" }}>
              Products
            </a>
            <br></br>
            <a href="#" style={{ color: "black", textDecoration: "none" }}>
              Pricing
            </a>
            <br></br>
            <a href="#" style={{ color: "black", textDecoration: "none" }}>
              Referral programme
            </a>{" "}
            <br></br>
            <a href="#" style={{ color: "black", textDecoration: "none" }}>
              Careers
            </a>
            <br></br>
            <a href="#" style={{ color: "black", textDecoration: "none" }}>
              Zerodha.tech
            </a>
            <br></br>
            <a href="#" style={{ color: "black", textDecoration: "none" }}>
              ress & media
            </a>
            <br></br>
            <a href="#" style={{ color: "black", textDecoration: "none" }}>
              Zerodha Cares (CSR)
            </a>
            <br></br>
          </div>
          <div className="col">
            <p className="fs-5 text-muted">Support</p>
            <a href="#" style={{ color: "black", textDecoration: "none" }}>
              Contact us
            </a>{" "}
            <br />
            <a href="#" style={{ color: "black", textDecoration: "none" }}>
              Support portal
            </a>{" "}
            <br />
            <a href="#" style={{ color: "black", textDecoration: "none" }}>
              Z-Connect blog
            </a>{" "}
            <br />
            <a href="#" style={{ color: "black", textDecoration: "none" }}>
              List of charges
            </a>{" "}
            <br />
            <a href="#" style={{ color: "black", textDecoration: "none" }}>
              Downloads & resources
            </a>{" "}
            <br />
            <a href="#" style={{ color: "black", textDecoration: "none" }}>
              Videos
            </a>{" "}
            <br />
            <a href="#" style={{ color: "black", textDecoration: "none" }}>
              Market overview
            </a>{" "}
            <br />
            <a href="#" style={{ color: "black", textDecoration: "none" }}>
              How to file a complaint?
            </a>{" "}
            <br />
            <a href="#" style={{ color: "black", textDecoration: "none" }}>
              Status of your complaints
            </a>{" "}
            <br />
          </div>
          <div className="col">
            <p className="fs-5 text-muted">Account</p>
            <a href="#" style={{ color: "black", textDecoration: "none" }}>
              Open an account
            </a>{" "}
            <br />
            <a href="#" style={{ color: "black", textDecoration: "none" }}>
              Fund transfer
            </a>
          </div>
        </div>
        <p className="mt-5" style={{ fontSize: "12px" }}>
          Zerodha Broking Ltd.: Member of NSE, BSE​ &​ MCX – SEBI Registration
          no.: INZ000031633 CDSL/NSDL: Depository services through Zerodha
          Broking Ltd. – SEBI Registration no.: IN-DP-431-2019 Commodity Trading
          through Zerodha Commodities Pvt. Ltd. MCX: 46025; NSE-50001 – SEBI
          Registration no.: INZ000038238 Registered Address: Zerodha Broking
          Ltd., #153/154, 4th Cross, Dollars Colony, Opp. Clarence Public
          School, J.P Nagar 4th Phase, Bengaluru - 560078, Karnataka, India. For
          any complaints pertaining to securities broking please write to{" "}
          <a href="#" style={{ fontSize: "12px", textDecoration: "none" }}>
            complaints@zerodha.com
          </a>
          , for DP related to{" "}
          <a href="#" style={{ fontSize: "12px", textDecoration: "none" }}>
            dp@zerodha.com.
          </a>{" "}
          Please ensure you carefully read the Risk Disclosure Document as
          prescribed by SEBI | ICF{" "}
        </p>{" "}
        <p style={{ fontSize: "12px" }}>
          Procedure to file a complaint on SEBI SCORES: Register on SCORES
          portal. Mandatory details for filing complaints on SCORES: Name, PAN,
          Address, Mobile Number, E-mail ID. Benefits: Effective Communication,
          Speedy redressal of the grievances{" "}
        </p>{" "}
        <a href="#" style={{ fontSize: "12px", textDecoration: "none" }}>
          Smart Online Dispute Resolution | Grievances Redressal Mechanism{" "}
        </a>{" "}
        <p style={{ fontSize: "12px" }}>
          Investments in securities market are subject to market risks; read all
          the related documents carefully before investing.
        </p>{" "}
        <br />{" "}
        <p style={{ fontSize: "12px" }}>
          {" "}
          Attention investors: 1) Stock brokers can accept securities as margins
          from clients only by way of pledge in the depository system w.e.f
          September 01, 2020. 2) Update your e-mail and phone number with your
          stock broker / depository participant and receive OTP directly from
          depository on your e-mail and/or mobile number to create pledge. 3)
          Check your securities / MF / bonds in the consolidated account
          statement issued by NSDL/CDSL every month.{" "}
        </p>{" "}
        <p style={{ fontSize: "12px" }}>
          "Prevent unauthorised transactions in your account. Update your mobile
          numbers/email IDs with your stock brokers. Receive information of your
          transactions directly from Exchange on your mobile/email at the end of
          the day. Issued in the interest of investors. KYC is one time exercise
          while dealing in securities markets - once KYC is done through a SEBI
          registered intermediary (broker, DP, Mutual Fund etc.), you need not
          undergo the same process again when you approach another
          intermediary." Dear Investor, if you are subscribing to an IPO, there
          is no need to issue a cheque. Please write the Bank account number and
          sign the IPO application form to authorize your bank to make payment
          in case of allotment. In case of non allotment the funds will remain
          in your bank account. As a business we don't give stock tips, and have
          not authorized anyone to trade on behalf of others. If you find anyone
          claiming to be part of Zerodha and offering such services, please
          &nbsp;
          <a href="#" style={{ fontSize: "12px", textDecoration: "none" }}>
            create a ticket here.{" "}
          </a>{" "}
        </p>
      </div>
    </footer>
  );
}

export default Footer;
