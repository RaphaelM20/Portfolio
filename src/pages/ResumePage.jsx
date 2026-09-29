import { FiArrowUpRight, FiDownload, FiFileText } from "react-icons/fi";
import profile from "../data/profile";
import "./ResumePage.css";

function ResumePage() {
  return (
    <div className="container page">
      <header className="page-header resume-header">
        <div className="resume-heading">
          <p className="eyebrow">PDF · 1 page</p>
          <h1 className="page-title">Resume</h1>
        </div>
        <div className="button-row">
          <a href={profile.resume} download className="button button--primary">
            <FiDownload aria-hidden="true" />
            Download PDF
          </a>
          <a
            href={profile.resume}
            target="_blank"
            rel="noreferrer"
            className="button button--secondary"
          >
            Open in new tab
            <FiArrowUpRight aria-hidden="true" />
          </a>
        </div>
      </header>

      <div className="resume-frame">
        <iframe src={profile.resume} title="Raphael Moreira's resume (PDF)" />
      </div>

      <div className="resume-fallback">
        <FiFileText size={24} aria-hidden="true" />
        <p>
          PDF previews don't display reliably on small screens. Use the buttons above
          to download the resume or open it in a new tab.
        </p>
      </div>
    </div>
  );
}

export default ResumePage;
