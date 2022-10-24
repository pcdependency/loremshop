import React from "react";
import "../css/FAQ.css";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useInView } from "react-intersection-observer";
import { faq } from "../data";
import Fade from "react-reveal/Fade";

const accordionStyles = {
  backgroundColor: "#2b3034",
  border: "1px solid #454545",
  color: "white",
  "& .MuiSvgIcon-root": {
    fill: "#428ea1",
  },
  borderRadius: "10px !important",
  "& .Mui-expanded": {
    backgroundColor: "#428ea1",
    borderRadius: "10px",
    "& .MuiSvgIcon-root": {
      fill: "#2b3034",
    },
  },
};

const FAQ = ({ setInView }) => {
  const { ref, inView } = useInView({
    onChange: (iV) => setInView("questions", iV),
    threshold: 0.6,
  });

  return (
    <div className="faqContainer" id="faqContainer" ref={ref}>
      <div className="faqInnerContainer">
        <Fade bottom cascade when={inView}>
          <div className="sectionTitleContainer">
            <p className="sectionTitle">FAQ</p>
            <p className="sectionDescription">Frequently Asked Questions</p>
            <p className="sectionNotify">Irure sit duis duis non officia.</p>
          </div>
        </Fade>
        <div className="faqQuestionsContainer">
          {faq.map((q, idx) => {
            return (
              <div className="accordionBorderContainer" key={`question${idx}`}>
                <Accordion sx={accordionStyles}>
                  <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <p>{q.question}?</p>
                  </AccordionSummary>
                  <AccordionDetails
                    sx={{
                      backgroundColor: "#2b3034",
                      paddingTop: "30px",
                    }}
                  >
                    <p className="answersTitle">Answers:</p>
                    <ul className="answer">
                      {q.answers.map((a, i) => {
                        return (
                          <li key={`answer${i}`}>
                            <p>{a}</p>
                          </li>
                        );
                      })}
                      {q.links.map((l, i) => {
                        return (
                          <li key={`link${i}`}>
                            <a className="faqLink" href={l}>
                              {l}
                            </a>
                          </li>
                        );
                      })}
                    </ul>
                    <div className="answerIconsContainer"></div>
                  </AccordionDetails>
                </Accordion>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default FAQ;
