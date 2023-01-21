import React from "react";
import "./Home.css";
import "./images/PunishedKnight_Mind_with_roots_and_trees_growing_throughout_eth_4f227e67-b07c-4824-b54f-93d7301b9973.png";
import "./images/PunishedKnight_Mind_with_roots_and_trees_growing_throughout_eth_6e9b04b1-2ad3-4d77-96af-a727f3133277.png";

function Home() {
  return <Frame1 {...frame1Data} />;
}

function Frame1(props) {
  const {
    virtuaHelpContainer,
    welcomeToVirtuaHelp,
    greetingsOnYourNewRoadToAHappyLifeA,
    overlapGroup2,
    withOurAllEncompassingApproachtoMen,
    punishedknight_Mind_With_Roots_And_,
    overlapGroup1,
    contactMeShuaybAbdulkadir5GmailCom
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="frame-1 screen">
        <div
          className="virtua-help-container"
          style={{ backgroundImage: `url(${virtuaHelpContainer})` }}
        >
          <img
            className="welcome-to-virtua-help"
            src={welcomeToVirtuaHelp}
            alt="Welcome to Virtua Help"
          />
          <img
            className="greetings-on-your-ne"
            src={greetingsOnYourNewRoadToAHappyLifeA}
            alt="Greetings on your new road to a happy life and a healthier mind.
       Virua Help is comitted to giving you the information and resources you require to enhance your mental health and give you the capacity to take charge of it. Join us right now to begin feeling your best."
          />
        </div>

        <div className="flex-row">
          <div
            className="overlap-group2"
            style={{ backgroundImage: `url(${overlapGroup2})` }}
          >
            <img
              className="with-our-all-encompa"
              src={withOurAllEncompassingApproachtoMen}
              alt="With our all-encompassing approach to mental health , you can transform your mind and enhance your well-being. On Virtua Help, you can find useful tips, knowledgeable guidance, and a welcoming community to help you on your way to a better and healthier life. Start now and observe the transformation for yourself."
            />
          </div>

          <img
            className="punished-knight_-min"
            src={punishedknight_Mind_With_Roots_And_}
            alt="PunishedKnight_Mind_with_roots_and_trees_growing_throughout_eth_6e9b04b1-2ad3-4d77-96af-a727f3133277 1"
          />
        </div>

        <div
          className="overlap-group1"
          style={{ backgroundImage: `url(${overlapGroup1})` }}
        >
          <img
            className="contact-me-shuaybabdulkadir5gmailcom"
            src={contactMeShuaybAbdulkadir5GmailCom}
            alt="Contact Me: Shuayb.abdulkadir5@gmail.com"
          />
        </div>
      </div>
    </div>
  );
}

const frame1Data = {
  virtuaHelpContainer:
    "punishedknight-mind-with-roots-and-trees-growing-throughout-eth.png",
  welcomeToVirtuaHelp: "welcome-to-virtua-help.png",
  greetingsOnYourNewRoadToAHappyLifeA:
    "greetings-on-your-new-road-to-a-happy-life-and-a-healthier-mind.png",
  overlapGroup2: "rectangle-3.png",
  withOurAllEncompassingApproachtoMen:
    "with-our-all-encompassing-approach-to-mental-health-you-can-tra.png",
  punishedknight_Mind_With_Roots_And_:
    "punishedknight-mind-with-roots-and-trees-growing-throughout-eth-1.png",
  overlapGroup1: "rectangle-2.png",
  contactMeShuaybAbdulkadir5GmailCom:
    "contact-me-shuayb-abdulkadir5-gmail-com.png"
};

export default Home;
